# Portfolio site

A Jekyll site built for GitHub Pages. Dark, editorial theme with a hero
animation that echoes a UMAP/embedding plot, teal, amber, and violet
"cluster" colors reused throughout for tags and links.

## 1. Push it to GitHub

GitHub Pages will serve a site for free from a repo named exactly
`<your-username>.github.io`. From inside this folder:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/Varsini-Sakthi/Varsini-Sakthi.github.io.git
git push -u origin main
```

If you'd rather use a project repo (e.g. `github.com/Varsini-Sakthi/portfolio`)
instead of the special `username.github.io` repo, that works too, just
enable Pages on it (step 2) and your site will live at
`varsini-sakthi.github.io/portfolio`.

## 2. Turn on GitHub Pages

In the repo: **Settings → Pages → Build and deployment → Source** → set to
`Deploy from a branch`, branch `main`, folder `/ (root)`. Save. The site
builds in 1–2 minutes at the URL GitHub shows you.

Then update `url:` in `_config.yml` to that URL and push again (it's used
for SEO tags, not for the site to function).

## 3. Your CV

Your resume is already included at `assets/resume.pdf` and linked from the
`/cv/` page. To update it later, just replace that file with a new one of
the same name and push.

## 4. Edit content, all data-driven, no HTML editing needed

- `_data/projects.yml`, project cards (title, subtitle, tags, metric,
  description, links)
- `_data/publications.yml`, publications list (set `featured: true` and a
  `badge` to highlight one, as done for the Alzheimer's/NMDAR paper)
- `_data/experience.yml`, the experience timeline (role, org, meta/dates,
  tags, points)
- `_data/certifications.yml`, the certifications list

Add, remove, or reorder entries in any of these files and the site updates
automatically on next build.

## 5. Preview locally (optional)

Requires Ruby + Bundler:

```bash
bundle install
bundle exec jekyll serve
```

Then visit `http://localhost:4000`.

## Notes

- Palette: light lavender wash (`#EAE8FF`) background, white cards, dark
  navy ink (`#2D3142`) for text, slate (`#6D6F7C`) for secondary text, and
  sky blue (`#B0D7FF` → `#4A9EF` for contrast on text) as the single accent
  color for links, metrics, and section labels, all six colors from your
  palette are used.
- I left your phone number off the public site on purpose, publishing it
  invites spam/scraping. Email + LinkedIn + GitHub are the standard set for
  an academic portfolio; add it back in `_config.yml` and the templates if
  you want it.
- I didn't name specific target PhD labs/PIs on the public page, that's
  strategy info for your outreach tracker, not something to broadcast on a
  site those same PIs might visit.
- The scVI vs. PCA project now states the real result from your resume: PCA
  outperformed scVI on classification accuracy, while scVI gave more
  biologically coherent structure. That's a more honest and, frankly, more
  interesting finding than a flat "improved AUC" claim, worth keeping as
  framed, since reviewers like Kellis will read a nuanced negative result
  as a sign of rigor, not a weakness.
- The microalgae/biodiesel paper from your LinkedIn wasn't added since you
  didn't mention it in your request, say the word if you'd like it in
  too.
