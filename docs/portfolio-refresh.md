# Portfolio refresh

The reviewed direction retains Pratik's photo and real project imagery, uses dark
green surfaces and restrained 16px icons, and replaces the large footer with a
compact contact area. The homepage features Agent Comics, Garden Home and Email
Classifier. All six projects have detail pages; the four existing project URLs
remain unchanged. The all-projects button opens `/projects`.

The blog uses repository-managed Markdown with explicit publication metadata.
Drafts and future-dated posts are excluded from listings and generated routes.
The initial state contains no published articles or invented writing.

The resume lives at `public/resume.pdf`, linked everywhere as `/resume.pdf`.
It preserves the supplied employment achievements, includes agentic presentation
chat and the credit system under SlidesAI, and features Agent Comics, Garden Home
and Email Classifier. Open Graph Generator is excluded at the owner's request.

Garden Home uses its requested custom domain with the working Sites URL also
available as an alternate preview. No DNS changes are part of this PR.

Validation covers publication filtering, Markdown sanitization, date validation,
path safety, legacy project routes, type checking, lint, production build, PDF
content/layout and browser checks of the main navigation and responsive pages.
