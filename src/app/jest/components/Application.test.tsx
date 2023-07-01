import { render, screen } from "../test-utils";
import { Application } from "./Application";

describe("application test", () => {
  test("text input test", () => {
    render(<Application />);

    const pageHeading = screen.getByRole("heading", {
      name: "Job application form",
    });
    const pageSection = screen.getByRole("heading", {
      level: 2,
    });

    const paraghraphElement = screen.getByText("All fields are mandatory");

    // check input type text element
    // const textInput = screen.getByRole("textbox"); // only if we have 1 textbox in file
    const textInput = screen.getByRole("textbox", { name: "Name" });
    const nameElement2 = screen.getByLabelText("Name", {
      selector: "input", //this only selects the label name for input type
    });
    const nameElement3 = screen.getByPlaceholderText("Fullname");
    const nameElement4 = screen.getByDisplayValue("Vishwas");
    const nameElement5 = screen.getAllByText((content) =>
      content.startsWith("Job")
    );

    const closeElement = screen.getByTitle("close");

    const testIdElement = screen.getByTestId("custom-element");

    //getByAltText only for n img, input, area, custome html
    const imageElement = screen.getByAltText("A person with a laptop", {
      exact: false,
    });

    // check text area
    const bioElement = screen.getByRole("textbox", {
      name: "Bio",
    });

    //check select element
    const jobLocationElement = screen.getByRole("combobox");
    const termsElement = screen.getByLabelText(
      "I agree to the terms and conditions"
    );

    //check input type radio element
    const checkbox = screen.getByRole("checkbox");

    //check button element
    const submitButton = screen.getByRole("button");
    expect(submitButton).toBeInTheDocument();
  });
});
