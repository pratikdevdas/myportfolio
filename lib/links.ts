const portfolioHosts = new Set(["pratikdevdas.com", "www.pratikdevdas.com"]);
const subject = "Let's work together";
const body = [
  "Hi Pratik,",
  "",
  "I came across your portfolio and would like to discuss:",
  "",
  "[Briefly describe your project or opportunity]",
  "",
  "Thanks,",
  "[Your name]",
].join("\r\n");
export const contactHref = `mailto:dasdev.pratik@gmail.com?subject=${encodeURIComponent(
  subject
)}&body=${encodeURIComponent(body)}`;

export function trackedUrl(href: string, content: string): string {
  try {
    const url = new URL(href);
    if (!/^https?:$/.test(url.protocol) || portfolioHosts.has(url.hostname))
      return href;
    url.searchParams.set("utm_source", "pratikdevdas.com");
    url.searchParams.set("utm_medium", "referral");
    url.searchParams.set("utm_campaign", "portfolio");
    url.searchParams.set("utm_content", content);
    return url.toString();
  } catch {
    return href;
  }
}

export interface LinkEvent {
  name: string;
  metadata: Record<string, string>;
}
export function linkEvent(
  href: string,
  current: string,
  placement: string,
  project?: string
): LinkEvent | null {
  if (href === "#main-content") return null;
  try {
    const url = new URL(href, current);
    if (url.protocol === "mailto:")
      return { name: "contact_click", metadata: { placement } };
    if (!/^https?:$/.test(url.protocol)) return null;
    const internal =
      url.host === new URL(current).host || portfolioHosts.has(url.hostname);
    const metadata: Record<string, string> = { placement };
    if (project) metadata.project = project;
    // Omit query strings, fragments, email addresses and draft content from events.
    metadata.destination = internal
      ? url.pathname
      : url.hostname + url.pathname;
    if (!internal) return { name: "outbound_click", metadata };
    if (url.pathname === "/resume.pdf")
      return { name: "resume_open", metadata };
    if (/^\/projects\/[^/]+\/?$/.test(url.pathname)) {
      metadata.project = url.pathname.split("/")[2];
      return { name: "project_open", metadata };
    }
    return { name: "navigation_click", metadata };
  } catch {
    return null;
  }
}

type EventArgs = [string, Record<string, string>];
type EventSender = ((...args: EventArgs) => void) & { q?: EventArgs[] };
export interface AnalyticsRuntime {
  location: { hostname: string };
  sa_event?: EventSender;
}
declare global {
  interface Window {
    sa_event?: EventSender;
  }
}
export function sendEvent(event: LinkEvent, runtime: AnalyticsRuntime): void {
  // Local and Vercel previews should not pollute production click counts.
  if (!portfolioHosts.has(runtime.location.hostname)) return;
  try {
    if (!runtime.sa_event) {
      const queued: EventSender = (...args) => {
        const queue = queued.q || (queued.q = []);
        if (queue.length < 100) queue.push(args);
      };
      runtime.sa_event = queued;
    }
    runtime.sa_event(event.name, event.metadata);
  } catch {
    /* Analytics must never interrupt email or link navigation. */
  }
}
