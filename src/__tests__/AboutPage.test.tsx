import React from "react";
import { render, screen } from "@testing-library/react";
import About from "../pages/About";
import "@testing-library/jest-dom";

describe("AboutPage", () => {
  it("should render the AboutPage component", () => {
    render(<About />);
    const headingElement = screen.getAllByRole("heading", {
      name: /What is SoulPad?/i,
    });
    expect(headingElement[0]).toBeInTheDocument();
  });

  it("should display the correct content", () => {
    render(<About />);
    const contentElement = screen.getByText(/The most popular/i);
    expect(contentElement).toBeInTheDocument();
  });
});
