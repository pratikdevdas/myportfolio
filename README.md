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
the URL stable. The Resume navigation link opens it in the browser, where visitors can download it.

The editable source for the current PDF is `scripts/build-resume.py`. To update it:

```sh
python3 -m venv .venv
.venv/bin/pip install -r scripts/requirements-resume.txt
.venv/bin/python scripts/build-resume.py
```

Review the resulting single-page PDF visually before committing `public/resume.pdf`.
The resume follows a classic single-column bullet-point format with standard
section headings, distinct employer and role lines, and aligned dates. It uses no
photos, sidebars or layout tables. Regular, bold and italic Bitstream Vera fonts
are embedded; text stays selectable. The builder verifies section extraction
order and required content. This is a formatting check, not a guarantee for every ATS. The Python tooling is
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
The starter template is deliberately unpublished. The homepage Writing section
appears once at least one post is published; the Blog navigation link is always available.

## Projects

Edit `data.json`; the first three projects are featured on the homepage. Every
project appears at `/projects` and `/projects/<id>`. Keep existing IDs to preserve
incoming links. Use local optimized images under `public/images/`. Optional links
include `github`, `appUrl`, `videoUrl`, and `previewUrl`.

Garden Home links from the resume to `/projects/garden-home`. That portfolio
page links to the working Sites preview and walkthrough. The unavailable custom
domain is not linked; update the project URL once it is live.

The design and scope are recorded in `docs/portfolio-refresh.md`.

## Contact and attribution

Contact in the navigation and the footer email use the same prefilled `mailto:`
link from `lib/links.ts`. It opens the visitor's configured mail handler (including
Gmail when registered as that handler); it does not send anything automatically.
The draft has subject "Let's work together" and a short project/opportunity prompt.

External website, app, source, video, social and Markdown article links carry:

- `utm_source=pratikdevdas.com`
- `utm_medium=referral`
- `utm_campaign=portfolio`
- `utm_content=<project/action or placement>`, such as `agent-comics_website`

Existing destination query parameters and fragments are preserved. Internal links,
email links and the resume PDF URL stay untagged to avoid resetting attribution.
Use the destination site's acquisition/campaign analytics to inspect these UTMs;
third-party sites may ignore them. Portfolio click counts are recorded independently.

In the existing Simple Analytics account, select the portfolio and open **Events
Explorer**. Inspect `outbound_click`, `project_open`, `contact_click`, `resume_open`
and `navigation_click`. Filter metadata by `placement` (navigation, hero, footer,
home_projects, all_projects, project_detail), `project`, or `destination`.
Contact events contain only placement; no draft content is collected. Other click
events omit query strings and fragments. A click records intent, not a sent email,
app install or completed download. Custom events run only on `pratikdevdas.com`
and `www.pratikdevdas.com`, so local/Vercel previews do not add test events.

Early clicks queue until the analytics script loads. Link navigation does not wait
for analytics and continues if the script is blocked. Validate real event delivery
in Events Explorer after deployment; automated checks cover construction and dispatch.

Reference: https://docs.simpleanalytics.com/events and https://docs.simpleanalytics.com/metadata.
