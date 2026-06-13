# Yash Soni — Portfolio

Personal portfolio website inspired by modern dark AI-agency aesthetics. Built with vanilla HTML, CSS, and JavaScript — ready for **GitHub Pages**.

**Live URL (after deploy):** `https://yashsoni2704.github.io/Portfolio/`

## Sections

- Hero with animated marquee
- Statistics (CGPA, SPI, projects)
- Expertise cards
- Featured projects with GitHub links
- Extended project list
- Tech stack
- Education timeline
- Contact form

## Deploy to GitHub Pages

1. Create a new repo on GitHub (e.g. `Portfolio`) or use an existing one
2. Push this folder:
   ```bash
   cd Portfolio
   git init
   git add .
   git commit -m "Add portfolio website"
   git branch -M main
   git remote add origin https://github.com/yashsoni2704/Portfolio.git
   git push -u origin main
   ```
3. Go to **Settings → Pages**
4. Under **Source**, select **Deploy from a branch**
5. Branch: `main`, folder: `/ (root)`
6. Save — your site will be live in ~1 minute

## Customize Before Deploy

| Item | Location |
|------|----------|
| Resume PDF | Place at `assets/Yash_Resume.pdf` |
| Project screenshots | Replace files in `assets/projects/` (see below) |
| Email | Update in `index.html` if different from `yashsoni2704@gmail.com` |
| College name | Add to Education section in `index.html` |
| Contact form (optional) | Sign up at [Formspree](https://formspree.io) and replace form `action` URL |

## Project Images

Add screenshots to `assets/projects/` with these filenames:

- `visavantage.jpg`
- `wanderlust.jpg`
- `stoxora.jpg`
- `virtual-drag.jpg`
- `flightease.jpg`
- `traversal.jpg`

Until you add them, Unsplash fallback images load automatically.

## Tech Stack

- HTML5
- CSS3 (custom properties, grid, animations)
- Vanilla JavaScript (Intersection Observer, counters)
- Google Fonts (Inter, JetBrains Mono)

## License

Personal portfolio — © 2026 Yash Soni
