import React from "react";

export default function Navigation({ value, onChange }) {
  return (
    <>
      <nav>
        <div>
          <label>
            Navigation:
            <select value={value} onChange={onChange}>
              <option value="home">home</option>
              <option value="projects">projects</option>
              <option value="about">about</option>
              <option value="contact">contact</option>
            </select>
          </label>
        </div>
      </nav>
    </>
  );
}
