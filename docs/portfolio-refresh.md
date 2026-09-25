# Portfolio refresh

The reviewed direction retains Pratik's photo and real project imagery, uses dark
green surfaces, a consistent sans-serif type hierarchy, and a compact contact
area. Decorative arrows and repeated card actions are removed: each project
card is one link, with external destinations on its detail page. The introduction
and selected work have priority; writing and contact use quieter headings. The homepage features Agent Comics, Garden Home and Email
Classifier. All six projects have detail pages; the four existing project URLs
remain unchanged. The all-projects button opens `/projects`.

The blog uses repository-managed Markdown with explicit publication metadata.
Drafts and future-dated posts are excluded from listings and generated routes.
The initial state contains no published articles or invented writing.

The resume lives at `public/resume.pdf`, linked everywhere as `/resume.pdf`.
It preserves the supplied employment achievements, includes agentic presentation
chat and the credit system under SlidesAI, and features Agent Comics, Garden Home
and Email Classifier. Open Graph Generator is excluded at the owner's request.

Garden Home links from the resume to its portfolio project page, which provides
the working Sites preview and walkthrough. The custom domain is not linked while
it is unavailable. No DNS changes are part of this PR.

Validation covers publication filtering, Markdown sanitization, date validation,
path safety, legacy project routes, type checking, lint, production build, PDF
content/layout and browser checks of the main navigation and responsive pages.

The resume gives analytics-driven drip campaigns a separate experience bullet and
describes Garden Home as AI-driven. Embedded regular/bold fonts and larger body
text improve PDF readability. A vector P monogram on dark green replaces the
portrait favicon, with a multi-size ICO fallback and an Apple touch icon.

The resume uses a classic black-and-white, single-column bullet-point layout,
referencing Harvard MCS resume guidance. Standard section headings with rules,
bold company/project names, separate italic role lines and aligned dates establish
a clear reading hierarchy. PDF text order, embedded fonts and one-page rendering
are verified. Contact details remain in the body rather than page headers.

The homepage introduction has a quiet greeting, one main statement, one supporting
sentence that includes SlidesAI, and one work action. Resume access remains in
the navigation. The homepage Writing section appears only for published posts;
the Blog route remains available. The footer groups email and social links without
a repeated contact heading or resume action.

Both contact entry points open a shared email draft. External website links use
consistent portfolio UTMs; internal links use click events without campaign tags.
The existing Simple Analytics integration records outbound, project, contact,
resume and navigation clicks with placement metadata. The introduction also
mentions creative exploration.
