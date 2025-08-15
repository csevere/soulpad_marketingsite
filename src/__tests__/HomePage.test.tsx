import React from "react";
import { screen, render, cleanup } from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";

afterEach(cleanup);

describe("HomePage", () => {
  it('should render the title "SoulPad"', () => {
    render(<Home />);
    const titleElement = screen.getByRole("heading", { name: "SoulPad" });
    expect(titleElement).toBeInTheDocument();
  });
});
