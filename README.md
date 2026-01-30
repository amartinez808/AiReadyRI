# AI Ready Rhode Island

A modern, high-performance marketing website built with Next.js 16, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Dark-first design** with optional light mode support
- **Premium typography** and custom design system
- **Framer Motion** animations for smooth micro-interactions
- **shadcn/ui** component library for consistent UI
- **Fully responsive** and mobile-optimized
- **SEO-friendly** with metadata, sitemap, and structured data
- **TypeScript** for type safety
- **Performance-optimized** with Next.js Image and code splitting

## 📁 Project Structure

```
ai-ready-ri/
├── app/                          # Next.js App Router pages
│   ├── page.tsx                 # Home page (8 sections)
│   ├── services/page.tsx        # Services page
│   ├── work/                    # Work/case studies
│   │   ├── page.tsx            # Case studies listing
│   │   └── [slug]/page.tsx     # Individual case study pages
│   ├── about/page.tsx          # About page
│   ├── contact/page.tsx        # Contact form page
│   ├── privacy/page.tsx        # Privacy policy
│   ├── terms/page.tsx          # Terms of service
│   ├── layout.tsx              # Root layout with metadata
│   ├── globals.css             # Global styles and design tokens
│   └── sitemap.ts              # Dynamic sitemap generation
├── components/
│   ├── layout/                  # Layout components
│   │   ├── navbar.tsx          # Navigation with mobile menu
│   │   └── footer.tsx          # Footer with links
│   ├── sections/                # Reusable page sections
│   │   ├── hero.tsx
│   │   ├── section-header.tsx
│   │   ├── case-study-card.tsx
│   │   ├── service-card.tsx
│   │   ├── testimonial-card.tsx
│   │   ├── process-steps.tsx
│   │   ├── stats.tsx
│   │   └── cta-section.tsx
│   ├── ui/                      # shadcn/ui components
│   └── json-ld.tsx             # Structured data for SEO
├── content/                     # Content management
│   ├── caseStudies.ts          # Case study data
│   ├── services.ts             # Services and pricing
│   ├── faq.ts                  # FAQ content
│   ├── testimonials.ts         # Client testimonials
│   ├── about.ts                # About page content
│   ├── home.ts                 # Home page content
│   └── index.ts                # Content exports
├── lib/                         # Utility functions
│   └── utils.ts                # cn() and other helpers
├── public/                      # Static assets
│   └── robots.txt              # SEO crawling instructions
└── package.json
```

## 🛠️ Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Components:** shadcn/ui
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Sitemap:** Built-in Next.js sitemap support
- **Deployment:** Optimized for Vercel

## 📦 Installation

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Run the development server:**

   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Theme & Colors

The design system uses CSS variables defined in `app/globals.css`. The primary accent color (cyan/blue) can be changed by modifying:

```css
--primary: oklch(0.65 0.25 230);  /* Main accent color */
--accent: oklch(0.65 0.25 230);   /* Keep in sync with primary */
```

**How to change the accent color:**

1. Open `app/globals.css`
2. Find the `:root` section
3. Change the `--primary` and `--accent` values
4. Use [oklch.com](https://oklch.com) to pick new colors

The third value (230) is the hue. Try:

- **Cyan/Blue:** 230
- **Purple:** 280
- **Green:** 160
- **Orange:** 60

### Typography

Font sizes and styles are defined in `app/globals.css` under `@layer base`. Modify the heading and paragraph styles there.

### Content

All content is stored in the `/content` directory as TypeScript files. Edit these files to change:

- **Home page:** `content/home.ts`
- **Services:** `content/services.ts`
- **Case studies:** `content/caseStudies.ts`
- **Testimonials:** `content/testimonials.ts`
- **FAQ:** `content/faq.ts`
- **About:** `content/about.ts`

### Adding a New Case Study

1. Open `content/caseStudies.ts`
2. Add a new object to the `caseStudies` array:

```typescript
{
  slug: "your-case-study-slug",
  title: "Your Case Study Title",
  client: "Client Name",
  industry: "Industry",
  thumbnail: "/work/thumbnail.jpg",
  description: "Short description",
  problem: "The problem statement...",
  approach: [
    "Step 1",
    "Step 2",
    // ...
  ],
  solution: "The solution description...",
  outcomes: [
    {
      metric: "Conversion Rate",
      value: "5.8%",
      description: "Up from 1.9%"
    },
    // ...
  ],
  tags: ["Tag1", "Tag2"],
  year: "2025"
}
```

1. The case study will automatically appear on `/work` and be accessible at `/work/your-case-study-slug`

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will auto-detect Next.js and configure everything
4. Click "Deploy"

### Environment Variables

No environment variables are required for the basic site. If you add a contact form backend or analytics, configure them in your Vercel project settings.

### Build Locally

```bash
npm run build
npm start
```

## 📋 Next Steps

### Connect Contact Form to Email

The contact form currently simulates submission. To connect it to a real backend:

1. **Option 1: Use Vercel API Routes**
   - Create `/app/api/contact/route.ts`
   - Use a service like [Resend](https://resend.com) or [SendGrid](https://sendgrid.com)

2. **Option 2: Use a Form Service**
   - [Formspree](https://formspree.io)
   - [Formspark](https://formspark.io)
   - [Web3Forms](https://web3forms.com)

3. **Update the form handler** in `app/contact/page.tsx` to POST to your endpoint

### Add Analytics

Add analytics by installing:

```bash
npm install @vercel/analytics
```

Then add to `app/layout.tsx`:

```typescript
import { Analytics } from '@vercel/analytics/react';

// In the return statement:
<body>
  {children}
  <Analytics />
</body>
```

### Add OpenGraph Images

1. Create an OG image (1200x630px) in Figma or Canva
2. Save it as `public/og.png`
3. The metadata in `app/layout.tsx` will automatically use it

Or use Next.js dynamic OG image generation:

- Create `app/og/route.tsx`
- Follow the [Next.js OG Image Guide](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image)

## 🎯 Performance

This site is optimized for Core Web Vitals:

- **Sub-second page loads** with Next.js code splitting
- **Optimized images** with next/image
- **Minimal JavaScript** - only what's needed for interactions
- **Efficient CSS** with Tailwind's purging

## 📝 License

This template is provided as-is for your use. Modify and deploy as needed.

## 🤝 Support

For questions or issues:

- Check the [Next.js documentation](https://nextjs.org/docs)
- Check the [shadcn/ui documentation](https://ui.shadcn.com)
- Review the code comments in this project

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS.
