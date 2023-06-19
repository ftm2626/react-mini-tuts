import { render, screen } from "@testing-library/react";
import { Skills } from "./skills";

describe("Skills", () => {
  const skills = ["html", "css", "js"];
  test("render correctly", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("renders a list of skills", () => {
    render(<Skills skills={skills} />);
    const listItemElements = screen.getAllByRole("listitem");
    expect(listItemElements).toHaveLength(skills.length);
  });

  test("renders login button", () => {
    render(<Skills skills={skills} />);
    const buttonElement = screen.getByRole("button", { name: "Login" });
    expect(buttonElement).toBeInTheDocument();
  });

  test("start learning button is not rendered", () => {
    render(<Skills skills={skills} />);
    const buttonElement = screen.queryByRole("button", {
      name: "Start learning",
    });
    expect(buttonElement).not.toBeInTheDocument();
  });

  test("start learning button will eventually display", async () => {
    render(<Skills skills={skills} />);
    const buttonElement = await screen.findByRole(
      "button",
      { name: "Start learning" },
      { timeout: 2000 }
    );
    expect(buttonElement).toBeInTheDocument();
  });
});
