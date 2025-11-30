# Quick Start Guide - NextCodeHub

## 🚀 Get Started in 5 Minutes

### 1. Install Dependencies
```bash
npm install
```

### 2. Setup Environment
```bash
# Copy the example file
cp .env.example .env

# Edit .env with your values
# DATABASE_URL: Your PostgreSQL connection string
# NEXTAUTH_SECRET: Generate with: openssl rand -base64 32
```

### 3. Setup Database
```bash
# Generate Prisma Client
npx prisma generate

# Create database tables
npx prisma db push

# Seed with sample data
npx prisma db seed
```

### 4. Run Development Server
```bash
npm run dev
```

Visit: http://localhost:3000

### 5. Access Admin Dashboard

**URL**: http://localhost:3000/admin/login

**Default Credentials**:
- Email: `admin@nextcodehub.com`
- Password: `admin123`

⚠️ **Important**: Change admin password after first login!

---

## 📦 Quick Commands

```bash
# Development
npm run dev              # Start dev server with Turbopack
npm run build            # Build for production
npm start                # Start production server
npm run lint             # Run ESLint

# Database
npx prisma studio        # Open Prisma Studio (database GUI)
npx prisma db push       # Push schema changes
npx prisma db seed       # Seed database
npx prisma generate      # Generate Prisma Client
npx prisma migrate dev   # Create and run migration

# Vercel Deployment
vercel                   # Deploy to preview
vercel --prod            # Deploy to production
vercel env pull          # Pull environment variables
vercel logs              # View deployment logs
```

---

## 🎯 What's Included

After running seed, you'll have:
- ✅ 8 sample blog posts
- ✅ 6 categories (JavaScript, React, Next.js, Node.js, TypeScript, CSS)
- ✅ 8 tags
- ✅ 1 admin user
- ✅ Sample comments

---

## 🔧 Troubleshooting

### "Prisma Client not generated"
```bash
npx prisma generate
```

### "Can't connect to database"
Check your `DATABASE_URL` in `.env` file

### "Port 3000 already in use"
```bash
# Use different port
npm run dev -- -p 3001
```

### "Module not found"
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

---

## 📚 Next Steps

1. **Customize Content**
   - Edit pages in `src/app/`
   - Modify components in `src/components/`
   - Update styles in `src/styles/globals.css`

2. **Add Blog Posts**
   - Login to admin dashboard
   - Navigate to "Posts Management"
   - Click "Create New Post"

3. **Configure Theme**
   - Edit colors in `src/styles/globals.css`
   - Modify theme in `src/components/theme-provider.js`

4. **Deploy to Vercel**
   - See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete guide

---

## 🆘 Need Help?

- **Documentation**: Check [README.md](./README.md)
- **Deployment Guide**: See [DEPLOYMENT.md](./DEPLOYMENT.md)
- **Checklist**: Review [PRODUCTION-CHECKLIST.md](./PRODUCTION-CHECKLIST.md)

---

**Happy Coding! 🚀**
