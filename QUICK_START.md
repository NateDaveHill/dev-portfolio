# Quick Start Guide

Get your portfolio running in 3 minutes!

## Step 1: View Your Portfolio

Your development server is already running! Open your browser to:

**http://localhost:5173/**

You should see your portfolio with:
- A hero section with "Building with Purpose"
- An About section with biblical messaging
- Sample projects
- Contact section
- Footer

## Step 2: Make It Yours (Essential Changes)

### Add Your Projects (5 minutes)

**File:** `src/components/Projects.jsx`

1. Open the file in your code editor
2. Find the `projects` array (starts at line 12)
3. Replace the sample projects with your own:

```jsx
{
  id: 1,
  title: "Your Project Name",
  description: "What does it do? Why does it matter?",
  technologies: ["React", "Node.js", "MongoDB"],
  githubUrl: "https://github.com/yourname/your-repo",
  liveUrl: "https://your-demo.com", // or null if no demo
  image: null
}
```

4. Save the file
5. Check your browser - changes appear automatically!

### Update Your Contact Info (2 minutes)

**File:** `src/components/Contact.jsx`

**What to change:**
- Line 33: Your email address
- Line 47: Your LinkedIn URL
- Line 57: Your GitHub URL

**File:** `src/components/Footer.jsx`

- Line 20: Your GitHub URL
- Line 26: Your LinkedIn URL

### Add Your Photos (Optional, 5 minutes)

1. Save project screenshots to `src/assets/images/`
2. In `src/components/Projects.jsx`, import them:
   ```jsx
   import project1Img from '../assets/images/project1.png'
   ```
3. Add to your project:
   ```jsx
   image: project1Img
   ```

## Step 3: Customize the Message (Optional, 5 minutes)

### Hero Section
**File:** `src/components/Hero.jsx`
- Line 18: Main heading
- Lines 22-32: Bible verse
- Lines 36-40: Your description

### About Section
**File:** `src/components/About.jsx`
- Lines 21-23: Introduction
- Lines 34-38: Your philosophy
- Lines 43-48: Your values

## Step 4: Deploy (10 minutes)

### Easiest Option: Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "New Project"
4. Import your portfolio repository
5. Click "Deploy"
6. Done! Share your link!

## Next Steps

- Read the full [CUSTOMIZATION_GUIDE.md](./CUSTOMIZATION_GUIDE.md) for detailed instructions
- Customize colors in `src/index.css`
- Add your profile photo to the About section
- Set up a custom domain

## Commands Reference

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## Need Help?

Check the [CUSTOMIZATION_GUIDE.md](./CUSTOMIZATION_GUIDE.md) for:
- Detailed explanations of every customization
- Step-by-step deployment guides
- Common questions and answers
- Troubleshooting tips

---

**Remember:** "Commit to the Lord whatever you do, and he will establish your plans." - Proverbs 16:3

You've got this! 🚀
