import { renderHook } from "../test-utils";
import { useCounter } from "./6.useCounter";

describe("useCounter", () => {
  test("should render initial count", () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
  });

  test("should accept and render count", () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        initialCount: 10,
      },
    });
    expect(result.current.count).toBe(10);
  });
});
