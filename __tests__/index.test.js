/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
// necessary to use toBeInTheDocument():
import "@testing-library/jest-dom";
import Intro from "../components/intro.jsx";

jest.mock(
  "next/image",
  () =>
    function Image({ src, alt, height, width }) {
      // eslint-disable-next-line @next/next/no-img-element
      return <img src={src} alt={alt} height={height} width={width} />;
    }
);

describe("Home", () => {
  it("renders the Intro component", async () => {
    render(<Intro />);

    //const loading = await screen.getByText("Loading...");

    const heading = await screen.getByRole("heading", {
      name: "Welcome to my site!",
    });

    const githubLogoImage = await screen.getByRole("img", {
      name: "github logo",
    });

    const twitterLogoImage = await screen.getByRole("img", {
      name: "twitter logo",
    });

    const linkedinLogoImage = await screen.getByRole("img", {
      name: "linkedin logo",
    });

    const resumeButton = await screen.getByRole("button", {
      name: "Resume",
    });

    //expect(loading).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
    expect(githubLogoImage).toBeInTheDocument();
    expect(twitterLogoImage).toBeInTheDocument();
    expect(linkedinLogoImage).toBeInTheDocument();
    expect(resumeButton).toBeInTheDocument();
  });
});

// describe("Projects", () => {
//   it("renders the Projects component", async () => {
//     render(<Intro />);

//     //const loading = await screen.getByText("Loading...");

//     const heading = await screen.getByRole("heading", {
//       name: "Welcome to my site!",
//     });

//     //expect(loading).toBeInTheDocument();
//   });
// });

// describe("About", () => {
//   it("renders the About component", async () => {
//     render(<Intro />);

//     //const loading = await screen.getByText("Loading...");

//     const heading = await screen.getByRole("heading", {
//       name: "Welcome to my site!",
//     });

//     //expect(loading).toBeInTheDocument();
//   });
// });

// describe("Contact", () => {
//   it("renders the Contact component", async () => {
//     render(<Intro />);

//     //const loading = await screen.getByText("Loading...");

//     const heading = await screen.getByRole("heading", {
//       name: "Welcome to my site!",
//     });

//     //expect(loading).toBeInTheDocument();
//   });
// });
