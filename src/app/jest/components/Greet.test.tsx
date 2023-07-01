import { render, screen } from "../test-utils";
import Greet from "./Greet";

describe("Greet group test ", () => {
  test("renders correctly", () => {
    render(<Greet />);
    const text = screen.getByText("Hello"); //this is case sensitive
    // const text = screen.getByText(/hello/); //this is case sensitive
    expect(text).toBeInTheDocument();
  });

  test("renders with name", () => {
    render(<Greet name="jasi" />);
    const text = screen.getByText(/Hello jasi/);
    expect(text).toBeInTheDocument();
  });
});
