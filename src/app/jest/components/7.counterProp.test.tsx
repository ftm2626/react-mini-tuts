import { render, screen } from "../test-utils";
import CounterProp from "./7.counterProp";
import user from "@testing-library/user-event"

describe("counter prop", () => {
  test("renders correctly", () => {
    render(<CounterProp count={0} />);
    const textElement = screen.getByText("Counter Props");
    expect(textElement).toBeInTheDocument();
  });
  test("handlers are called", async () => {
    user.setup()
    const increment = jest.fn();
    const decrement = jest.fn();
    render(
      <CounterProp
        count={0}
        handleDecrement={decrement}
        handleIncrement={increment}
      />
    );
    const incrementBtn = screen.getByRole("button", {
      name: "increment",
    });
    const decrementBtn = screen.getByRole("button", {
      name: "decrement",
    });
    await user.click(incrementBtn)
    await user.click(decrementBtn);
    expect(increment).toHaveBeenCalledTimes(1)
    expect(decrement).toHaveBeenCalledTimes(1);
  });
});
