# Deployment Guide for NextCodeHub on Vercel

## Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **PostgreSQL Database**: Get a production database from [Neon](https://neon.tech), [Supabase](https://supabase.com), or [Railway](https://railway.app)
3. **Domain**: Your domain `nextcodehub.com` should be ready to configure

## Step 1: Prepare Your Database

### Option 1: Using Neon (Recommended - Free Tier Available)

1. Go to [neon.tech](https://neon.tech)
2. Create a new project
3. Copy your connection string (it looks like: `postgresql://user:password@host/database`)
4. Save this for the next step

### Option 2: Using Supabase

1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Go to Project Settings → Database
4. Copy the "Connection string" under "Connection pooling"
5. Replace `[YOUR-PASSWORD]` with your actual password

### Option 3: Using Railway

1. Go to [railway.app](https://railway.app)
2. Create a new project
3. Add a PostgreSQL database
4. Copy the connection string from the "Connect" tab

## Step 2: Push Your Code to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Production ready deployment"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR-USERNAME/nextcodehub.git

# Push to GitHub
git push -u origin main
```

## Step 3: Deploy to Vercel

### Via Vercel Dashboard:

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click "Add New Project"
3. Import your GitHub repository
4. Configure your project:
   - **Framework Preset**: Next.js (should auto-detect)
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `prisma generate && next build` (already configured in package.json)
   - **Install Command**: `npm install` (already configured)

### Step 4: Add Environment Variables

In the Vercel project settings, add these environment variables:

```env
DATABASE_URL=postgresql://YOUR_PRODUCTION_DATABASE_URL
NEXTAUTH_SECRET=your-secret-key-here
NEXTAUTH_URL=https://nextcodehub.com
NEXT_PUBLIC_SITE_URL=https://nextcodehub.com
```

**Generate NEXTAUTH_SECRET:**
```bash
# Run this in your terminal
openssl rand -base64 32
```

## Step 5: Configure Your Domain

1. In Vercel Dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your domain: `nextcodehub.com`
4. Follow Vercel's instructions to:
   - Add an A record pointing to Vercel's IP
   - Or add a CNAME record pointing to `cname.vercel-dns.com`
5. Also add `www.nextcodehub.com` and set it to redirect to `nextcodehub.com`

### DNS Configuration (Example for Cloudflare/Namecheap):

**A Record:**
```
Type: A
Name: @
Value: 76.76.21.21 (Vercel's IP - check Vercel docs for latest)
TTL: Auto
```

**CNAME Record for www:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: Auto
```

## Step 6: Initialize Your Database

After deployment, run Prisma migrations:

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Link your project:
```bash
vercel link
```

3. Run Prisma commands:
```bash
# Generate Prisma Client
vercel env pull .env.production
npx prisma generate

# Push database schema
npx prisma db push --skip-generate

# Seed your database
npx prisma db seed
```

**OR** use Vercel's Environment Variables to run migrations:

Create a `migrate.js` file:
```javascript
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  console.log('Running migrations...')
  // Your seed logic here
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
```

## Step 7: Verify Deployment

1. Visit `https://nextcodehub.com`
2. Check these pages work:
   - ✅ Home page
   - ✅ Blog page
   - ✅ Individual blog posts
   - ✅ About, Contact, Tools pages
   - ✅ Login/Signup functionality
   - ✅ Admin dashboard (login at `/admin/login`)

## Step 8: Setup Google Search Console

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your property: `https://nextcodehub.com`
3. Verify ownership (Vercel usually provides automatic verification)
4. Submit your sitemap: `https://nextcodehub.com/sitemap.xml`

### Add Google Verification Tag:

1. Get your verification meta tag from Google Search Console
2. Update `src/app/layout.js`:
```javascript
verification: {
  google: 'your-verification-code-from-google',
},
```

## Step 9: Post-Deployment Checklist

- [ ] All pages load correctly
- [ ] Database connections work
- [ ] Authentication works (signup/login)
- [ ] Admin dashboard accessible
- [ ] Mobile responsive on all devices
- [ ] Sitemap accessible at `/sitemap.xml`
- [ ] Robots.txt accessible at `/robots.txt`
- [ ] SSL certificate working (https)
- [ ] Domain redirects correctly (www → non-www)
- [ ] Google Search Console verified
- [ ] Sitemap submitted to Google

## Troubleshooting

### Build Fails

**Error**: `Prisma schema not found`
- **Solution**: Make sure `postinstall` script in package.json runs `prisma generate`

**Error**: `Database connection failed`
- **Solution**: Check your DATABASE_URL environment variable is correct

### Runtime Errors

**Error**: `PrismaClient is unable to run in the browser`
- **Solution**: Make sure you're using `prisma` instance from `@/lib/prisma` in server components only

**Error**: `NextAuth configuration error`
- **Solution**: Verify NEXTAUTH_SECRET and NEXTAUTH_URL are set correctly

### Performance Issues

1. Enable Vercel Analytics in project settings
2. Use Vercel's caching features
3. Consider adding Redis for session management (optional)

## Environment Variables Summary

Required environment variables for production:

```env
# Database
DATABASE_URL="postgresql://user:password@host:5432/database"

# Authentication
NEXTAUTH_SECRET="generate-with-openssl-rand-base64-32"
NEXTAUTH_URL="https://nextcodehub.com"

# Site URL
NEXT_PUBLIC_SITE_URL="https://nextcodehub.com"
```

## Useful Commands

```bash
# Check deployment logs
vercel logs

# Redeploy
vercel --prod

# Check environment variables
vercel env ls

# Add environment variable
vercel env add

# Pull environment variables locally
vercel env pull .env.local
```

## Monitoring & Analytics

1. Enable Vercel Analytics: Project Settings → Analytics → Enable
2. Enable Vercel Speed Insights: Automatically enabled
3. Setup error monitoring with Sentry (optional)
4. Monitor database performance with your database provider's dashboard

## Support

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Prisma Docs**: [prisma.io/docs](https://prisma.io/docs)

## Next Steps After Deployment

1. Monitor site performance in Vercel Dashboard
2. Check Google Search Console for indexing status
3. Add more blog posts via Admin Dashboard
4. Consider adding Google Analytics
5. Setup automated backups for your database
6. Add email notifications (optional)

---

**Your site should now be live at https://nextcodehub.com! 🎉**
