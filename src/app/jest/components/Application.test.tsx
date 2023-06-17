import { render, screen } from "@testing-library/react";
import { Application } from "./Application";

describe("application test", () => {
  test("text input test", () => {
    render(<Application />);

    const pageHeading = screen.getByRole("heading", {
      name: "Job application form",
    });
    // expect(pageHeading).toBeInTheDocument();

    const pageSection = screen.getByRole("heading", {
      level: 2,
    });
    // expect(pageSection).toBeInTheDocument();

    // check input type text element
    // const textInput = screen.getByRole("textbox"); // only if we have 1 textbox in file
    const textInput = screen.getByRole("textbox", { name: "Name" });
    // expect(textInput).toBeInTheDocument();

    const nameElement2 = screen.getByLabelText('Name',{
      selector:'input' //this only selects the label name for input type
    })

    // check text area
    const bioElement = screen.getByRole("textbox", {
      name: "Bio",
    });
    // expect(bioElement).toBeInTheDocument();

    //check select element
    const jobLocationElement = screen.getByRole("combobox");
    // expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByLabelText('I agree to the terms and conditions')

    //check input type radio element
    const checkbox = screen.getByRole("checkbox");
    // expect(checkbox).toBeInTheDocument();

    //check button element
    const submitButton = screen.getByRole("button");
    expect(submitButton).toBeInTheDocument();
  });
});
