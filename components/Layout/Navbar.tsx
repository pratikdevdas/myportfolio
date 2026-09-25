import Link from "next/link";
import { useRouter } from "next/router";
import Arrow from "../Arrow";
export default function Navbar() {
  const { pathname } = useRouter();
  return (
    <header className="site-header">
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
          Resume <Arrow />
        </a>
        <Link href="/#contact">Contact</Link>
      </nav>
    </header>
  );
}
