# NextCodeHub - Modern Web Development Blog Platform

A production-ready blog platform built with Next.js 15, Prisma, PostgreSQL, and Tailwind CSS. Features include user authentication, commenting system, like/dislike functionality, admin dashboard, and SEO optimization.

## 🚀 Features

### Content Management
- ✅ Full-featured blog with categories and tags
- ✅ Rich text content with code syntax highlighting
- ✅ Featured images and post excerpts
- ✅ Related posts recommendations
- ✅ View counter and engagement metrics

### User Features
- ✅ User authentication (signup/login)
- ✅ Like/dislike blog posts
- ✅ Comment on blog posts
- ✅ User profile with avatar
- ✅ Role-based access control

### Admin Dashboard
- ✅ Secure admin authentication with NextAuth
- ✅ Manage blog posts (create, edit, delete)
- ✅ Manage categories and tags
- ✅ User management
- ✅ Analytics dashboard

### SEO & Performance
- ✅ Dynamic sitemap.xml generation
- ✅ Robots.txt configuration
- ✅ JSON-LD structured data
- ✅ Open Graph and Twitter Card meta tags
- ✅ Mobile-responsive design
- ✅ Server-side rendering (SSR)
- ✅ Optimized for Google Search Console

### Design
- ✅ Modern, clean UI with Tailwind CSS v4
- ✅ Dark/Light theme toggle
- ✅ Gradient accents and smooth animations
- ✅ Professional navbar with user dropdown
- ✅ Responsive footer with internal links
- ✅ Mobile-first responsive design

## 🛠️ Tech Stack

- **Framework**: [Next.js 15.5.6](https://nextjs.org) (App Router)
- **Database**: [PostgreSQL](https://www.postgresql.org) with [Prisma ORM](https://www.prisma.io)
- **Authentication**: [NextAuth.js](https://next-auth.js.org) + Custom Auth
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com)
- **Icons**: [Lucide React](https://lucide.dev)
- **Password Hashing**: [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- **Deployment**: [Vercel](https://vercel.com)

## 📋 Prerequisites

- Node.js 18+ installed
- PostgreSQL database (local or cloud)
- npm or yarn package manager

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/nextcodehub.git
cd nextcodehub
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup environment variables

Create a `.env` file in the root directory:

```env
# Database
DATABASE_URL="postgresql://postgres:password@localhost:5432/nextcodehub?schema=public"

# NextAuth
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"

# Site URL
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
```

**Generate NEXTAUTH_SECRET:**
```bash
openssl rand -base64 32
```

### 4. Setup database

```bash
# Generate Prisma Client
npx prisma generate

# Push database schema
npx prisma db push

# Seed database with sample data
npx prisma db seed
```

### 5. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your application.

## 🗂️ Project Structure

```
nextcodehub/
├── prisma/
│   ├── schema.prisma       # Database schema
│   └── seed.js             # Database seed file
├── public/                 # Static assets
├── src/
│   ├── app/
│   │   ├── layout.js       # Root layout with metadata
│   │   ├── page.js         # Home page
│   │   ├── blog/           # Blog pages
│   │   ├── about/          # About page
│   │   ├── contact/        # Contact page
│   │   ├── tools/          # Tools page
│   │   ├── admin/          # Admin dashboard
│   │   ├── api/            # API routes
│   │   ├── sitemap.js      # Dynamic sitemap
│   │   └── robots.js       # Robots.txt
│   ├── components/
│   │   ├── viewer/         # Public-facing components
│   │   ├── admin/          # Admin components
│   │   └── ui/             # Reusable UI components
│   ├── lib/
│   │   ├── prisma.js       # Prisma client singleton
│   │   ├── auth.js         # NextAuth configuration
│   │   └── useful.js       # Utility functions
│   └── styles/
│       └── globals.css     # Global styles
├── .env.example            # Example environment variables
├── vercel.json             # Vercel configuration
├── DEPLOYMENT.md           # Deployment guide
└── package.json
```

## 🔐 Admin Access

Default admin credentials (change after first login):

- **URL**: `/admin/login`
- **Email**: `admin@nextcodehub.com`
- **Password**: `admin123` (stored with bcrypt hash)

## 📱 Pages

- `/` - Home page with latest posts
- `/blog` - All blog posts with filters
- `/blog/[slug]` - Individual blog post
- `/about` - About page
- `/contact` - Contact page with form
- `/tools` - Developer tools (coming soon)
- `/privacy-policy` - Privacy policy
- `/terms-of-service` - Terms of service
- `/disclaimer` - Disclaimer
- `/admin` - Admin dashboard (requires authentication)

## 🎨 Customization

### Theme Colors

Edit `src/styles/globals.css` to customize theme colors:

```css
--blog-primary: 59 130 246;      /* Blue */
--blog-secondary: 147 51 234;    /* Purple */
```

### Logo & Branding

Replace logo in `src/components/viewer/navbar.js` and `footer.js`

## 📦 Database Schema

Main models:
- **User**: User accounts with roles (USER/ADMIN)
- **Post**: Blog posts with content, metadata
- **Category**: Post categories (many-to-many with Post)
- **Tag**: Post tags (many-to-many with Post)
- **Comment**: User comments on posts

## 🚢 Deployment to Vercel

Detailed deployment instructions are available in [DEPLOYMENT.md](./DEPLOYMENT.md)

### Quick Deploy:

1. Push code to GitHub
2. Import project to Vercel
3. Add environment variables
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR-USERNAME/nextcodehub)

## 🔧 Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org)
- UI inspired by modern blog platforms
- Icons from [Lucide](https://lucide.dev)

## 📞 Support

- **Website**: [nextcodehub.com](https://nextcodehub.com)
- **Issues**: [GitHub Issues](https://github.com/YOUR-USERNAME/nextcodehub/issues)
- **Contact**: Via contact form on website

---

Made with ❤️ using Next.js & Prisma

