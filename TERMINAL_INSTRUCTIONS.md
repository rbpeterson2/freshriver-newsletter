# Deploy Freshriver Newsletter to Vercel
## Complete Terminal-by-Terminal Instructions for VS Code

---

## Prerequisites Check

Before starting, verify you have:
- ✓ Node.js 16+ installed: `node --version`
- ✓ Git installed: `git --version`
- ✓ GitHub account: https://github.com
- ✓ VS Code with integrated terminal

---

## 🟢 SECTION A: Local Setup (2 minutes)

### Terminal 1: Navigate & Install Dependencies

```bash
# Navigate to project folder
cd /path/to/freshriver-newsletter

# List contents to verify structure
ls -la

# Expected output should show: app/, package.json, next.config.js, etc.
```

### Terminal 2: Test Build Locally (Optional but Recommended)

```bash
# Install dependencies
npm install

# Build the site
npm run build

# Expected output:
# > freshriver-newsletter@1.0.0 build
# > next build
# ✓ Compilation successful
# ✓ Exports created
```

**If build succeeds**, skip to Section B. Otherwise:
```bash
npm cache clean --force
rm -rf node_modules .next
npm install
npm run build
```

---

## 🟡 SECTION B: Push Code to GitHub (3 minutes)

### Terminal 3: Initialize Git & Commit

```bash
# Initialize git (only if not already done)
git init

# Configure git (replace with your info)
git config user.name "Your Name"
git config user.email "your@email.com"

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Freshriver.ai newsletter website"

# Verify commit
git log --oneline
# Should show: 1 commit with "Initial commit" message
```

### Terminal 4: Create & Link GitHub Repository

**Step 1: Create repo on GitHub.com**
1. Open browser: https://github.com/new
2. Repository name: `freshriver-newsletter`
3. Visibility: **Public**
4. **Uncheck** "Initialize this repository with"
5. Click **Create repository**
6. Copy the HTTPS URL from the page (looks like):
   ```
   https://github.com/YOUR_USERNAME/freshriver-newsletter.git
   ```

**Step 2: Back in VS Code Terminal**

```bash
# Rename branch to 'main' (if on master)
git branch -M main

# Add the remote repository
git remote add origin https://github.com/YOUR_USERNAME/freshriver-newsletter.git
# Replace YOUR_USERNAME with your actual GitHub username

# Verify remote was added
git remote -v
# Should show:
# origin  https://github.com/YOUR_USERNAME/freshriver-newsletter.git (fetch)
# origin  https://github.com/YOUR_USERNAME/freshriver-newsletter.git (push)
```

### Terminal 5: Push to GitHub

```bash
# Push the code
git push -u origin main

# GitHub may ask for credentials:
# - Username: your GitHub username
# - Password: your Personal Access Token (NOT your password)
#   Get token: https://github.com/settings/tokens
#   Select scope: 'repo'
#   Copy and paste the token

# Expected output:
# Enumerating objects: 12, done.
# ...
# * [new branch]      main -> main
# Branch 'main' set up to track remote branch 'main' from 'origin'.
```

**Verify**: Go to https://github.com/YOUR_USERNAME/freshriver-newsletter
You should see your code files there ✓

---

## 🔵 SECTION C: Deploy to Vercel (2 minutes)

### Prepare (30 seconds)

1. Open Vercel: https://vercel.com
2. Sign in with GitHub (or create account with GitHub)
3. Authorize Vercel to access your GitHub repositories

### Terminal 6: Deploy (Can also be done via Vercel dashboard)

**Option A: Via Vercel Dashboard (Recommended)**

1. After signing into Vercel, click **Add New...** in top right
2. Select **Project**
3. Click **Import Git Repository**
4. Find `freshriver-newsletter` in the list (it should appear if GitHub sync is working)
5. Click **Import**
6. Configuration screen should appear:
   - **Framework Preset**: Next.js (auto-detected) ✓
   - **Root Directory**: `.` (default) ✓
   - **Build Command**: `npm run build` (default) ✓
   - **Output Directory**: `.next` (default) ✓
7. Click **Deploy**
8. Wait 30-60 seconds for build to complete

**Expected output on Vercel dashboard**:
```
✓ Production URL: https://freshriver-newsletter.vercel.app
```

**Option B: Via Vercel CLI (Advanced)**

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project directory
vercel

# Answer prompts:
# Set up and deploy? Y
# Which scope? (select your account)
# Link to existing project? N
# Project name? freshriver-newsletter
# In which directory is your code? . (current)
# Want to modify settings? N

# Wait for deployment...
# You'll get a preview URL and production URL
```

---

## ✅ SECTION D: Verify Deployment

### Terminal 7: Test Live Site

```bash
# Your site should be live at:
# https://freshriver-newsletter.vercel.app

# Verify with curl (optional):
curl -I https://freshriver-newsletter.vercel.app
# Should return: HTTP/1.1 200 OK
```

**Then**: Open in browser and verify:
- [ ] Hero section loads with "Token Bill Comes Due" title
- [ ] Teal/navy colors match Freshriver brand
- [ ] Navigation links work (scroll to sections)
- [ ] Contact form appears
- [ ] Responsive on mobile (shrink browser window)

---

## 🔄 SECTION E: Future Updates (Continuous Deployment)

Once connected to GitHub, every push auto-deploys:

```bash
# Edit content (e.g., app/page.tsx)
nano app/page.tsx

# Commit and push
git add .
git commit -m "Update newsletter content: [describe change]"
git push origin main

# Vercel automatically deploys in 1–2 minutes
# Check status: https://vercel.com/dashboard
```

---

## 🔐 Common Issues & Fixes

### Issue 1: "Authentication failed" when pushing to GitHub

**Solution**: Use Personal Access Token instead of password

```bash
# Create token: https://github.com/settings/tokens
# Click "Generate new token"
# Select scope: repo
# Copy the token (it won't show again)

# When git asks for password, paste the token instead
# (It won't show as you type, but it's being entered)
```

### Issue 2: "Cannot find Git repository" in Vercel

**Solution**: Ensure code is on GitHub first

```bash
# Verify remote is set
git remote -v

# Verify you're on 'main' branch
git branch

# Verify code was pushed
git log origin/main
```

### Issue 3: Vercel build fails

**Solution**: Check build logs in Vercel dashboard

1. Go to: https://vercel.com/dashboard
2. Select your project
3. Click **Deployments** tab
4. Click the failed deployment
5. Scroll down to see error logs
6. Common fixes:
   ```bash
   # Local rebuild test
   npm run build
   
   # Clear and reinstall
   rm -rf node_modules .next
   npm install
   npm run build
   ```

---

## 📊 Deployment Status Checklist

- [ ] Node 16+ installed
- [ ] Project dependencies installed (`npm install`)
- [ ] Local build succeeds (`npm run build`)
- [ ] Git initialized (`git init`)
- [ ] Code committed (`git commit`)
- [ ] GitHub repo created
- [ ] Code pushed to GitHub (`git push`)
- [ ] Vercel account created/signed in
- [ ] Project imported to Vercel
- [ ] Vercel build succeeds
- [ ] Site loads at https://freshriver-newsletter.vercel.app
- [ ] All sections visible and responsive

---

## 🎯 Result

You now have:
1. **Live website**: https://freshriver-newsletter.vercel.app
2. **GitHub repository**: https://github.com/YOUR_USERNAME/freshriver-newsletter
3. **Automatic deployments**: Push to GitHub → Auto-deploy to Vercel
4. **Professional hosting**: Vercel's global CDN with 99.99% uptime

---

## 💡 Next Steps

1. **Share the URL**:
   ```
   https://freshriver-newsletter.vercel.app
   ```

2. **Custom domain** (optional):
   - Go to Vercel project → Settings → Domains
   - Add your domain (e.g., newsletter.freshriver.ai)
   - Update DNS records per Vercel instructions

3. **Edit content** (anytime):
   - Edit `app/page.tsx`
   - Push: `git push origin main`
   - Auto-deploys in 1–2 minutes

---

## 📞 Support

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **GitHub Help**: https://docs.github.com

---

**Status**: ✅ Ready for Production
**Last Updated**: June 2026
