# Adasa Photography Blog (عدسة)

A modern, responsive photography blog web application inspired by the **Adasa** photography platform. Built with **React 19**, **Vite**, **Tailwind CSS v4**, and **React Router DOM v7**.

---

## 🌟 Key Features

### 1. Home Page (`/`)
- **Hero Section**:
  - Geometric grid background pattern (`.hero-grid-pattern`) with warm radial ambient glow.
  - Distinct badge: `● ● مرحباً بك في عدسة` ("Welcome to Adasa").
  - Prominent headline: **"اكتشف فن التصوير الفوتوغرافي"** ("Discover the Art of Photography").
  - Call-to-action buttons: "Explore Articles" (`استكشف المقالات ←`) and "Learn More" (`اعرف المزيد`).
  - 4 quick statistics cards: `+50 Articles`, `+10k Readers`, `4 Categories`, and `6 Authors`.
- **Featured Articles (مقالات مختارة)**:
  - 3 featured articles displayed vertically in stacked horizontal cards.
  - Image positioned on the right with a `★ مميز` ("Featured") badge.
  - Content on the left including category badge, estimated reading time, article title, excerpt, author details, and an "Read Article ←" link.
- **Explore by Category (استكشف حسب الموضوع)**:
  - Responsive grid showcasing photography categories (Lighting, Portrait, Landscapes, Techniques, Gear) with article counts and direct filter routing.
- **Latest Articles (أحدث المقالات)**:
  - 3-column responsive grid displaying the most recently published photography guides.
- **Newsletter Subscription**:
  - Interactive email subscription box with instant confirmation and community trust metrics (+10,000 photographers).

### 2. Blog Page (`/blog`)
- **Live Search**:
  - Real-time search bar that filters articles across titles and excerpts.
- **Category Filtering**:
  - Filter pills for quick categorization: *All Articles*, *Lighting*, *Portrait*, *Landscapes*, *Techniques*, and *Gear*.
  - Supports deep linking via URL query parameters (e.g., `/blog?category=بورتريه`).
- **View Modes**:
  - **Grid View**: Clean 3-column responsive article card layout.
  - **List View**: Horizontal card orientation with side-by-side thumbnail and summary.
  - Seamless toggle button between Grid and List layouts.
- **Pagination**:
  - Configured for 6 articles per page.
  - Interactive numbered page buttons with Previous (`السابق`) and Next (`التالي`) navigation and automatic smooth scrolling.
- **Empty State**:
  - Friendly icon with a reset filters button (`إعادة تعيين الفلاتر`) when no matching articles are found.

### 3. Article Details Page (`/blog/:id`)
- **Cover Image & Hero Header**:
  - Full-width hero banner with photographic backdrop, category pill, breadcrumb navigation, publication date, and author badge.
- **Article Content**:
  - Styled excerpt callout box with orange accent border.
  - Section headings with custom camera icon markers (`[📷]`).
  - Tags list (`#الوسوم`) linked to category filters.
  - Social share bar (Copy Link, WhatsApp, LinkedIn, X/Twitter).
  - Comprehensive author bio card with profile avatar and description.
- **Sticky Sidebar (القائمة الجانبية)**:
  - Positioned with `sticky top-24` for effortless access while reading.
  - **In-page Table of Contents**: Numbered section index that smoothly scrolls to the corresponding header and updates the URL hash (`#section-X`).
  - Active section visual highlight.
  - Publication date and reading time summary card.
  - Newsletter / Explore more callout card.
- **Related Articles**:
  - 3 curated articles from the same category at the bottom of the page.

### 4. About Us Page (`/about`)
- Vision, mission, and overview of the Adasa photography platform.

### 5. 404 Not Found Page (`*`)
- Clean error page with home button redirection.

### 6. Navigation & Footer
- **Navbar**:
  - Brand logo with Arabic typography, navigation pills for Home and Blog, search indicator, and mobile hamburger drawer.
- **Footer**:
  - 4-column layout matching design specifications with brand squircle icon, platform links, category shortcuts, social media buttons, newsletter input, and copyright notice.

---

## 🛠️ Technology Stack

| Technology | Purpose |
| :--- | :--- |
| **React 19** | Modern UI library utilizing functional components and hooks (`useState`) |
| **Vite** | Fast frontend build tool and dev server |
| **Tailwind CSS v4** | Utility-first styling framework with custom patterns and dark palette |
| **React Router DOM v7** | Declarative client-side routing and navigation |
| **FontAwesome** | Vector icons for UI controls, categories, and social media |
| **Tajawal Font** | Arabic Google Font for typography |

---

## 📁 Project Structure

```text
app1/
├── public/
├── src/
│   ├── assets/              # Logos and static media
│   ├── Component/
│   │   ├── About/           # About Us page component
│   │   ├── Blog/            # Blog list, search, filters & pagination
│   │   ├── Details/         # Single article page & sticky TOC sidebar
│   │   ├── Footer/          # Responsive 4-column footer
│   │   ├── Home/            # Landing page with hero & featured posts
│   │   ├── Layout/          # Root layout wrapping Navbar & Footer
│   │   ├── Navbar/          # Sticky navigation bar with mobile menu
│   │   └── NotFound/        # 404 error page component
│   ├── data/
│   │   └── posts.json       # 28 Photography articles in Arabic
│   ├── App.jsx              # Router configuration
│   ├── index.css            # Tailwind CSS directives & custom styles
│   └── main.jsx             # React DOM entry point
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18.0.0 or higher recommended)
- npm or yarn

### Installation & Run

1. Clone or navigate to the project directory:
   ```bash
   cd "Adasa project/app1"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```text
   http://localhost:5173
   ```

### Building for Production
To create an optimized production build:
```bash
npm run build
```

---

## 📝 License
This project was developed for educational and portfolio purposes. All photography content and articles are localized in Arabic.
