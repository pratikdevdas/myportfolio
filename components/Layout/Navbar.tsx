import { contactHref } from "../../lib/links";
import Link from "next/link";
import { useRouter } from "next/router";
export default function Navbar() {
  const { pathname } = useRouter();
  return (
    <header className="site-header" data-track-placement="navigation">
      <Link className="wordmark" href="/">
        Pratik Dev Das<span>.</span>
      </Link>
      <nav aria-label="Main navigation">
        <Link
          href="/projects"
          aria-current={pathname.startsWith("/projects") ? "page" : undefined}
        >
          Work
        </Link>
        <Link
          href="/blog"
          aria-current={pathname.startsWith("/blog") ? "page" : undefined}
        >
          Blog
        </Link>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          Resume
        </a>
        <a href={contactHref}>Contact</a>
      </nav>
    </header>
  );
}
