import React from "react";

export default function WebDashboard() {
  return (
    <>
      <p>
        Work-in-progress solo project to create a browser-agnostic
        &apos;homepage app&apos; allowing users to save and manage bookmarks
        from any browser-enabled device, as well as presenting local
        time/date/weather information and a news feed. The UI design philosophy
        is to take subtle cues from a literal vehicle dashboard.
      </p>
      <ul>
        <li>Front-end: React + Nextjs</li>
        <li>Back-end: Node + PostgresSQL</li>
      </ul>
      <p>
        For this project I am utilizing tech such as TypeScript, TailwindCSS and
        Formik for the first time in a proper production build. The Mediastack
        API provides the content for the news feed.
      </p>
    </>
  );
}
