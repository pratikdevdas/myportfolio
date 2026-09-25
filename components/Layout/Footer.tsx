import Arrow from "../Arrow";
const socials = [
  ["GitHub", "https://github.com/pratikdevdas"],
  ["LinkedIn", "https://www.linkedin.com/in/pratikdevdas/"],
  ["YouTube", "https://www.youtube.com/@pratikdevdas"],
  ["X", "https://twitter.com/pratikdevdas"],
];
export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-main">
        <div>
          <h2>Have something in mind?</h2>
          <a className="text-link" href="mailto:dasdev.pratik@gmail.com">
            dasdev.pratik@gmail.com <Arrow />
          </a>
        </div>
        <nav aria-label="Social links">
          {socials.map(([label, url]) => (
            <a key={label} href={url} target="_blank" rel="noopener noreferrer">
              {label} <Arrow />
            </a>
          ))}
        </nav>
      </div>
      <div className="footer-bottom">
        <span>© Pratik Dev Das</span>
        <a href="/resume.pdf" download="Pratik-Dev-Das-Resume.pdf">
          Download resume <Arrow />
        </a>
      </div>
    </footer>
  );
}
