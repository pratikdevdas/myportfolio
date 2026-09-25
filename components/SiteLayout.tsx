import LinkAnalytics from "./LinkAnalytics";
import { ReactNode } from "react";
import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";
export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="site">
      <LinkAnalytics />
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="site-container">
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
