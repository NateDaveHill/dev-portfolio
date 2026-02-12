# Portfolio Customization Guide

Welcome! This guide will walk you through customizing your faith-driven portfolio. Follow these steps to make it your own.

## Table of Contents
1. [Getting Started](#getting-started)
2. [Customizing Your Information](#customizing-your-information)
3. [Adding Your Projects](#adding-your-projects)
4. [Adding Images](#adding-images)
5. [Customizing Text and Messaging](#customizing-text-and-messaging)
6. [Color Customization](#color-customization)
7. [Deployment](#deployment)

---

## Getting Started

### What You'll Need
- Your project screenshots/images
- Your GitHub repository links
- Your contact information (email, LinkedIn, GitHub)
- A list of your projects with descriptions

### Running the Portfolio

**Step 1: Start the Development Server**
```bash
npm run dev
```

**Why:** This starts a local development server so you can see your changes in real-time.

**Where:** Run this command in your terminal from the portfolio directory.

**How:** After running the command, open your browser to `http://localhost:5173/`

**Step 2: Making Changes**
- Edit any file mentioned in this guide
- Save the file
- Your browser will automatically refresh to show the changes

---

## Customizing Your Information

### 1. Update Contact Information

**File to Edit:** `src/components/Contact.jsx`

**Lines to Find:** Lines 33-60 (the contact methods section)

**What to Change:**
```jsx
// Line 33: Change the email
<a href="mailto:your.email@example.com" className="contact-method">
  // Line 43: Also change it in the display text
  <p>your.email@example.com</p>
```

**Why:** This ensures people can actually reach you.

**How to Change:**
1. Open `src/components/Contact.jsx` in your code editor
2. Find `your.email@example.com`
3. Replace with your actual email address in BOTH places (line 33 and line 43)
4. Do the same for LinkedIn (line 47) and GitHub (line 57) URLs

**Example:**
```jsx
// Before:
<a href="mailto:your.email@example.com" className="contact-method">
  <p>your.email@example.com</p>
</a>

// After:
<a href="mailto:john.doe@gmail.com" className="contact-method">
  <p>john.doe@gmail.com</p>
</a>
```

### 2. Update Footer Social Links

**File to Edit:** `src/components/Footer.jsx`

**Lines to Find:** Lines 20-30

**What to Change:**
```jsx
// Line 20: GitHub URL
<a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">

// Line 26: LinkedIn URL
<a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
```

**Why:** These links appear at the bottom of every page.

**How to Change:**
Replace `yourusername` and `yourprofile` with your actual usernames.

---

## Adding Your Projects

This is the most important customization you'll make!

### File to Edit: `src/components/Projects.jsx`

**Lines to Find:** Lines 12-41 (the projects array)

**What to Change:** Replace the sample projects with your actual projects.

**Step-by-Step Instructions:**

**Step 1: Understand the Project Structure**

Each project has this structure:
```jsx
{
  id: 1,                    // Unique number for each project
  title: "Project Name",    // Your project's name
  description: "...",       // What does it do? What problem does it solve?
  technologies: ["React", "Node.js"],  // Technologies used
  githubUrl: "https://...", // Link to GitHub repository
  liveUrl: "https://...",   // Link to live demo (optional)
  image: null               // Will be set up later
}
```

**Step 2: Replace with Your Projects**

1. Open `src/components/Projects.jsx`
2. Find the `projects` array (starts around line 12)
3. For each project you want to showcase, fill in the details:

**Example:**
```jsx
const projects = [
  {
    id: 1,
    title: "Task Manager App",
    description: "A full-stack task management application that helps teams collaborate efficiently. Features include real-time updates, task assignment, and deadline tracking. Built to serve teams in achieving their goals together.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    githubUrl: "https://github.com/yourname/task-manager",
    liveUrl: "https://task-manager-demo.herokuapp.com",
    image: null  // We'll add this in the next section
  },
  {
    id: 2,
    title: "Bible Verse API",
    description: "A RESTful API providing access to Bible verses with search and daily verse features. Created to help developers integrate scripture into their applications easily.",
    technologies: ["Python", "FastAPI", "PostgreSQL"],
    githubUrl: "https://github.com/yourname/bible-verse-api",
    liveUrl: null,  // No live demo? Set to null
    image: null
  },
  // Add more projects as needed...
]
```

**Why Each Field Matters:**
- **title**: First thing visitors see - make it clear and compelling
- **description**: Explain WHAT it does and WHY it matters (3-4 sentences)
- **technologies**: Shows your technical skills - list 3-5 main technologies
- **githubUrl**: CRITICAL - this is where people will view your code
- **liveUrl**: If you have a deployed version, add it here. Otherwise, set to `null`
- **image**: We'll add project screenshots in the next section

**Step 3: Adjust the Number of Projects**

- Want to show more projects? Add more objects to the array
- Want to show fewer? Remove objects from the array
- Each project needs a unique `id` number (1, 2, 3, etc.)

**Where This Appears:** On the main page in the "My Projects" section

---

## Adding Images

### Project Screenshots

**Step 1: Prepare Your Images**

**Where to Save:** `/src/assets/images/`

**What Format:** PNG or JPG

**Recommended Size:** 1200px wide x 800px tall (3:2 ratio)

**Why This Size:** Looks crisp on all devices without being too large

**How to Prepare:**
1. Take screenshots of your projects
2. Crop them to show the most important features
3. Save them with clear names like `task-manager.png`, `bible-api.png`

**Step 2: Add Images to Your Project**

1. Save your project screenshots in `/src/assets/images/`
2. Open `src/components/Projects.jsx`
3. At the top of the file, after the imports (around line 4), add:

```jsx
// Import your project images
import taskManagerImage from '../assets/images/task-manager.png'
import bibleApiImage from '../assets/images/bible-api.png'
import project3Image from '../assets/images/project3.png'
```

**Step 3: Link Images to Projects**

In the projects array, replace `image: null` with your imported images:

```jsx
const projects = [
  {
    id: 1,
    title: "Task Manager App",
    // ... other details ...
    image: taskManagerImage  // Changed from null
  },
  {
    id: 2,
    title: "Bible Verse API",
    // ... other details ...
    image: bibleApiImage  // Changed from null
  }
]
```

**Why:** Images make your projects more engaging and give visitors a quick preview

### Profile Photo (Optional)

**File to Edit:** `src/components/About.jsx`

**Lines to Find:** Lines 48-54 (the about-image-placeholder)

**Step 1: Add Your Photo**
1. Save your professional photo to `/src/assets/images/profile.jpg`
2. At the top of `About.jsx`, add:
```jsx
import profileImage from '../assets/images/profile.jpg'
```

**Step 2: Replace the Placeholder**

Find lines 48-54 and replace the entire div with:
```jsx
<div className="about-image-container">
  <img src={profileImage} alt="Your Name" className="about-image" />
</div>
```

**Step 3: Add the CSS**

Open `src/components/About.css` and add at the bottom:
```css
.about-image {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}
```

**Why:** A professional photo helps visitors connect with you personally

---

## Customizing Text and Messaging

### Hero Section (First Thing Visitors See)

**File to Edit:** `src/components/Hero.jsx`

**Lines to Find:** 13-37

**What You Can Customize:**

1. **Main Heading** (Line 18)
   ```jsx
   <h1>Building with Purpose</h1>
   ```
   **Change to:** Your personal tagline or mission statement
   **Example:** `<h1>Creating Solutions Through Faith</h1>`

2. **Bible Verse** (Lines 22-32)
   ```jsx
   "Whatever you do, work at it with all your heart..."
   - Colossians 3:23
   ```
   **Change to:** Your favorite verse that reflects your work ethic
   **Why:** This sets the spiritual tone for your portfolio

3. **Description** (Lines 34-40)
   ```jsx
   Crafting innovative solutions with excellence, integrity, and faith
   ```
   **Change to:** Brief description of what you do (1-2 sentences)

**Where This Appears:** The very top of your portfolio - the hero section

### About Section

**File to Edit:** `src/components/About.jsx`

**Lines to Find:** 21-46

**What You Can Customize:**

1. **Intro Paragraph** (Lines 21-23)
   ```jsx
   I'm a developer driven by faith and a passion for creating meaningful digital experiences.
   ```
   **Change to:** Your personal introduction
   **Example:** "I'm a full-stack developer who believes code can change lives. My faith guides me to build solutions that serve others."

2. **Bible Verse** (Lines 25-32)
   **Change to:** A verse that represents your journey or aspirations

3. **Description** (Lines 34-38)
   **Change to:** More about your approach and philosophy (2-3 sentences)

4. **Core Values** (Lines 43-48)
   ```jsx
   <li><strong>Excellence:</strong> Pursuing quality in every detail</li>
   ```
   **Change to:** Values that are important to YOU
   **Examples:**
   - Faith: Honoring God in everything I create
   - Innovation: Finding creative solutions to complex problems
   - Collaboration: Building stronger solutions together

**Why:** This helps visitors understand who you are and what drives you

### Page Title

**File to Edit:** `index.html`

**Line to Find:** Line 6

**What to Change:**
```html
<title>Portfolio | Faith-Driven Developer</title>
```
**Change to:** Your name or tagline
**Example:** `<title>John Doe | Full Stack Developer</title>`

**Why:** This appears in the browser tab and search results

---

## Color Customization

Want to change the color scheme?

**File to Edit:** `src/index.css`

**Lines to Find:** 7-14 (the :root section)

**Default Colors:**
```css
:root {
  --primary-color: #2c3e50;      /* Dark blue-gray */
  --secondary-color: #3498db;    /* Bright blue */
  --accent-color: #e74c3c;       /* Red */
  --text-color: #333;            /* Dark gray */
  --light-bg: #ecf0f1;           /* Light gray */
  --white: #ffffff;
}
```

**How to Change:**

**Step 1: Choose Your Colors**
- Use a color picker tool like [Coolors.co](https://coolors.co/) or [Adobe Color](https://color.adobe.com/)
- Pick colors that reflect your personality while maintaining good contrast

**Step 2: Update the Variables**
```css
:root {
  --primary-color: #1a252f;      /* Your dark color */
  --secondary-color: #6c63ff;    /* Your accent color */
  /* ... update others as desired */
}
```

**Why Each Color Matters:**
- `--primary-color`: Headings and important text
- `--secondary-color`: Links and accents
- `--light-bg`: Background sections
- `--text-color`: Body text

**Pro Tip:** Keep `--primary-color` dark and `--secondary-color` vibrant for best contrast

**Where These Appear:** Throughout the entire portfolio

---

## Deployment

Once you're happy with your customizations, it's time to share your portfolio with the world!

### Option 1: GitHub Pages (Free)

**Step 1: Update package.json**

Add this to your `package.json` (around line 7):
```json
"homepage": "https://yourusername.github.io/dev-portfolio",
```
Replace `yourusername` with your GitHub username.

**Step 2: Install gh-pages**
```bash
npm install --save-dev gh-pages
```

**Step 3: Add deploy scripts to package.json**
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

**Step 4: Deploy**
```bash
npm run deploy
```

**Why:** GitHub Pages is free, reliable, and integrates perfectly with your repositories.

**How Long:** Usually takes 1-2 minutes to deploy.

### Option 2: Vercel (Free, Recommended)

**Why Vercel:** Automatic deployments, custom domains, built-in analytics.

**Step 1: Create Account**
- Go to [vercel.com](https://vercel.com)
- Sign up with your GitHub account

**Step 2: Import Your Project**
- Click "New Project"
- Select your portfolio repository
- Vercel will auto-detect Vite settings

**Step 3: Deploy**
- Click "Deploy"
- Wait 1-2 minutes
- Your portfolio is live!

**Step 4: (Optional) Add Custom Domain**
- Go to Project Settings > Domains
- Add your custom domain (e.g., johndoe.com)
- Follow DNS configuration instructions

### Option 3: Netlify (Free)

**Step 1: Create Account**
- Go to [netlify.com](https://netlify.com)
- Sign up with GitHub

**Step 2: Deploy**
- Click "New site from Git"
- Select your repository
- Build command: `npm run build`
- Publish directory: `dist`
- Click "Deploy"

**Why:** Great for beginners, drag-and-drop interface available.

---

## Quick Reference: Files to Customize

| What to Change | File Location | Lines |
|----------------|---------------|-------|
| Your projects | `src/components/Projects.jsx` | 12-41 |
| Contact info | `src/components/Contact.jsx` | 33-60 |
| Hero message | `src/components/Hero.jsx` | 13-40 |
| About section | `src/components/About.jsx` | 21-48 |
| Footer social links | `src/components/Footer.jsx` | 20-30 |
| Colors | `src/index.css` | 7-14 |
| Page title | `index.html` | 6 |
| Project images | `/src/assets/images/` | - |

---

## Common Questions

**Q: How do I add more projects?**
A: Open `Projects.jsx`, copy one of the project objects in the array, paste it at the end, and update all the fields. Make sure to give it a unique `id` number.

**Q: What if I don't have a live demo for a project?**
A: Set `liveUrl: null` in the project object. The "Live Demo" button won't appear for that project.

**Q: Can I change the Bible verses?**
A: Absolutely! Edit any verse in `Hero.jsx`, `About.jsx`, `Contact.jsx`, or `Footer.jsx` to verses that resonate with you.

**Q: How do I change fonts?**
A: Edit `src/index.css` line 14. Replace the font-family list with your preferred fonts. Remember to import custom fonts in `index.html` if needed.

**Q: The animations are too fast/slow. Can I change them?**
A: Yes! Look for `transition={{ duration: 0.8 }}` in any component and adjust the number (in seconds).

**Q: Can I add more sections?**
A: Yes! Create a new component file in `/src/components/`, import it in `App.jsx`, and add it to the component tree.

---

## Need Help?

If you run into issues:

1. **Check the browser console** - Press F12 and look for error messages
2. **Make sure all image imports match your filenames exactly**
3. **Verify all URLs start with `https://`**
4. **Ensure all objects in arrays end with commas except the last one**

Remember: "I can do all things through Christ who strengthens me" - Philippians 4:13

You've got this! Build something amazing! 🚀
