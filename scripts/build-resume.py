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
    "name": ParagraphStyle("name", fontName="ResumeSans-Bold", fontSize=22, leading=25, alignment=1, spaceAfter=3),
    "role": ParagraphStyle("role", fontName="ResumeSans-Italic", fontSize=9.8, leading=13, alignment=1, spaceAfter=4),
    "contact": ParagraphStyle("contact", fontName="ResumeSans", fontSize=9, leading=12.5, alignment=1, spaceAfter=2),
    "section": ParagraphStyle("section", fontName="ResumeSans-Bold", fontSize=11, leading=14, spaceAfter=3, keepWithNext=True),
    "title": ParagraphStyle("title", fontName="ResumeSans-Bold", fontSize=10.2, leading=13, spaceAfter=3, keepWithNext=True),
    "job-role": ParagraphStyle("job-role", fontName="ResumeSans-Italic", fontSize=9.8, leading=12.5, spaceAfter=3, keepWithNext=True),
    "body": ParagraphStyle("body", fontName="ResumeSans", fontSize=9.4, leading=11.6, spaceAfter=2.2),
    "bullet": ParagraphStyle("bullet", fontName="ResumeSans", fontSize=9.4, leading=11.6, spaceAfter=2.2, leftIndent=10, firstLineIndent=0, bulletIndent=0, bulletFontName="ResumeSans", bulletFontSize=9),
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
    flow.append(Spacer(1, 6))
    p(label, "section")
    rule = HRFlowable(width="100%", thickness=0.5, color=INK, spaceAfter=5)
    rule.keepWithNext = True
    flow.append(rule)


def employment(company, role, dates):
    flow.append(LabelDate(company, dates))
    p(role, "job-role")


def link(url, label):
    return f'<a href="{url}" color="#111111"><font name="ResumeSans" size="9">{label}</font></a>'


p('Pratik Dev Das','name')
p('Fullstack engineer who ships LLM agents and integrations to real users, with TypeScript and Cloudflare.','role')
p(link('mailto:dasdev.pratik@gmail.com','dasdev.pratik@gmail.com')+' | +91 7979901261<br/>'+link('https://www.pratikdevdas.com','pratikdevdas.com')+' | '+link('https://github.com/pratikdevdas','github.com/pratikdevdas')+' | '+link('https://www.linkedin.com/in/pratikdevdas/','linkedin.com/in/pratikdevdas'),'contact')
section('PROFESSIONAL EXPERIENCE')
employment('SlidesAI.io', 'Fullstack Engineer', 'June 2024 - Present')
p("- Built research, artifacts and template suggestions for SlidesAI's agentic presentation chat, where users create and edit decks by talking to an agent.",'bullet')
p('- Built its credit system. When users run out of credits, the agent tells them in the chat and nudges them to buy more, which lifted payments by 22%.','bullet')
p('- Rebuilt the presentation generation flow on Cloudflare Queues, Durable Objects and WebSockets. Agentic generation takes a while, so users now see live progress as it runs, and server overhead dropped by 50%.','bullet')
p('- Launched an AI PowerPoint add-in that makes presentations from a topic, script or website. It hit #2 among AI add-ins on the Microsoft Marketplace within two weeks.','bullet')
p('- Set up evals for LLM workflows across 2M+ presentations with Promptfoo, LangSmith, Latitude and Laminar, then used the results to tune prompts and raise positive user feedback within two months.','bullet')
p('- Talked directly with users and customers of a Google Slides add-on with 15M+ downloads, then shipped the features they asked for and ran drip campaigns based on analytics.','bullet')
p('- Built Interactico, a live polls and quizzes tool for Google Meet with 19K+ downloads, including subscription billing and analytics.','bullet')
p('- Built a WordPress, GraphQL and Next.js CMS on Cloudflare KV that cut build time for 170 blog pages from 17 to 3 minutes.','bullet')
flow.append(Spacer(1,4))
employment('9AI.in', 'Frontend Engineer Intern', 'March 2024 - May 2024')
p('- Built the React and TanStack Query frontend for an AI lip-sync app.', 'bullet')
section('PROJECTS')
p('Agent Comics / Comic Studio | '+link('https://agentcomics.com','Website')+' | '+link('https://apps.apple.com/us/app/comic-studio-ai-comic-maker/id6799505824','App Store'),'title')
p('- Launched the Agent Comics MCP server, so people can make comics from start to finish inside ChatGPT, Claude and Codex. It gives the AI 12 tools to create characters, write page prompts, save pages and publish.','bullet')
p('- It runs on Cloudflare Workers with OAuth 2.1 sign-in. Every change an agent makes is saved as a Durable Object version, so any edit can be rolled back.','bullet')
p("- Built the comic agent behind the Comic Studio app for iPhone, iPad and web, live on the App Store. It takes a story idea through storyboarding, prompts, character sheets and finished pages, pausing for the user's review along the way.",'bullet')
flow.append(Spacer(1,4))
p('Email Classifier | '+link('https://www.pratikdevdas.com/projects/emailClassify','Project overview'),'title')
p('- A Gmail agent that sorts email into categories, using OAuth, GPT-4o mini and LangChain, with LangSmith tracing.','bullet')
flow.append(Spacer(1,4))
p('More projects at '+link('https://www.pratikdevdas.com','pratikdevdas.com'),'title')
section('TECHNICAL SKILLS')
p('<b>Development:</b> JavaScript, TypeScript, React, Redux, TanStack Start, React Query, Next.js, Remix, Radix UI, Tailwind, GraphQL, Node.js, Express, PostgreSQL, OAuth, Jest, Cypress<br/><b>AI &amp; Agents:</b> LLM APIs, tool calling, MCP servers, LangChain, LangSmith, Promptfoo, Latitude, Laminar<br/><b>Cloud:</b> Cloudflare Workers, KV, Queues, Workers AI, Durable Objects, Observability, AI Gateway, Workflows, Agents, WebSockets, Docker<br/><b>Tools:</b> Figma, Cursor, Linear, Notion, Claude, Codex, PostHog')
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
required = ["LLM agents and integrations", "19K+", "customers", "PROFESSIONAL EXPERIENCE", "SlidesAI.io", "Fullstack Engineer", "drip campaigns", "9AI.in", "PROJECTS", "Agent Comics", "MCP server", "Email Classifier", "TECHNICAL SKILLS", "EDUCATION", "KIIT University"]
for phrase in required:
    assert phrase in text, f"Missing resume text: {phrase}"
positions = [text.index(heading) for heading in ["PROFESSIONAL EXPERIENCE", "PROJECTS", "TECHNICAL SKILLS", "EDUCATION"]]
assert positions == sorted(positions), "Section extraction order changed"
assert "Open Graph Generator" not in text
print(f"Created {out}; pages={len(reader.pages)}; links={len(reader.pages[0].get('/Annots', []))}; text order verified")
