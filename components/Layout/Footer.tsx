import { contactHref, trackedUrl } from "../../lib/links";
const socials = [
  ["GitHub", "https://github.com/pratikdevdas"],
  ["LinkedIn", "https://www.linkedin.com/in/pratikdevdas/"],
  ["YouTube", "https://www.youtube.com/@pratikdevdas"],
  ["X", "https://twitter.com/pratikdevdas"],
];
export default function Footer() {
  return (
    <footer className="site-footer" id="contact" data-track-placement="footer">
      <div className="footer-main">
        <a className="contact-email" href={contactHref}>
          dasdev.pratik@gmail.com
        </a>
        <nav aria-label="Social links">
          {socials.map(([label, url]) => (
            <a
              key={label}
              href={trackedUrl(url, `footer_${label.toLowerCase()}`)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
      <div className="footer-bottom">
        <span>© Pratik Dev Das</span>
      </div>
    </footer>
  );
}
