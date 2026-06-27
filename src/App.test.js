import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders character sheet with tabs", () => {
  render(<App />);
  expect(screen.getByText(/character sheet/i)).toBeInTheDocument();
  expect(screen.getByRole("tab", { name: /stats/i })).toBeInTheDocument();
  expect(screen.getByRole("tab", { name: /spells/i })).toBeInTheDocument();
});
