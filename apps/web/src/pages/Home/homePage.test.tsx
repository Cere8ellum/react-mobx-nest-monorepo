import { afterEach, it, expect } from "@jest/globals";
import { cleanup, render, screen } from "@testing-library/react";
import Home from "./home";
import React from "react";
// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it("Home page shows the text", () => {
  render(<Home />);
  expect(screen.getByText<HTMLHeadingElement>("Home page")).toBeInTheDocument();
});
