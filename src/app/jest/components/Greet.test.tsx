import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

test("greet renders correctly", () => {
  render(<Greet />);
  const text = screen.getByText("Hello"); //this is case sensitive
  // const text = screen.getByText(/hello/); //this is case sensitive
  expect(text).toBeInTheDocument();
});

test("greet renders with name", () => {
  render(<Greet name="jasi" />);
  const text = screen.getByText(/Hello jasi/);
  expect(text).toBeInTheDocument();
});
