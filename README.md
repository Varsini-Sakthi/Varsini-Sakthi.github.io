# Portfolio site

A Jekyll site built for GitHub Pages. Dark, editorial theme with a hero
animation that echoes a UMAP/embedding plot — teal, amber, and violet
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
instead of the special `username.github.io` repo, that works too — just
enable Pages on it (step 2) and your site will live at
`varsini-sakthi.github.io/portfolio`.

## 2. Turn on GitHub Pages

In the repo: **Settings → Pages → Build and deployment → Source** → set to
`Deploy from a branch`, branch `main`, folder `/ (root)`. Save. The site
builds in 1–2 minutes at the URL GitHub shows you.

Then update `url:` in `_config.yml` to that URL and push again (it's used
for SEO tags, not for the site to function).

## 3. Add your CV

Drop a PDF at `assets/cv.pdf` (create the `assets` folder if needed — it
already exists here for `css`/`js`). The `/cv/` page's download button
points there automatically.

## 4. Edit your projects

All project cards are generated from `_data/projects.yml` — add, remove, or
reorder entries there; no HTML editing needed. Each entry supports
`title`, `subtitle`, `tags`, `metric`, `description`, and a `links` list.

## 5. Preview locally (optional)

Requires Ruby + Bundler:

```bash
bundle install
bundle exec jekyll serve
```

Then visit `http://localhost:4000`.

## Notes

- I left your phone number off the public site on purpose — publishing it
  invites spam/scraping. Email + LinkedIn + GitHub are the standard set for
  an academic portfolio; add it back in `_config.yml` and the templates if
  you want it.
- I didn't name specific target PhD labs/PIs on the public page — that's
  strategy info for your outreach tracker, not something to broadcast on a
  site those same PIs might visit.
- Publications section is intentionally omitted for now since nothing is
  published yet; add a `## Publications` section to `index.html` when the
  microglial pipeline paper is out, and I can help format it (in prep /
  in submission are both fine to list).
