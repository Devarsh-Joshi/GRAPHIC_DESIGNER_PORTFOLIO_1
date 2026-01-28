# Portfolio Customization Guide

This guide will help you customize colors, links, images, and personal details in your Visual Narrative portfolio website.

## Table of Contents
1. [Updating Personal Information](#updating-personal-information)
2. [Customizing Colors & Theme](#customizing-colors--theme)
3. [Adding & Updating Images](#adding--updating-images)
4. [Modifying Links & Social Media](#modifying-links--social-media)
5. [Editing Page Sections](#editing-page-sections)

---

## Updating Personal Information

### Portfolio Owner Name
**Location:** `client/src/components/layout.tsx` (Line 45)

Change the portfolio name displayed in the navigation:
```tsx
<a className="text-xl font-display font-bold tracking-tighter hover:opacity-70 transition-opacity">
  ALEX MORGAN  // ← Change this to your name
</a>
```

### Hero Section Content
**Location:** `client/src/components/hero.tsx`

Update your professional title, subtitle, and call-to-action text here.

### About Section
**Location:** `client/src/components/about.tsx`

Edit your bio, professional background, and personal description.

### Contact Information
**Location:** `client/src/components/contact.tsx`

Update email, phone number, and contact form details.

---

## Customizing Colors & Theme

The portfolio uses Tailwind CSS with a cyberpunk brutalist aesthetic. All colors are defined in one place for easy management.

### Main Color Palette
**Location:** `client/src/index.css` (Lines 46-56)

```css
:root {
  /* Background colors */
  --background: 240 10% 2%;      /* Dark navy background */
  --foreground: 0 0% 98%;        /* Off-white text */
  
  /* Primary accent color (Electric Lime) */
  --primary: 75 100% 50%;        /* Bright lime green */
  --primary-foreground: 240 10% 2%;
  
  /* Secondary accent color (Cyber Purple) */
  --secondary: 290 100% 60%;     /* Neon purple */
  --secondary-foreground: 0 0% 100%;
  
  /* Other colors... */
}
```

### How to Change Colors

Colors use **HSL format**: `hue saturation% lightness%`

**Examples:**

| Color | HSL | Result |
|-------|-----|--------|
| `75 100% 50%` | Bright Lime Green | ![lime](#7FFF00) |
| `290 100% 60%` | Cyber Purple | ![purple](#EE82EE) |
| `0 84% 60%` | Red | ![red](#FF6B6B) |
| `200 100% 50%` | Cyan | ![cyan](#00FFFF) |
| `45 100% 50%` | Golden Yellow | ![gold](#FFD700) |

**Steps to customize:**

1. Open `client/src/index.css`
2. Find the color variable you want to change
3. Modify the HSL values:
   - **Hue (0-360)**: The color itself
   - **Saturation (0-100%)**: How vivid (0% = gray, 100% = pure color)
   - **Lightness (0-100%)**: How bright (0% = black, 100% = white)

**Example: Change primary color from lime to cyan**
```css
/* Before */
--primary: 75 100% 50%;    /* Electric Lime */

/* After */
--primary: 200 100% 50%;   /* Cyan */
```

### Color Customization Recommendations

**Dark Theme (Current):**
- Keep `--background` dark (low lightness %)
- Use bright, saturated colors for `--primary` and `--secondary`
- Good for gaming/tech portfolios

**Light Theme Option:**
```css
--background: 0 0% 98%;      /* Off-white */
--foreground: 240 10% 2%;    /* Dark navy text */
--primary: 200 100% 40%;     /* Darker blue */
--secondary: 280 80% 50%;    /* Darker purple */
```

---

## Adding & Updating Images

### Profile/Avatar Image

**Location:** `client/src/components/hero.tsx`

```tsx
<img 
  src="/path/to/your/image.jpg"  // ← Update this path
  alt="Your Name"
  className="w-full h-full object-cover"
/>
```

### Project/Work Images

**Location:** `client/src/components/work.tsx`

For each project, update:
```tsx
{
  title: "Project Name",
  description: "Description",
  image: "/images/project-name.jpg",  // ← Update image path
  link: "https://project-url.com",
  tags: ["React", "TypeScript"]
}
```

### Image Storage

1. **Create folder:** `client/public/images/`
2. **Add your images:** Save images in this folder
3. **Reference in code:** Use `/images/filename.jpg`

**Recommended image sizes:**
- Profile/Avatar: 400x400px - 600x600px
- Project previews: 1200x800px (16:9 aspect ratio)
- Social media icons: 24x24px - 64x64px

### Image Formats
- **JPG:** Photos, complex images (use for quality)
- **PNG:** Graphics with transparency (use for logos)
- **WebP:** Modern, smaller file sizes (best for web)

---

## Modifying Links & Social Media

### Navigation Links

**Location:** `client/src/components/layout.tsx` (Lines 23-26)

```tsx
const navItems = [
  { name: "Work", href: "#work" },      // Scrolls to work section
  { name: "About", href: "#about" },    // Scrolls to about section
  { name: "Contact", href: "#contact" }, // Scrolls to contact section
  // Add more items here:
  // { name: "Blog", href: "/blog" },
  // { name: "Resume", href: "/resume.pdf" },
];
```

### Social Media Links

**Location:** `client/src/components/contact.tsx`

Update links and add your social profiles:
```tsx
const socialLinks = [
  { 
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: "github-icon"
  },
  { 
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
    icon: "linkedin-icon"
  },
  { 
    name: "Twitter",
    url: "https://twitter.com/yourusername",
    icon: "twitter-icon"
  },
  // Add more social links...
];
```

### Project Links

**Location:** `client/src/components/work.tsx`

Each project can have:
```tsx
{
  title: "Project Name",
  image: "/images/project.jpg",
  description: "Description",
  link: "https://live-project-url.com",      // Live demo URL
  github: "https://github.com/user/project", // (Optional) GitHub repo
  tags: ["Tech1", "Tech2"]
}
```

---

## Editing Page Sections

### Home Page Structure

**Location:** `client/src/pages/home.tsx`

```tsx
export default function Home() {
  return (
    <Layout>
      <Hero />       {/* Top section with intro */}
      <Work />       {/* Portfolio/projects section */}
      <About />      {/* About me section */}
      <Contact />    {/* Contact/footer section */}
    </Layout>
  );
}
```

To reorder sections, simply move the components around.

### Hero Section (Main Intro)

**File:** `client/src/components/hero.tsx`

Contains:
- Your name and title
- Professional tagline
- Call-to-action button
- Hero image/avatar

**Edit:**
- Change headline text
- Update subtitle
- Modify button text and link
- Replace hero image

### Work/Portfolio Section

**File:** `client/src/components/work.tsx`

Displays your projects in a grid. Add/remove projects:

```tsx
const projects = [
  {
    id: 1,
    title: "Project One",
    description: "What you built and why",
    image: "/images/project1.jpg",
    link: "https://project1.com",
    tags: ["React", "TypeScript", "Tailwind"]
  },
  {
    id: 2,
    title: "Project Two",
    // ... more projects
  }
];
```

### About Section

**File:** `client/src/components/about.tsx`

Update:
- Professional bio/summary
- Skills and expertise
- Tools and technologies
- Experience highlights
- Personal interests

### Contact Section

**File:** `client/src/components/contact.tsx`

Customize:
- Contact form fields
- Social media links
- Email address
- Phone number (optional)
- Location
- Call-to-action text

---

## Advanced Customization

### Fonts

**Location:** `client/src/index.css` (Lines 9-11)

```css
@theme inline {
  --font-sans: "Inter", sans-serif;        /* Body text */
  --font-display: "Syne", sans-serif;      /* Headings */
  --font-mono: "Space Grotesk", monospace; /* Code/tech text */
}
```

Change font families or import new ones from Google Fonts.

### Animation & Effects

**Framer Motion animations** are used throughout. To adjust:

**File:** `client/src/components/*.tsx`

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

- `initial`: Starting state
- `animate`: Final state
- `transition`: Animation duration and easing

### Responsive Design

The site is mobile-first using Tailwind CSS breakpoints:

```tsx
// sm: ≥640px, md: ≥768px, lg: ≥1024px, xl: ≥1280px
<div className="text-sm md:text-base lg:text-lg">
  Text that changes size on different screens
</div>
```

---

## Quick Reference: File Locations

| What to Change | File Location |
|---|---|
| Your name | `client/src/components/layout.tsx` |
| Hero section | `client/src/components/hero.tsx` |
| Projects | `client/src/components/work.tsx` |
| About content | `client/src/components/about.tsx` |
| Contact info | `client/src/components/contact.tsx` |
| Colors & theme | `client/src/index.css` |
| Navigation items | `client/src/components/layout.tsx` |
| Fonts | `client/src/index.css` |

---

## Running & Building

### Development Mode
```bash
npm run dev
```
Starts the dev server at `http://localhost:5000`

### Build for Production
```bash
npm run build
```
Creates optimized build in `dist/` folder

### Type Check
```bash
npm run check
```
Verifies TypeScript types are correct

---

## Troubleshooting

**Colors not changing?**
- Clear browser cache (Ctrl+Shift+Delete)
- Restart dev server (stop and run `npm run dev` again)
- Make sure you're editing the right CSS file

**Images not showing?**
- Check image path starts with `/images/`
- Verify image file exists in `client/public/images/`
- Try different image format (JPG instead of PNG)

**Changes not appearing?**
- Dev server needs restart: stop and run `npm run dev` again
- Clear browser cache
- Check browser console for errors (F12)

**Component not rendering?**
- Check that all components are imported in `client/src/pages/home.tsx`
- Verify component file names match imports (case-sensitive on Linux/Mac)
- Check for syntax errors in TypeScript

---

## Need Help?

Check these resources:
- **Tailwind CSS:** https://tailwindcss.com/docs
- **React Documentation:** https://react.dev
- **TypeScript:** https://www.typescriptlang.org/docs/
- **Framer Motion:** https://www.framer.com/motion/

---

Good luck customizing your portfolio! 🚀
