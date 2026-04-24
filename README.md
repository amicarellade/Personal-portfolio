# Dante Amicarella — Personal Portfolio

A personal portfolio website built with vanilla HTML, CSS, and JavaScript. Features an interactive room-based landing page, animated D3.js travel map, golf strokes-gained calculator, and a personal library tracker.

**Live site:** https://amicarellade.github.io/Personal-portfolio/

---

## Pages

| Page | File | Description |
|---|---|---|
| Home | `index.html` | Interactive room scene with clickable shelf items |
| About | `about.html` | Bio, photo gallery (Swiper.js), and animated D3 travel map |
| Projects | `projects.html` | Project cards linking to work |
| Golf | `golf.html` | Strokes-gained calculator |
| Library | `library.html` | Personal reading list |
| Resume | `resume.html` | Resume viewer |

## Tech Stack

- **Vanilla HTML/CSS/JS** — no frontend framework
- **D3.js v7** — animated travel map with TopoJSON world/US data
- **Swiper.js** — photo carousel on the About page
- **Vite** — dev server and build tooling
- **gh-pages** — deployment to GitHub Pages

## Project Structure

```
├── index.html          # Landing page
├── about.html          # About page
├── chess.html          # Chess stats page
├── golf.html           # Golf calculator
├── library.html        # Library page
├── projects.html       # Projects page
├── resume.html         # Resume page
├── src/
│   ├── styles/         # All CSS files
│   │   ├── styles.css  # Shared styles
│   │   ├── about.css
│   │   ├── chess.css
│   │   ├── golf.css
│   │   ├── library.css
│   │   └── resume.css
│   └── scripts/
│       └── script.js   # Strokes-gained calculator logic
├── scripts/
│   └── add-book.js     # CLI tool to add books to Supabase
├── images/             # Logos, icons, shelf image
│   └── about/          # Photo gallery images
├── vite.config.js      # Vite multi-page build config
└── package.json
```

## Local Development

```bash
npm install
npm run dev       # starts dev server at localhost:3000
```

## Build & Deploy

```bash
npm run build     # outputs to /dist
npm run preview   # preview the production build at localhost:4173
npm run deploy    # build + push to gh-pages branch

## Adding a book to the library

```bash
node scripts/add-book.js
```

Requires a `.env` file at the project root with `SUPABASE_SERVICE_KEY` set.
```

## Contact

Found a bug or have a suggestion? Email me at amicarella.datascience@gmail.com
