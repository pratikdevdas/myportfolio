# Pratik Dev Das — Portfolio

Next.js Pages Router portfolio with project pages, a Markdown blog, and a locally
hosted PDF resume. Production: https://www.pratikdevdas.com.

## Run and validate

Use Node.js 22 or newer.

```sh
npm ci
npm run dev
npm test
npm run typecheck
npm run lint
npm run build
```

Development runs at http://localhost:6969. The build also regenerates the sitemap.

## Update the resume

The public file is **`public/resume.pdf`**, available at **`/resume.pdf`** after
deployment. All resume buttons point there. Replace that PDF and commit it to keep
the URL stable. Visitors can view it in their browser or use the footer download.

The editable source for the current PDF is `scripts/build-resume.py`. To update it:

```sh
python3 -m venv .venv
.venv/bin/pip install -r scripts/requirements-resume.txt
.venv/bin/python scripts/build-resume.py
```

Review the resulting single-page PDF visually before committing `public/resume.pdf`.
The PDF embeds the regular and bold Bitstream Vera fonts bundled with ReportLab.
Its text remains selectable and scales cleanly when zoomed. The Python tooling is
only for authoring; the website does not require Python.

## Publish a blog post

1. Copy `content/blog/first-post.md` to a descriptive lowercase filename such as
   `content/blog/building-agent-comics.md`.
2. Set `title`, `description`, and a quoted `date` in `YYYY-MM-DD` format. Write the
   article below the metadata using Markdown. Put images in `public/images/blog/`
   and reference them as `/images/blog/filename.webp`.
3. Keep `draft: true` while writing. Set **`draft: false`** to publish.
4. Run the checks and production build, review locally, then commit and deploy.

The filename becomes `/blog/building-agent-comics`. Drafts, posts without an explicit
`draft: false`, and future-dated posts are excluded from listings, routes and sitemap.
Dates are interpreted in UTC. Future posts require a new build on or after their
publication date; this is not an automatic scheduling service. Raw HTML is sanitized.
The starter template is deliberately unpublished.

## Projects

Edit `data.json`; the first three projects are featured on the homepage. Every
project appears at `/projects` and `/projects/<id>`. Keep existing IDs to preserve
incoming links. Use local optimized images under `public/images/`. Optional links
include `github`, `appUrl`, `videoUrl`, and `previewUrl`.

Garden Home points to `https://garden-home.pratikdevdas.com`. Its original Sites URL
remains an alternate preview while the custom domain is being connected.

The design and scope are recorded in `docs/portfolio-refresh.md`.
