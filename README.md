# Deepika — Portfolio Website

A modern, fully responsive portfolio website built with **React**, **Vite**, and **Tailwind CSS**, exactingly faithful to the **Snow Minimal & Clean Portfolio** visual identity (typography, spacing, monochrome aesthetic, project hover animations, and skill progress indicators).

---

## 🚀 Features

- **Exact Template Visual Identity**: Preserves the Snow theme layout structure, `Playfair Display` headlines, `Work Sans` body text, gap spacing, and monochrome dark/light styling (`#111111` / `#252525` / `#f7f7f7`).
- **Single Data Source**: All portfolio text content is stored cleanly inside [`src/data/content.js`](file:///c:/Users/2025/Desktop/D.portfolio/src/data/content.js) for effortless updates without touching layout code.
- **Skill Proficiency Bars**: Progress level indicators matching the Snow template style.
- **Filterable Projects & Modal View**: Category filter tabs (*All*, *AI & Web*, *Full-Stack*, *Backend & DB*) with zoom thumbnail overlays and detail modal popups.
- **Active Navigation Tracking**: Dynamic scroll detection highlighting the current section in the fixed header navbar.
- **Formspree Contact Integration**: Real working contact form with POST transmission, loading indicators, success state feedback, and error handling.
- **Deploy-Ready**: Optimized Vite build setup for Vercel, Netlify, or GitHub Pages.

---

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS + Custom CSS (`index.css` + `tailwind.config.js`)
- **Icons**: Lucide React
- **Fonts**: Playfair Display & Work Sans (via Google Fonts)

---

## 📁 Project Structure

```
D.portfolio/
├── index.html               # Main HTML entry with SEO metadata & Google Fonts
├── vite.config.js           # Vite server & build configuration
├── tailwind.config.js       # Custom design tokens & colors
├── postcss.config.js        # PostCSS configuration
├── package.json             # Dependencies and build scripts
├── public/
│   └── assets/
│       └── images/          # Avatar, signature, and project placeholders
├── src/
│   ├── data/
│   │   └── content.js       # Editable data file (Bio, Skills, Projects, Education)
│   ├── components/
│   │   ├── Navbar.jsx       # Fixed header with mobile drawer & active indicator
│   │   ├── Hero.jsx         # Hero section with role title & CTA buttons
│   │   ├── About.jsx        # Bio, avatar placeholder, & metadata grid
│   │   ├── Skills.jsx       # Categorized skills with progress level bars
│   │   ├── Projects.jsx     # Filterable project cards with thumbnail zoom
│   │   ├── ProjectModal.jsx # Project detail popup modal
│   │   ├── Education.jsx    # Academic background timeline
│   │   ├── Certifications.jsx# Verified credentials cards
│   │   ├── Contact.jsx      # Formspree contact form & info cards
│   │   └── Footer.jsx       # Social links & back-to-top button
│   ├── App.jsx              # Main app wrapper with scroll observer
│   ├── main.jsx             # React DOM root entry
│   └── index.css            # Tailwind directives & Snow custom CSS
└── README.md                # Project documentation & deployment guide
```

---

## 📦 Setup & Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000` to view the live website.

### 3. Build for Production
```bash
npm run build
```
This generates a production-ready `dist/` directory optimized for deployment.

---

## 📝 Updating Portfolio Content

All text content lives in [`src/data/content.js`](file:///c:/Users/2025/Desktop/D.portfolio/src/data/content.js):

- **Personal Details**: Modify `name`, `role`, `location`, `email`, `phone`, `linkedin`, and `github`.
- **Skills**: Update skills, category names, proficiency levels, and percentage bars inside `skillsData`.
- **Projects**: Add or edit project titles, descriptions, tech stack tags, and bullet points inside `projectsData`.
- **Education & Certifications**: Edit academic history and certificate credentials inside `educationData` and `certificationsData`.

---

## 📷 Asset Replacement Checklist

Before deploying your live website, make sure to:

1. **Avatar Photo**: Replace `public/assets/images/avatar-placeholder.svg` with your headshot image (`avatar.jpg` or `avatar.png`) and update the `avatar` path in `src/data/content.js`.
2. **Project Thumbnails**: Replace `project-legalmind.svg`, `project-event.svg`, and `project-donor.svg` in `public/assets/images/` with real project screenshots or mockups.
3. **Resume PDF**: Place your `Deepika_Resume.pdf` file inside `public/assets/Deepika_Resume.pdf`.
4. **Formspree Endpoint**: (Optional) Update `formspreeEndpoint` in `src/data/content.js` with your own Formspree form ID (from [formspree.io](https://formspree.io)).

---

## 🌐 Deployment Instructions

### Deploy to Vercel
1. Install Vercel CLI or connect your GitHub repository to [Vercel](https://vercel.com).
2. Set Build Command to: `npm run build`
3. Set Output Directory to: `dist`
4. Click **Deploy**.

### Deploy to Netlify
1. Log in to [Netlify](https://netlify.com) and click **Add new site** > **Import an existing project**.
2. Select your repository.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Click **Deploy Site**.
