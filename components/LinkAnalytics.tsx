import { useEffect } from "react";
import { linkEvent, sendEvent } from "../lib/links";

export default function LinkAnalytics() {
  useEffect(() => {
    function record(event: MouseEvent) {
      if (
        (event.type === "click" && event.button !== 0) ||
        (event.type === "auxclick" && event.button !== 1)
      )
        return;
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest<HTMLAnchorElement>(".site a[href]");
      if (!anchor) return;
      const placement =
        anchor.closest<HTMLElement>("[data-track-placement]")?.dataset
          .trackPlacement || "content";
      const project =
        anchor.closest<HTMLElement>("[data-project]")?.dataset.project;
      const data = linkEvent(
        anchor.getAttribute("href") || "",
        window.location.href,
        placement,
        project
      );
      if (data) sendEvent(data, window);
    }
    document.addEventListener("click", record, true);
    document.addEventListener("auxclick", record, true);
    return () => {
      document.removeEventListener("click", record, true);
      document.removeEventListener("auxclick", record, true);
    };
  }, []);
  return null;
}
