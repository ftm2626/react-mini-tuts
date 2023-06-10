import Index from "./page";
import { render, screen } from "@testing-library/react";

//test(name,fn,timeout:default is 5s)
test("render the page", () => {
  render(<Index />);
  const text = screen.getByTestId("1");
  expect(text).toBeInTheDocument();
});
