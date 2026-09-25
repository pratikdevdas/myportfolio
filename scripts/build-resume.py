"""Build a single-column, text-based resume with embedded fonts.

Layout reference: Harvard MCS bullet-point resume template.
https://careerservices.fas.harvard.edu/resources/bullet-point-resume-template/
Contact details and all resume content stay in the document body.
"""
from pathlib import Path

import reportlab
from pypdf import PdfReader
from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen.canvas import Canvas
from reportlab.platypus import Flowable, HRFlowable, Paragraph, SimpleDocTemplate, Spacer

out = Path(__file__).resolve().parents[1] / "public" / "resume.pdf"
font_dir = Path(reportlab.__file__).parent / "fonts"
for name, file in [("ResumeSans", "Vera.ttf"), ("ResumeSans-Bold", "VeraBd.ttf"), ("ResumeSans-Italic", "VeraIt.ttf")]:
    pdfmetrics.registerFont(TTFont(name, str(font_dir / file)))
pdfmetrics.registerFontFamily("ResumeSans", normal="ResumeSans", bold="ResumeSans-Bold", italic="ResumeSans-Italic")
INK = HexColor("#111111")
MUTED = HexColor("#333333")
styles = {
    "name": ParagraphStyle("name", fontName="ResumeSans-Bold", fontSize=23, leading=27, alignment=1, spaceAfter=3),
    "role": ParagraphStyle("role", fontName="ResumeSans", fontSize=10.5, leading=14, alignment=1, spaceAfter=5),
    "contact": ParagraphStyle("contact", fontName="ResumeSans", fontSize=9, leading=12.5, alignment=1, spaceAfter=2),
    "section": ParagraphStyle("section", fontName="ResumeSans-Bold", fontSize=11, leading=14, spaceAfter=3, keepWithNext=True),
    "title": ParagraphStyle("title", fontName="ResumeSans-Bold", fontSize=10.5, leading=14, spaceAfter=4, keepWithNext=True),
    "job-role": ParagraphStyle("job-role", fontName="ResumeSans-Italic", fontSize=10, leading=13, spaceAfter=5, keepWithNext=True),
    "body": ParagraphStyle("body", fontName="ResumeSans", fontSize=10, leading=13.2, spaceAfter=4),
    "bullet": ParagraphStyle("bullet", fontName="ResumeSans", fontSize=10, leading=13.2, spaceAfter=4, leftIndent=10, firstLineIndent=0, bulletIndent=0, bulletFontName="ResumeSans", bulletFontSize=9),
}
for style in styles.values():
    style.textColor = INK


class LabelDate(Flowable):
    """A single text line: label followed by date in PDF reading order."""
    def __init__(self, label, date):
        super().__init__()
        self.label, self.date = label, date
        self.height = 15
        self.keepWithNext = True

    def wrap(self, available_width, available_height):
        self.width = available_width
        label_width = pdfmetrics.stringWidth(self.label, "ResumeSans-Bold", 11)
        date_width = pdfmetrics.stringWidth(self.date, "ResumeSans", 9)
        assert label_width + date_width + 18 <= self.width, "Heading and date overlap"
        return self.width, self.height

    def draw(self):
        self.canv.setFillColor(INK)
        self.canv.setFont("ResumeSans-Bold", 11)
        self.canv.drawString(0, 4, self.label)
        self.canv.setFont("ResumeSans", 9)
        self.canv.setFillColor(MUTED)
        self.canv.drawRightString(self.width, 4, self.date)


flow = []
def p(text, style="body"):
    if style == "bullet":
        flow.append(Paragraph(text.removeprefix("- "), styles[style], bulletText="•"))
    else:
        flow.append(Paragraph(text, styles[style]))


def section(label):
    flow.append(Spacer(1, 10))
    p(label, "section")
    rule = HRFlowable(width="100%", thickness=0.5, color=INK, spaceAfter=7)
    rule.keepWithNext = True
    flow.append(rule)


def employment(company, role, dates):
    flow.append(LabelDate(company, dates))
    p(role, "job-role")


def link(url, label):
    return f'<a href="{url}" color="#111111"><font name="ResumeSans" size="9">{label}</font></a>'


p('Pratik Dev Das','name')
p(link('mailto:dasdev.pratik@gmail.com','dasdev.pratik@gmail.com')+' | +91 7979901261<br/>'+link('https://www.pratikdevdas.com','pratikdevdas.com')+' | '+link('https://github.com/pratikdevdas','github.com/pratikdevdas')+' | '+link('https://www.linkedin.com/in/pratikdevdas/','LinkedIn'),'contact')
section('PROFESSIONAL EXPERIENCE')
employment('SlidesAI.io', 'Fullstack Engineer', 'June 2024 - Present')
p('- Contributed extensively to agentic presentation chat UX and implemented the credit system.','bullet')
p('- Launched an AI-powered PowerPoint add-in that creates presentations from topics, scripts and websites; ranked second among AI-powered add-ins in Microsoft Marketplace within two weeks.','bullet')
p('- Evaluated workflows across 2M+ presentations using prompt iteration and Promptfoo, improving positive user feedback to 18-20% over two months.','bullet')
p('- Rebuilt request handling with Cloudflare Queues, Durable Objects and WebSockets, reducing server overhead by 50% and delivering real-time status updates.','bullet')
p('- Implemented analytics-driven drip campaigns and user-requested features for a Google Slides add-on with 15M+ downloads.','bullet')
p('- Built Interactico for live Google Meet polls and quizzes (13K+ downloads), with subscription billing, analytics and user feedback flows.','bullet')
p('- Built a WordPress/GraphQL/Next.js CMS with Cloudflare KV, cutting build time for 170 blog pages from 17 to 3 minutes. Shipped features and production fixes in Linear-managed sprints.','bullet')
flow.append(Spacer(1,4))
employment('9AI.in', 'Frontend Engineer Intern', 'March 2024 - May 2024')
p('- Shipped a React/TanStack Query frontend and UI architecture for an AI-powered lip-sync app.', 'bullet')
section('PROJECTS')
p('Agent Comics / Comic Studio | '+link('https://agentcomics.com','Website')+' | '+link('https://apps.apple.com/us/app/comic-studio-ai-comic-maker/id6799505824','App Store'),'title')
p('Created an AI comic-making product for iPhone and iPad with guided story planning, character references, full-page artwork generation and downloadable pages.')
flow.append(Spacer(1,4))
p('Garden Home | '+link('https://www.pratikdevdas.com/projects/garden-home','Project overview'),'title')
p('Created an AI-driven architectural visualization project exploring residential interiors, materials and lighting through still images and walkthroughs.')
flow.append(Spacer(1,4))
p('Email Classifier | '+link('https://www.pratikdevdas.com/projects/emailClassify','Project overview'),'title')
p('Built Gmail categorization using OAuth, GPT-4o mini and LangChain prompt chaining, with LangSmith observability and a Figma-designed Tailwind interface.')
section('TECHNICAL SKILLS')
p('<b>Development:</b> JavaScript, TypeScript, React, Redux, TanStack Start, React Query, Next.js, Remix, Radix UI, Tailwind, GraphQL, Node.js, Express, PostgreSQL, OAuth, Jest, Cypress<br/><b>AI &amp; Cloud:</b> LangChain, LangSmith, Promptfoo; Cloudflare Workers, KV, Queues, Workers AI, Durable Objects, Observability, AI Gateway, Workflows, Agents; WebSockets, Docker<br/><b>Tools:</b> Figma, Cursor, Linear, Notion, Claude')
section('EDUCATION')
flow.append(LabelDate('KIIT University', 'August 2021 - August 2024'))
p('Bachelor of Science in Computer Science', 'job-role')

doc = SimpleDocTemplate(
    str(out), pagesize=A4, rightMargin=36, leftMargin=36,
    topMargin=28, bottomMargin=28, title="Pratik Dev Das - Resume", author="Pratik Dev Das",
)
def resume_canvas(*args, **kwargs):
    kwargs["initialFontName"] = "ResumeSans"
    return Canvas(*args, **kwargs)
doc.build(flow, canvasmaker=resume_canvas)
reader = PdfReader(out)
assert len(reader.pages) == 1, f"Unexpected pages: {len(reader.pages)}"
text = reader.pages[0].extract_text()
required = ["PROFESSIONAL EXPERIENCE", "SlidesAI.io", "Fullstack Engineer", "drip campaigns", "9AI.in", "PROJECTS", "Agent Comics", "Garden Home", "AI-driven", "Email Classifier", "TECHNICAL SKILLS", "EDUCATION", "KIIT University"]
for phrase in required:
    assert phrase in text, f"Missing resume text: {phrase}"
positions = [text.index(heading) for heading in ["PROFESSIONAL EXPERIENCE", "PROJECTS", "TECHNICAL SKILLS", "EDUCATION"]]
assert positions == sorted(positions), "Section extraction order changed"
assert "Open Graph Generator" not in text
print(f"Created {out}; pages={len(reader.pages)}; links={len(reader.pages[0].get('/Annots', []))}; text order verified")
