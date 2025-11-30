import { prisma, getSession } from "@/lib/useful";

export async function GET(req) {
  try {
    const session = await getSession();
    if (session.role !== "ADMIN") {
      return Response.json({ error: "Only administrators can view categories" }, { status: 403 });
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

    // Load specific category for editing
    if (id) {
      const category = await prisma.category.findUnique({
        where: { id },
        include: {
          posts: { select: { id: true, title: true } },
        },
      });
      return Response.json(category);
    }

    // Return specific fields only
    if (selectFields) {
      const categories = await prisma.category.findMany({
        select: selectFields,
        orderBy: { [sortBy]: sortOrder },
      });
      return Response.json(categories);
    }

    // Get all categories with pagination and search
    const [categories, total] = await Promise.all([
      prisma.category.findMany({
        skip: (page - 1) * limit,
        take: limit,
        orderBy: { [sortBy]: sortOrder },
        where: {
          OR: [
            { name: { contains: search, mode: "insensitive" } },
            { slug: { contains: search, mode: "insensitive" } },
          ],
        },
        include: {
          posts: { select: { id: true, title: true } },
        },
      }),
      prisma.category.count({
        where: {
          OR: [
            { name: { contains: search, mode: "insensitive" } },
            { slug: { contains: search, mode: "insensitive" } },
          ],
        },
      }),
    ]);

    return Response.json({ categories, total }, { status: 200 });
  } catch (error) {
    console.error("API error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const session = await getSession();
    if (session.role !== "ADMIN") {
      return Response.json({ error: "Only administrators can create categories" }, { status: 403 });
    }

    const body = await req.json();
    const { name, slug } = body;

    if (!name?.trim()) {
      return Response.json({ error: "Name is required" }, { status: 400 });
    }

    if (!slug?.trim()) {
      return Response.json({ error: "Slug is required" }, { status: 400 });
    }

    // Check if name already exists
    const existingName = await prisma.category.findFirst({
      where: { name },
      select: { name: true },
    });

    if (existingName) {
      return Response.json({ error: "Category name already exists" }, { status: 409 });
    }

    // Check if slug already exists
    const existingSlug = await prisma.category.findFirst({
      where: { slug },
      select: { slug: true },
    });

    if (existingSlug) {
      return Response.json({ error: "Category slug already exists" }, { status: 409 });
    }

    const category = await prisma.category.create({
      data: {
        name,
        slug,
      },
      include: {
        posts: { select: { id: true, title: true } },
      },
    });

    return Response.json({ message: "Category created successfully", category }, { status: 201 });
  } catch (error) {
    console.error("API error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function PUT(req) {
  try {
    const session = await getSession();
    if (session.role !== "ADMIN") {
      return Response.json({ error: "Only administrators can update categories" }, { status: 403 });
    }

    const body = await req.json();
    const { id, name, slug } = body;

    if (!name?.trim()) {
      return Response.json({ error: "Name is required" }, { status: 400 });
    }

    if (!slug?.trim()) {
      return Response.json({ error: "Slug is required" }, { status: 400 });
    }

    // Check if name already exists for different category
    const existingName = await prisma.category.findFirst({
      where: { name, id: { not: id } },
    });

    if (existingName) {
      return Response.json({ error: "Category name already exists" }, { status: 409 });
    }

    // Check if slug already exists for different category
    const existingSlug = await prisma.category.findFirst({
      where: { slug, id: { not: id } },
    });

    if (existingSlug) {
      return Response.json({ error: "Category slug already exists" }, { status: 409 });
    }

    const category = await prisma.category.update({
      where: { id },
      data: {
        name,
        slug,
      },
      include: {
        posts: { select: { id: true, title: true } },
      },
    });

    return Response.json({ message: "Category updated successfully", category });
  } catch (error) {
    console.error("API error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    const session = await getSession();
    if (session.role !== "ADMIN") {
      return Response.json({ error: "Only administrators can delete categories" }, { status: 403 });
    }

    const { searchParams } = new URL(req.url);
    const id = Number(searchParams.get("id"));

    if (!id) {
      return Response.json({ error: "Category ID is required" }, { status: 400 });
    }

    // Check if category has posts assigned
    const postsCount = await prisma.post.count({
      where: {
        categories: {
          some: { id },
        },
      },
    });

    if (postsCount > 0) {
      return Response.json({
        error: "Category has posts assigned. Please remove them first",
      }, { status: 400 });
    }

    await prisma.category.delete({
      where: { id },
    });

    return Response.json({ message: "Category deleted successfully" });
  } catch (error) {
    console.error("API error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}