import test from "node:test";
import assert from "node:assert/strict";
import {
  contactHref,
  trackedUrl,
  linkEvent,
  sendEvent,
  AnalyticsRuntime,
} from "../lib/links";

test("contact draft has an encoded subject and multiline body", () => {
  const url = new URL(contactHref);
  assert.equal(url.protocol, "mailto:");
  assert.equal(url.pathname, "dasdev.pratik@gmail.com");
  assert.equal(url.searchParams.get("subject"), "Let's work together");
  assert.match(url.searchParams.get("body") || "", /Hi Pratik,\r\n\r\n/);
  assert.match(url.searchParams.get("body") || "", /\[Your name\]/);
});

test("outbound attribution preserves destination queries and fragments without duplicating UTMs", () => {
  const result = trackedUrl(
    "https://www.youtube.com/watch?v=film&utm_source=old#t=30",
    "garden-home_walkthrough"
  );
  const url = new URL(result);
  assert.equal(url.searchParams.get("v"), "film");
  assert.equal(url.hash, "#t=30");
  assert.equal(url.searchParams.get("utm_source"), "pratikdevdas.com");
  assert.equal(url.searchParams.get("utm_medium"), "referral");
  assert.equal(url.searchParams.get("utm_campaign"), "portfolio");
  assert.equal(url.searchParams.get("utm_content"), "garden-home_walkthrough");
  assert.equal(trackedUrl(result, "garden-home_walkthrough"), result);
  assert.equal(url.searchParams.getAll("utm_source").length, 1);
});

test("internal, email, fragment and unsupported links are not decorated", () => {
  for (const href of [
    "/projects/agent-comics",
    "/resume.pdf",
    "#projects",
    contactHref,
    "https://www.pratikdevdas.com/blog",
    "https://pratikdevdas.com/",
    "tel:+917979901261",
    "javascript:alert(1)",
  ])
    assert.equal(trackedUrl(href, "test"), href);
});

test("events distinguish project, outbound, contact and resume clicks without recording query data", () => {
  const page = "https://www.pratikdevdas.com/projects/garden-home";
  assert.equal(
    linkEvent("/projects/agent-comics", page, "home")?.name,
    "project_open"
  );
  assert.equal(linkEvent("/resume.pdf", page, "nav")?.name, "resume_open");
  const contact = linkEvent(contactHref, page, "footer");
  assert.deepEqual(contact, {
    name: "contact_click",
    metadata: { placement: "footer" },
  });
  assert.deepEqual(
    linkEvent(
      "https://garden-home.stuticodes.chatgpt.site/?private=secret",
      page,
      "project",
      "garden-home"
    ),
    {
      name: "outbound_click",
      metadata: {
        placement: "project",
        project: "garden-home",
        destination: "garden-home.stuticodes.chatgpt.site/",
      },
    }
  );
  assert.equal(linkEvent("#main-content", page, "nav"), null);
});

test("analytics queues early production clicks and remains safe when unavailable", () => {
  const event = { name: "contact_click", metadata: { placement: "nav" } };
  const runtime: AnalyticsRuntime = {
    location: { hostname: "www.pratikdevdas.com" },
  };
  sendEvent(event, runtime);
  assert.deepEqual(runtime.sa_event?.q, [[event.name, event.metadata]]);
  const local: AnalyticsRuntime = { location: { hostname: "localhost" } };
  sendEvent(event, local);
  assert.equal(local.sa_event, undefined);
  runtime.sa_event = () => {
    throw new Error("blocked");
  };
  assert.doesNotThrow(() => sendEvent(event, runtime));
});
