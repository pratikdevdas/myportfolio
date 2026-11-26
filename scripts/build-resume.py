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
p('<b>Full Stack / Backend Engineer</b> | TypeScript, Node.js, PostgreSQL, Cloudflare Workers','role')
p(link('mailto:dasdev.pratik@gmail.com','dasdev.pratik@gmail.com')+' | +91 7979901261<br/>'+link('https://www.pratikdevdas.com','pratikdevdas.com')+' | '+link('https://github.com/pratikdevdas','github.com/pratikdevdas')+' | '+link('https://www.linkedin.com/in/pratikdevdas/','linkedin.com/in/pratikdevdas'),'contact')
p('Full stack and backend engineer with 2+ years shipping production products end to end: APIs, queues, real-time services, billing and React frontends. I build AI agents on that backend, talk to the users and get it adopted.','body')
section('PROJECTS')
p('Comic Studio / Agent Comics (solo founder) | '+link('https://agentcomics.com','Website')+' | '+link('https://apps.apple.com/us/app/comic-studio-ai-comic-maker/id6799505824','App Store'),'title')
p('Consumer AI app for web and iOS','job-role')
p("- Built an AI agent that takes a story idea through storyboarding, character sheets and finished pages, pausing for the user's review. Live 2+ months, about 5 sign-ups a day (around 150 a month).",'bullet')
p('- Designed the backend on Cloudflare Workers: each comic is its own Durable Object with its story, memory and characters, Queues and Workflows run long jobs, and the AI SDK streams progress over WebSockets. Every change the agent makes is saved as a version that can be rolled back.','bullet')
p('- Built the Agent Comics MCP server (12 tools, OAuth 2.1) so people can make comics from inside Claude and Codex. The ChatGPT app is in review.','bullet')
p('- Early comics looked like AI slop, so I built a hill-climbing harness: a swarm of agents tried prompt variants against ChatGPT-made comics and kept what won. Style references won, so every comic now starts from one.','bullet')
p("- Ran 8 user interviews. They led to an editing feature (in progress) and a second product, comicstudio.store, for personalised printed comics on Lulu's print API.",'bullet')
section('PROFESSIONAL EXPERIENCE')
employment('SlidesAI.io', 'Full Stack Engineer', 'June 2024 - Present')
p('- Rebuilt presentation generation on Cloudflare Queues, Durable Objects and WebSockets. Agentic generation takes a while, so users now watch their deck build live instead of staring at a spinner.','bullet')
p('- Built the credit system. When users run out of credits, the agent tells them in the chat and nudges them to buy more, which lifted payments by 22%.','bullet')
p('- Launched an AI PowerPoint add-in that makes presentations from a topic, script or website. It hit #2 among AI add-ins on the Microsoft Marketplace within two weeks.','bullet')
p('- Set up evals for LLM workflows across 2M+ presentations with Promptfoo, LangSmith, Latitude and Laminar, then tuned prompts to raise positive user feedback within two months.','bullet')
p('- Talked directly with users of a Google Slides add-on with 15M+ downloads, then shipped the features they asked for and ran drip campaigns based on analytics.','bullet')
p('- Built Interactico, a live polls and quizzes tool for Google Meet with 54K+ downloads, including subscription billing and analytics.','bullet')
p('- Built a WordPress, GraphQL and Next.js CMS on Cloudflare KV that cut build time for 170 blog pages from 17 to 3 minutes.','bullet')
flow.append(Spacer(1,4))
employment('9AI.in', 'Frontend Engineer Intern', 'March 2024 - May 2024')
p('- Built the React and TanStack Query frontend for an AI lip-sync app.', 'bullet')
section('TECHNICAL SKILLS')
p('<b>Backend:</b> TypeScript, JavaScript, Node.js, Express, REST APIs, GraphQL, PostgreSQL, OAuth, WebSockets, queues and background jobs<br/><b>Frontend &amp; Testing:</b> React, Next.js, TanStack Query, Redux, Tailwind, Jest, Cypress<br/><b>Cloud:</b> Cloudflare, Azure, Docker<br/><b>AI &amp; Agents:</b> LLM APIs, agents, MCP servers, evals, AI SDK, LangChain, LangSmith, Promptfoo<br/><b>Tools:</b> PostHog, Claude Code, Cursor, Figma, Linear')
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
required = ["Full Stack / Backend Engineer", "54K+", "PROFESSIONAL EXPERIENCE", "SlidesAI.io", "Full Stack Engineer", "drip campaigns", "9AI.in", "PROJECTS", "Agent Comics", "MCP server", "TECHNICAL SKILLS", "EDUCATION", "KIIT University"]
for phrase in required:
    assert phrase in text, f"Missing resume text: {phrase}"
positions = [text.index(heading) for heading in ["PROJECTS", "PROFESSIONAL EXPERIENCE", "TECHNICAL SKILLS", "EDUCATION"]]
assert positions == sorted(positions), "Section extraction order changed"
for banned in ["Open Graph Generator", "server overhead", "[", "Job-search agent", "tool calling"]:
    assert banned not in text, f"Unwanted resume text: {banned}"
print(f"Created {out}; pages={len(reader.pages)}; links={len(reader.pages[0].get('/Annots', []))}; text order verified")
