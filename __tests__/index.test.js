/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import Index from "../pages/index.jsx";

jest.mock(
  "next/image",
  () =>
    function Image({ src, alt, height, width }) {
      // eslint-disable-next-line @next/next/no-img-element
      return <img src={src} alt={alt} height={height} width={width} />;
    }
);

describe("Home", () => {
  it("renders an introductory heading", () => {
    render(<Index />);

    const heading = screen.getByRole("heading", {
      name: "Welcome to my Site!",
    });

    expect(heading).toBeInTheDocument();
  });
});
