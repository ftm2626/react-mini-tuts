import { render, screen, getRoles } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Counter } from "./Counter";

describe("Counter", () => {
  test("renders correctly", () => {
    render(<Counter />);
    const counterElement = screen.getByRole("heading");
    expect(counterElement).toBeInTheDocument();
    const increaseButton = screen.getByRole("button", {
      name: /increment/i,
    });
    expect(increaseButton).toBeInTheDocument();
  });

  test("renders a count of 0", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0");
  });

  test("add 1 to increment on 1 click", async () => {
    user.setup();
    render(<Counter />);
    const increaseButton = screen.getByRole("button", {
      name: /increment/i,
    });
    await user.click(increaseButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("1");
  });

  test("add 2 to increment on 2 clicks", async () => {
    user.setup();
    render(<Counter />);
    const increaseButton = screen.getByRole("button", {
      name: /increment/i,
    });
    await user.click(increaseButton);
    await user.click(increaseButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("2");
  });

  test("renders a count of input", async () => {
    user.setup();
    render(<Counter />);
    const inputElement = screen.getByRole("spinbutton");
    const countElement = screen.getByRole("heading");
    const setBtn = screen.getByRole("button", { name: /set/i });

    await user.type(inputElement, "10");
    expect(inputElement).toHaveValue(10);
    await user.click(setBtn);
    expect(countElement).toHaveTextContent("10");
  });

  test("elements are focused in the right order", async () => {
    user.setup();
    render(<Counter />);
    const increaseButton = screen.getByRole("button", {
      name: /increment/i,
    });
    const inputElement = screen.getByRole("spinbutton");
    const setBtn = screen.getByRole("button", { name: /set/i });
    await user.tab();
    expect(increaseButton).toHaveFocus();
    await user.tab();
    expect(inputElement).toHaveFocus();
    await user.tab();
    expect(setBtn).toHaveFocus();
  });
});
