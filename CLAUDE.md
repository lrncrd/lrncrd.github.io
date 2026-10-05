# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Personal academic site (Lorenzo Cardarelli) served by GitHub Pages from the repo root at https://lrncrd.github.io/. Hand-written static HTML and one stylesheet: no build step, package manager, JavaScript, linter or test suite.

- Pages: `index.html`, `publications.html`, `cv.html`, `talks.html`, `packages.html`. Header, nav and footer are repeated in all five, so a nav or footer change must be made in each.
- `styles.css` holds all styling (OKLCH tokens at the top of the file). `assets/` holds images.
- `full_cv.pdf` is the downloadable CV, built from LaTeX that is not in the repo. `googlecee508b3ca93f83d.html` is the Google Search Console verification file. `robots.txt` and `sitemap.xml` live at the root. Leave them in place.
- Preview locally with `python3 -m http.server` in the repo root.

## Local-only files

`PRODUCT.md` and `DESIGN.md` (design context for the Impeccable skill), `.impeccable/` and `Cardarelli_CV.md` are git-ignored. `Cardarelli_CV.md` is a funding-application CV that includes salary figures and a project proposal: never copy those figures or the proposal sections into the site.
