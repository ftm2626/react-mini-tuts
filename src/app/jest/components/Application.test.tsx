import { render, screen } from "@testing-library/react";
import { Application } from "./Application";

describe("application test", () => {
  test("text input test", () => {
    render(<Application />);
    // check input type text element
    const textInput = screen.getByRole("textbox");
    expect(textInput).toBeInTheDocument();

    //check select element
    const jobLocationElement = screen.getByRole("combobox")
    expect(jobLocationElement).toBeInTheDocument() 

    //check input type radio element
    const checkbox = screen.getByRole("checkbox")
    expect(checkbox).toBeInTheDocument()

    //check button element
    const submitButton = screen.getByRole("button")
    expect(submitButton).toBeInTheDocument()
  });
});
