# alihsn.com — Personal Website

> My personal corner of the internet. Projects, writing, and a bit about me.

A minimal, fast personal site built with Next.js. It has a home page, a projects showcase, a blog powered by MDX, and an experience timeline — all with dark mode support.

---

## Pages

| Page | Description |
|---|---|
| `/` | Hero intro with bio, links, and social icons |
| `/projects` | Grid of personal and school projects |
| `/blog` | MDX-powered writing |
| `/experience` | Timeline of internships and roles |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Blog | MDX via `next-mdx-remote` + `gray-matter` |
| Theme | `next-themes` (dark mode default) |
| Icons | Lucide React, React Icons |

---

## Getting Started

```bash
git clone https://github.com/coscoo/personal-site.git
cd personal-site
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
personal-site/
├── app/
│   ├── page.tsx              # Home / hero
│   ├── projects/page.tsx     # Projects grid
│   ├── blog/page.tsx         # Blog listing
│   ├── blog/[slug]/page.tsx  # Individual post
│   └── experience/page.tsx   # Experience timeline
├── components/
│   ├── home/                 # Hero, avatar, social links
│   ├── layout/               # Navbar, footer, theme toggle
│   ├── projects/             # ProjectCard, ProjectGrid
│   ├── blog/                 # PostCard, PostList
│   └── experience/           # Timeline components
├── content/posts/            # MDX blog posts
└── public/                   # Static assets
```

---

## License

MIT
