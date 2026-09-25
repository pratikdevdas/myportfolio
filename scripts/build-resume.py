from pathlib import Path
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable, Table, TableStyle
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.colors import HexColor
import reportlab
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.pagesizes import A4
from pypdf import PdfReader

out=Path(__file__).resolve().parents[1]/'public'/'resume.pdf'
# Embed ReportLab's bundled Bitstream Vera fonts for consistent PDF rendering.
font_dir = Path(reportlab.__file__).parent / 'fonts'
pdfmetrics.registerFont(TTFont('ResumeSans', str(font_dir / 'Vera.ttf')))
pdfmetrics.registerFont(TTFont('ResumeSans-Bold', str(font_dir / 'VeraBd.ttf')))
pdfmetrics.registerFontFamily('ResumeSans', normal='ResumeSans', bold='ResumeSans-Bold')
styles={
 'name':ParagraphStyle('name',fontName='ResumeSans-Bold',fontSize=24,leading=29,textColor=HexColor('#173d30'),spaceAfter=4),
 'role':ParagraphStyle('role',fontName='ResumeSans',fontSize=11,leading=15,spaceAfter=8),
 'contact':ParagraphStyle('contact',fontName='ResumeSans',fontSize=9,leading=14,spaceAfter=9),
 'section':ParagraphStyle('section',fontName='ResumeSans-Bold',fontSize=10,leading=13,textColor=HexColor('#173d30'),spaceBefore=9,spaceAfter=5),
 'title':ParagraphStyle('title',fontName='ResumeSans-Bold',fontSize=10,leading=14,spaceAfter=3),
 'body':ParagraphStyle('body',fontName='ResumeSans',fontSize=10,leading=13.4,spaceAfter=4),
 'bullet':ParagraphStyle('bullet',fontName='ResumeSans',fontSize=10,leading=13.4,spaceAfter=4,leftIndent=9,firstLineIndent=-9),
 'date':ParagraphStyle('date',fontName='ResumeSans',fontSize=9,leading=14,alignment=2,textColor=HexColor('#4f5e57')),
 'meta':ParagraphStyle('meta',fontName='ResumeSans',fontSize=9,leading=13,textColor=HexColor('#4f5e57'),spaceAfter=4)
}
flow=[]
def p(txt,style='body'):flow.append(Paragraph(txt,styles[style]))
def employment(title, dates):
 row = Table([[Paragraph(title, styles['title']), Paragraph(dates, styles['date'])]], colWidths=[300, 199.2756], hAlign="LEFT")
 row.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('TOPPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 6)]))
 flow.append(row)
def link(url,label):return f'<a href="{url}" color="#245c43">{label}</a>'
p('Pratik Dev Das','name')
p('Fullstack Engineer | AI Products &amp; Creative Technology','role')
p(link('mailto:dasdev.pratik@gmail.com','dasdev.pratik@gmail.com')+' | +91 7979901261<br/>'+link('https://www.pratikdevdas.com','pratikdevdas.com')+' | '+link('https://github.com/pratikdevdas','github.com/pratikdevdas')+' | '+link('https://www.linkedin.com/in/pratikdevdas/','LinkedIn'),'contact')
flow.append(HRFlowable(width='100%',thickness=.6,color=HexColor('#b9c8bf')))
p('EXPERIENCE','section')
employment('SlidesAI.io | Fullstack Engineer', 'June 2024 - Present')
p('- Contributed extensively to the agentic chat experience for creating presentations and implemented the credit system.','bullet')
p('- Launched an AI-powered PowerPoint add-in that creates presentations from topics, scripts and websites; ranked second among AI-powered add-ins in Microsoft Marketplace within two weeks.','bullet')
p('- Evaluated workflows across 2M+ presentations using prompt iteration and Promptfoo, improving positive user feedback to 18-20% over two months.','bullet')
p('- Rebuilt request handling with Cloudflare Queues, Durable Objects and WebSockets, reducing server overhead by 50% and delivering real-time status updates.','bullet')
p('- Implemented analytics-driven drip campaigns and user-requested features for a Google Slides add-on with 15M+ downloads.','bullet')
p('- Built Interactico for live Google Meet polls and quizzes (13K+ downloads), with subscription billing, analytics and user feedback flows.','bullet')
p('- Built a WordPress/GraphQL/Next.js CMS with Cloudflare KV, cutting build time for 170 blog pages from 17 to 3 minutes. Shipped features and production fixes in Linear-managed sprints.','bullet')
flow.append(Spacer(1,4))
employment('9AI.in | Frontend Engineer Intern', 'March 2024 - May 2024')
p('Built and shipped the frontend architecture and core interface for an AI-powered video lip-sync application using React and TanStack Query.')
p('SELECTED PROJECTS','section')
p('Agent Comics / Comic Studio | '+link('https://agentcomics.com','Website')+' | '+link('https://apps.apple.com/us/app/comic-studio-ai-comic-maker/id6799505824','App Store'),'title')
p('Created an AI comic-making product for iPhone and iPad with guided story planning, character references, full-page artwork generation and downloadable pages.')
flow.append(Spacer(1,4))
p('Garden Home | '+link('https://garden-home.pratikdevdas.com','garden-home.pratikdevdas.com'),'title')
p('Created an AI-driven architectural visualization project exploring residential interiors, materials and lighting through still images and walkthroughs.')
flow.append(Spacer(1,4))
p('Email Classifier | '+link('https://www.pratikdevdas.com/projects/emailClassify','Project overview'),'title')
p('Built Gmail categorization using OAuth, GPT-4o mini and LangChain prompt chaining, with LangSmith observability and a Figma-designed Tailwind interface.')
p('SKILLS &amp; TOOLS','section')
p('<b>Development:</b> JavaScript, TypeScript, React, Redux, TanStack Start, React Query, Next.js, Remix, Radix UI, Tailwind, GraphQL, Node.js, Express, PostgreSQL, OAuth, Jest, Cypress<br/><b>AI &amp; Cloud:</b> LangChain, LangSmith, Promptfoo; Cloudflare Workers, KV, Queues, Workers AI, Durable Objects, Observability, AI Gateway, Workflows, Agents; WebSockets, Docker<br/><b>Tools:</b> Figma, Cursor, Linear, Notion, Claude')
p('EDUCATION','section')
p('<b>B.Sc. Computer Science</b> | KIIT University<br/>August 2021 - August 2024')
doc=SimpleDocTemplate(str(out),pagesize=A4,rightMargin=42,leftMargin=42,topMargin=35,bottomMargin=32,title='Pratik Dev Das - Resume',author='Pratik Dev Das')
doc.build(flow)
r=PdfReader(out)
assert len(r.pages)==1, f'Unexpected pages: {len(r.pages)}'
assert all(s in r.pages[0].extract_text() for s in ['Agent Comics','Garden Home','SlidesAI','KIIT'])
print(f'Created {out}; pages={len(r.pages)}; links={len(r.pages[0].get("/Annots", []))}')
