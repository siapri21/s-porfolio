import { render, screen } from "@testing-library/react";
import App from "./App";

beforeEach(() => {
  sessionStorage.clear();
});

test("renders intro brand and enter CTA", () => {
  render(<App />);
  expect(screen.getByText("Siapri.Ouattara")).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: /explorer mon travail/i })
  ).toBeInTheDocument();
});
