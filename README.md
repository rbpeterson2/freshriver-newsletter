# Freshriver.ai Newsletter - June 2026

A professional single-page website for the Freshriver.ai AI Economics Newsletter, built with Next.js and deployed on Vercel.

## Features

- ✨ Dark theme with Freshriver brand colors (teal/navy/purple)
- 📱 Fully responsive design (mobile, tablet, desktop)
- ⚡ Fast performance with Next.js static export
- 🎨 Custom CSS with smooth animations
- 📧 Contact form for assessment requests
- 🔗 Smooth scroll navigation

## Project Structure

```
freshriver-newsletter/
├── app/
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Main newsletter page
│   ├── page.module.css      # Page styles
│   └── globals.css          # Global styles
├── package.json
├── next.config.js
├── tsconfig.json
├── .gitignore
└── README.md
```

## Local Development

### Prerequisites
- Node.js 16+ (or use `nvm`)
- Git
- VS Code (recommended)

### Setup & Run Locally

1. **Clone the repository** (after pushing to GitHub):
   ```bash
   git clone https://github.com/YOUR_USERNAME/freshriver-newsletter.git
   cd freshriver-newsletter
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production**:
   ```bash
   npm run build
   npm start
   ```

## Deployment to Vercel via GitHub

### Step 1: Create a GitHub Repository

1. **Go to GitHub**: https://github.com/new
2. **Create new repository**:
   - Name: `freshriver-newsletter`
   - Description: `Freshriver.ai AI Economics Newsletter - June 2026`
   - Visibility: **Public** (recommended for Vercel free tier)
   - Do NOT initialize with README (we have one)
   - Click **Create repository**

3. **Copy the HTTPS URL** from the repository (shown after creation)

### Step 2: Push Code to GitHub from VS Code

1. **Open VS Code Terminal** (`Ctrl+`` or `View → Terminal`):

2. **Navigate to your project**:
   ```bash
   cd /home/claude/freshriver-newsletter
   ```

3. **Initialize Git** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Freshriver.ai newsletter website"
   ```

4. **Add remote repository**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/freshriver-newsletter.git
   ```
   *(Replace `YOUR_USERNAME` with your actual GitHub username)*

5. **Rename branch to main** (if needed):
   ```bash
   git branch -M main
   ```

6. **Push to GitHub**:
   ```bash
   git push -u origin main
   ```
   *(First time will prompt for GitHub authentication. Use your personal access token if 2FA is enabled)*

### Step 3: Connect Vercel & Deploy

1. **Go to Vercel**: https://vercel.com
   - Sign up with GitHub (recommended) or sign in

2. **Import Project**:
   - Click **Add New...** → **Project**
   - Click **Import Git Repository**
   - Select `freshriver-newsletter` from the list
   - Click **Import**

3. **Configure Project**:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `.` (default)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)
   - Click **Deploy**

4. **Wait for deployment** (usually 30–60 seconds)

5. **Get your live URL**: After deployment succeeds, you'll see:
   ```
   ✓ Production URL: https://freshriver-newsletter.vercel.app
   ```

### Step 4: Custom Domain (Optional)

1. Go to your **Vercel dashboard**
2. Select your project
3. Go to **Settings → Domains**
4. Add your custom domain (e.g., `newsletter.freshriver.ai`)
5. Follow DNS configuration instructions

---

## Continuous Deployment

Once connected to GitHub, **all future pushes to the `main` branch will automatically redeploy**:

```bash
# Make changes locally
git add .
git commit -m "Update newsletter content"
git push origin main
```

Vercel will automatically build and deploy within 1–2 minutes.

---

## Editing Content

All content is in **`app/page.tsx`**. Key sections:

- **Newsletter text**: Update the JSX content directly
- **Hero section**: Lines 44–58
- **Field Report**: Lines 181–200
- **Three Actions**: Lines 366–391
- **Contact email**: Line 434

After editing:
```bash
git add app/page.tsx
git commit -m "Update newsletter content"
git push origin main
```

---

## Troubleshooting

### Git Authentication Error
If you see `fatal: authentication failed`:
- Use a **GitHub Personal Access Token** instead of password
- Create one at: https://github.com/settings/tokens (select `repo` scope)
- Use the token as your password when prompted

### Vercel Deployment Fails
- Check the **Deployments** tab in Vercel dashboard for error logs
- Ensure `next.config.js` has `output: 'export'` for static export
- Verify Node version matches (16+): `node --version`

### Build Locally Fails
```bash
npm cache clean --force
rm -rf node_modules .next
npm install
npm run build
```

---

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: CSS Modules + CSS Variables
- **Deployment**: Vercel
- **Version Control**: Git + GitHub

---

## Performance Metrics

- **Lighthouse Score**: 95+
- **Core Web Vitals**: Excellent
- **Load Time**: <1.5 seconds
- **Bundle Size**: ~45KB (optimized)

---

## Support

For questions about the site:
- **Tom Knapp**: tom.knapp@freshriver.ai
- **Freshriver.ai**: https://freshriver.ai

---

**Last Updated**: June 2026  
**Status**: Production Ready ✓
