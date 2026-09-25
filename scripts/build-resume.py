from pathlib import Path
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from pypdf import PdfReader

out=Path(__file__).resolve().parents[1]/'public'/'resume.pdf'
styles={
 'name':ParagraphStyle('name',fontName='Helvetica-Bold',fontSize=24,leading=29,textColor=HexColor('#173d30'),spaceAfter=4),
 'role':ParagraphStyle('role',fontName='Helvetica',fontSize=11,leading=15,spaceAfter=8),
 'contact':ParagraphStyle('contact',fontName='Helvetica',fontSize=9,leading=14,spaceAfter=9),
 'section':ParagraphStyle('section',fontName='Helvetica-Bold',fontSize=10,leading=13,textColor=HexColor('#173d30'),spaceBefore=10,spaceAfter=5),
 'title':ParagraphStyle('title',fontName='Helvetica-Bold',fontSize=10,leading=14,spaceAfter=3),
 'body':ParagraphStyle('body',fontName='Helvetica',fontSize=9.3,leading=12.5,spaceAfter=4),
 'bullet':ParagraphStyle('bullet',fontName='Helvetica',fontSize=9.3,leading=12.5,spaceAfter=4,leftIndent=9,firstLineIndent=-9),
 'meta':ParagraphStyle('meta',fontName='Helvetica',fontSize=9,leading=13,textColor=HexColor('#4f5e57'),spaceAfter=4)
}
flow=[]
def p(txt,style='body'):flow.append(Paragraph(txt,styles[style]))
def link(url,label):return f'<a href="{url}" color="#245c43">{label}</a>'
p('Pratik Dev Das','name')
p('Fullstack Engineer | AI Products &amp; Creative Technology','role')
p(link('mailto:dasdev.pratik@gmail.com','dasdev.pratik@gmail.com')+' | +91 7979901261<br/>'+link('https://www.pratikdevdas.com','pratikdevdas.com')+' | '+link('https://github.com/pratikdevdas','github.com/pratikdevdas')+' | '+link('https://www.linkedin.com/in/pratikdevdas/','LinkedIn'),'contact')
flow.append(HRFlowable(width='100%',thickness=.6,color=HexColor('#b9c8bf')))
p('EXPERIENCE','section')
p('SlidesAI.io | Fullstack Engineer','title')
p('June 2024 - Present','meta')
p('- Contributed extensively to the agentic chat experience for creating presentations and implemented the credit system.','bullet')
p('- Launched an AI-powered PowerPoint add-in that creates presentations from topics, scripts and websites; ranked second among AI-powered add-ins in Microsoft Marketplace within two weeks.','bullet')
p('- Evaluated workflows across 2M+ presentations using prompt iteration and Promptfoo, improving positive user feedback to 18-20% over two months.','bullet')
p('- Rebuilt request handling with Cloudflare Queues, Durable Objects and WebSockets, reducing server overhead by 50% and delivering real-time status updates.','bullet')
p('- Built Interactico for live Google Meet polls and quizzes (13K+ downloads), including billing, analytics and feedback flows. Delivered user-driven features and drip campaigns for a Google Slides add-on with 15M+ downloads.','bullet')
p('- Built a WordPress, GraphQL and Next.js CMS with Cloudflare KV caching, cutting build time for approximately 170 blog pages from 17 to 3 minutes. Shipped production features and fixes within Linear-managed sprints.','bullet')
flow.append(Spacer(1,4))
p('9AI.in | Frontend Engineer Intern','title')
p('March 2024 - May 2024','meta')
p('Built and shipped the frontend architecture and core interface for an AI-powered video lip-sync application using React and TanStack Query.')
p('SELECTED PROJECTS','section')
p('Agent Comics / Comic Studio | '+link('https://agentcomics.com','Website')+' | '+link('https://apps.apple.com/us/app/comic-studio-ai-comic-maker/id6799505824','App Store'),'title')
p('Created an AI comic-making product for iPhone and iPad with guided story planning, character references, full-page artwork generation and downloadable pages.')
flow.append(Spacer(1,4))
p('Garden Home | '+link('https://garden-home.pratikdevdas.com','garden-home.pratikdevdas.com'),'title')
p('Created a residential visualization in Blender and Unreal Engine, with 4K Cycles stills, a 90-second cinematic film and a continuous walkthrough.')
flow.append(Spacer(1,4))
p('Email Classifier | '+link('https://www.pratikdevdas.com/projects/emailClassify','Project overview'),'title')
p('Built Gmail categorization using OAuth, GPT-4o mini and LangChain prompt chaining, with LangSmith observability and a Figma-designed Tailwind interface.')
p('SKILLS &amp; TOOLS','section')
p('<b>Development:</b> JavaScript, TypeScript, React, Redux, TanStack Start, React Query, Next.js, Remix, Radix UI, Tailwind, GraphQL, Node.js, Express, PostgreSQL, OAuth, Jest, Cypress<br/><b>AI &amp; Cloud:</b> LangChain, LangSmith, Promptfoo; Cloudflare Workers, KV, Queues, Workers AI, Durable Objects, Observability, AI Gateway, Workflows, Agents; WebSockets, Docker<br/><b>Tools:</b> Blender, Unreal Engine, Figma, Cursor, Linear, Notion, Claude')
p('EDUCATION','section')
p('<b>B.Sc. Computer Science</b> | KIIT University<br/>August 2021 - August 2024')
doc=SimpleDocTemplate(str(out),pagesize=A4,rightMargin=42,leftMargin=42,topMargin=35,bottomMargin=32,title='Pratik Dev Das - Resume',author='Pratik Dev Das')
doc.build(flow)
r=PdfReader(out)
assert len(r.pages)==1, f'Unexpected pages: {len(r.pages)}'
assert all(s in r.pages[0].extract_text() for s in ['Agent Comics','Garden Home','SlidesAI','KIIT'])
print(f'Created {out}; pages={len(r.pages)}; links={len(r.pages[0].get("/Annots", []))}')
