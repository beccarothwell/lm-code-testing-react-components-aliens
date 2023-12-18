import { render, screen } from "@testing-library/react";
import SelectInput from "./SelectInput";
import userEvent from "@testing-library/user-event";

test("Given the required props, When the component is rendered, Then there should be a select element", () => {
  const props = {
    label: "",
    name: "",
    id: "",
    options: [],
    value: "",
    onChange: () => {},
    validate: () => [],
  };
  render(<SelectInput {...props} />);

  const someSelectElement = screen.getByRole("combobox");

  expect(someSelectElement).toBeInTheDocument();
  expect(someSelectElement.tagName).toBe("SELECT");
});

test("Given the required props, When the component is rendered, Then there should be a label element", () => {
  const props = {
    label: "",
    name: "",
    id: "",
    options: [],
    value: "",
    onChange: () => {},
    validate: () => [],
  };
  const { container } = render(<SelectInput {...props} />);

  // eslint-disable-next-line testing-library/no-node-access
  expect(container.firstChild?.nodeName === "LABEL").toBeTruthy();
});

test("Given the required props, When the component is rendered, Then the input element should be within a label element", () => {
  const props = {
    label: "",
    name: "",
    id: "",
    options: [],
    value: "",
    onChange: () => {},
    validate: () => [],
  };
  const { container } = render(<SelectInput {...props} />);

  // eslint-disable-next-line testing-library/no-node-access
  const label = container.firstChild;
  const someSelectElement = screen.getByRole("combobox");
  const containsInput = label?.contains(someSelectElement);

  expect(containsInput).toBeTruthy();
});

test("Given the required props, When the component is rendered, Then the label text should be present", () => {
  const props = {
    label: "What is 2 + 2",
    name: "",
    id: "",
    options: [],
    value: "",
    onChange: () => {},
    validate: () => [],
  };
  render(<SelectInput {...props} />);

  const someLabelText = screen.getByLabelText("What is 2 + 2:");
  expect(someLabelText).toBeInTheDocument();
});

test("Given the required props, When the component is rendered, Then the provided options should be present", () => {
  const props = {
    label: "What is 2 + 2",
    name: "",
    id: "",
    options: [
      {
        value: "a",
        text: "A",
      },
      {
        value: "b",
        text: "B",
      },
    ],
    value: "",
    onChange: () => {},
    validate: () => [],
  };
  render(<SelectInput {...props} />);

  const someOption = screen.getByRole("option", {
    name: "--Please choose an option--",
  });
  const someOptionA = screen.getByRole("option", { name: "A" });
  const someOptionB = screen.getByRole("option", { name: "B" });

  expect(someOption).toBeInTheDocument();
  expect(someOptionA).toBeInTheDocument();
  expect(someOptionB).toBeInTheDocument();
});

test("Given the component is rendered, When the user selects an option, Then the onChange function is called", async () => {
  const user = userEvent.setup();

  const mockOnChange = jest.fn();

  const props = {
    label: "",
    name: "",
    id: "",
    options: [
      {
        value: "a",
        text: "A",
      },
      {
        value: "b",
        text: "B",
      },
    ],
    value: "",
    onChange: mockOnChange,
    validate: () => [],
  };

  render(<SelectInput {...props} />);

  const someSelectElement = screen.getByRole("combobox");

  await user.selectOptions(someSelectElement, ["A"]);

  expect(mockOnChange).toBeCalled();
  expect(
    screen.getByRole("option", { name: "A", selected: true })
  ).toBeInTheDocument();
  expect(
    screen.queryByRole("option", { name: "A", selected: false })
  ).not.toBeInTheDocument();
  expect(
    screen.getByRole("option", { name: "B", selected: false })
  ).toBeInTheDocument();
  expect(
    screen.queryByRole("option", { name: "B", selected: true })
  ).not.toBeInTheDocument();
});

test("Given the required props, When the component is rendered and there are no errors, Then the validate function should be called and no error messages should be present", async () => {
  const mockValidate = jest.fn();
  mockValidate.mockReturnValue([]);

  const props = {
    label: "",
    name: "",
    id: "",
    options: [],
    value: "",
    onChange: () => {},
    validate: mockValidate,
  };

  render(<SelectInput {...props} />);

  const errorMessage1 = screen.queryByText("Incorrect. 2 + 2 = 4.");
  const errorMessage2 = screen.queryByText(
    "There were only two options. How have you selected something else?"
  );

  expect(mockValidate).toBeCalled();
  expect(errorMessage1).not.toBeInTheDocument();
  expect(errorMessage2).not.toBeInTheDocument();
});

test("Given the required props, When the component is rendered and there is one error, Then the validate function should be called and the error message should be present", async () => {
  const mockValidate = jest.fn();
  mockValidate.mockReturnValue(["Incorrect. 2 + 2 = 4."]);

  const props = {
    label: "",
    name: "",
    id: "",
    options: [],
    value: "",
    onChange: () => {},
    validate: mockValidate,
  };

  render(<SelectInput {...props} />);

  const errorMessage = screen.getByText("Incorrect. 2 + 2 = 4.");

  expect(mockValidate).toBeCalled();
  expect(errorMessage).toBeInTheDocument();
});

test("Given the required props, When the component is rendered and there is more than one error, Then the validate function should be called and all the error message should be present", async () => {
  const mockValidate = jest.fn();
  mockValidate.mockReturnValue(["Incorrect. 2 + 2 = 4.", "Some other error"]);

  const props = {
    label: "",
    name: "",
    id: "",
    options: [],
    value: "",
    onChange: () => {},
    validate: mockValidate,
  };

  render(<SelectInput {...props} />);

  const errorMessage1 = screen.getByText("Incorrect. 2 + 2 = 4.");
  const errorMessage2 = screen.getByText("Some other error");

  expect(mockValidate).toBeCalled();
  expect(errorMessage1).toBeInTheDocument();
  expect(errorMessage2).toBeInTheDocument();
});
