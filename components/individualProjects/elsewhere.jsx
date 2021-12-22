import React from "react";

export default function Elsewhere() {
  return (
    <>
      <p
        style={{
          backgroundColor: "rgb(53, 52, 52)",
          color: "white",
          fontSize: "0.9em",
        }}
      >
        ***note: currently working on an API key issue***
      </p>
      <p>
        API-driven geoguessing game app. primarily mob programmed in a one-week
        remote sprint, using:
      </p>
      <ul>
        <li>React + Node</li>
        <li>Google Maps Street View Static API</li>
        <li>GeoDataSource API</li>
      </ul>
      <p>
        My role: I pitched the idea; researched APIs; and developed a
        state-management framework for the user-controls to zoom and rotate
        Google-sourced images.
      </p>
    </>
  );
}
