import { prisma, getSession } from "@/lib/useful";

export async function GET(req) {
  try {
    const session = await getSession();
    if (session.role !== "ADMIN") {
      return Response.json({ error: "Only administrators can view posts" }, { status: 403 });
    }

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id") ? Number(searchParams.get("id")) : null;
    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 10;
    const search = (searchParams.get("search") || "").trim().toLowerCase();
    const sortBy = searchParams.get("sortBy") || "id";
    const sortOrder = searchParams.get("sortOrder") || "desc";
    const col = searchParams.get("col")?.split(",") || null;
    const selectFields = col && col.length > 0 ? Object.fromEntries(col.map((c) => [c, true])) : undefined;

    // Load specific post for editing
    if (id) {
      const post = await prisma.post.findUnique({
        where: { id },
        include: {
          author: { select: { id: true, name: true, email: true } },
          categories: true,
          tags: true,
        },
      });
      return Response.json(post);
    }

    // Return specific fields only
    if (selectFields) {
      const posts = await prisma.post.findMany({
        select: selectFields,
        orderBy: { [sortBy]: sortOrder },
      });
      return Response.json(posts);
    }

    // Get all posts with pagination and search
    const [posts, total, published, draft] = await Promise.all([
      prisma.post.findMany({
        skip: (page - 1) * limit,
        take: limit,
        orderBy: { [sortBy]: sortOrder },
        where: {
          OR: [
            { title: { contains: search, mode: "insensitive" } },
            { content: { contains: search, mode: "insensitive" } },
            { author: { name: { contains: search, mode: "insensitive" } } },
          ],
        },
        include: {
          author: { select: { id: true, name: true, email: true } },
          categories: true,
          tags: true,
        },
      }),
      prisma.post.count({
        where: {
          OR: [
            { title: { contains: search, mode: "insensitive" } },
            { content: { contains: search, mode: "insensitive" } },
            { author: { name: { contains: search, mode: "insensitive" } } },
          ],
        },
      }),
      prisma.post.count({
        where: {
          published: true,
          OR: [
            { title: { contains: search, mode: "insensitive" } },
            { content: { contains: search, mode: "insensitive" } },
            { author: { name: { contains: search, mode: "insensitive" } } },
          ],
        },
      }),
      prisma.post.count({
        where: {
          published: false,
          OR: [
            { title: { contains: search, mode: "insensitive" } },
            { content: { contains: search, mode: "insensitive" } },
            { author: { name: { contains: search, mode: "insensitive" } } },
          ],
        },
      }),
    ]);

    return Response.json({ posts, total, published, draft });
  } catch (error) {
    console.error("API error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const session = await getSession();
    if (session.role !== "ADMIN") {
      return Response.json({ error: "Only administrators can create posts" }, { status: 403 });
    }

    const body = await req.json();
    const {
      title,
      slug,
      content,
      readTime,
      featureImage,
      featureAlt,
      metaTitle,
      metaDesc,
      ogImage,
      canonicalUrl,
      published = false,
      categoryIds = [],
      tagIds = [],
    } = body;

    if (!title?.trim()) {
      return Response.json({ error: "Title is required" }, { status: 400 });
    }

    if (!slug?.trim()) {
      return Response.json({ error: "Slug is required" }, { status: 400 });
    }

    if (!content?.trim()) {
      return Response.json({ error: "Content is required" }, { status: 400 });
    }

    // Check if slug already exists
    const existingPost = await prisma.post.findFirst({
      where: { slug },
      select: { slug: true },
    });

    if (existingPost) {
      return Response.json({ error: "Slug already exists" }, { status: 409 });
    }

    const post = await prisma.post.create({
      data: {
        title,
        slug,
        content,
        readTime,
        featureImage,
        featureAlt,
        metaTitle,
        metaDesc,
        ogImage,
        canonicalUrl,
        published,
        authorId: session.id,
        categories: {
          connect: categoryIds.map((id) => ({ id })),
        },
        tags: {
          connect: tagIds.map((id) => ({ id })),
        },
      },
      include: {
        author: { select: { id: true, name: true, email: true } },
        categories: true,
        tags: true,
      },
    });

    return Response.json({ message: "Post created successfully", post }, { status: 201 });
  } catch (error) {
    console.error("API error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function PUT(req) {
  try {
    const session = await getSession();
    if (session.role !== "ADMIN") {
      return Response.json({ error: "Only administrators can update posts" }, { status: 403 });
    }

    const body = await req.json();
    const {
      id,
      title,
      slug,
      content,
      readTime,
      featureImage,
      featureAlt,
      metaTitle,
      metaDesc,
      ogImage,
      canonicalUrl,
      published,
      categoryIds = [],
      tagIds = [],
    } = body;

    if (!title?.trim()) {
      return Response.json({ error: "Title is required" }, { status: 400 });
    }

    if (!slug?.trim()) {
      return Response.json({ error: "Slug is required" }, { status: 400 });
    }

    // Check if slug already exists for different post
    const existingPost = await prisma.post.findFirst({
      where: { slug, id: { not: id } },
    });

    if (existingPost) {
      return Response.json({ error: "Slug already exists" }, { status: 409 });
    }

    const post = await prisma.post.update({
      where: { id },
      data: {
        title,
        slug,
        content,
        readTime,
        featureImage,
        featureAlt,
        metaTitle,
        metaDesc,
        ogImage,
        canonicalUrl,
        published,
        categories: {
          set: [],
          connect: categoryIds.map((id) => ({ id })),
        },
        tags: {
          set: [],
          connect: tagIds.map((id) => ({ id })),
        },
      },
      include: {
        author: { select: { id: true, name: true, email: true } },
        categories: true,
        tags: true,
      },
    });

    return Response.json({ message: "Post updated successfully", post });
  } catch (error) {
    console.error("API error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    const session = await getSession();
    if (session.role !== "ADMIN") {
      return Response.json({ error: "Only administrators can delete posts" }, { status: 403 });
    }

    const { searchParams } = new URL(req.url);
    const id = Number(searchParams.get("id"));

    if (!id) {
      return Response.json({ error: "Post ID is required" }, { status: 400 });
    }

    // Check if post has comments
    const commentsCount = await prisma.comment.count({
      where: { postId: id },
    });

    if (commentsCount > 0) {
      return Response.json({
        error: "Post has comments. Please delete them first",
      }, { status: 400 });
    }

    await prisma.post.delete({
      where: { id },
    });

    return Response.json({ message: "Post deleted successfully" });
  } catch (error) {
    console.error("API error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}