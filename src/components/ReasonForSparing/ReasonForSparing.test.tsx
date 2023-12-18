import { render, screen } from "@testing-library/react";
import ReasonsForSparing from "./ReasonsForSparing";
import userEvent from "@testing-library/user-event";

test("Given the required props, When the component is rendered, Then there should be an input element", () => {
  const props = {
    label: "",
    name: "",
    id: "",
    value: "",
    onChange: () => {},
    validate: () => [],
  };

  render(<ReasonsForSparing {...props} />);

  const someTextInput = screen.getByRole("textbox");

  expect(someTextInput).toBeInTheDocument();
  expect(someTextInput.tagName).toBe("INPUT");
  expect(someTextInput.getAttribute("type")).toBe("textarea");
});

test("Given the required props, When the component is rendered, Then there should be a label element", () => {
  const props = {
    label: "",
    name: "",
    id: "",
    value: "",
    onChange: () => {},
    validate: () => [],
  };

  const { container } = render(<ReasonsForSparing {...props} />);

  // eslint-disable-next-line testing-library/no-node-access
  expect(container.firstChild?.nodeName === "LABEL").toBeTruthy();
});

test("Given the required props, When the component is rendered, Then the input element should be within a label element", () => {
  const props = {
    label: "",
    name: "",
    id: "",
    value: "",
    onChange: () => {},
    validate: () => [],
  };

  const { container } = render(<ReasonsForSparing {...props} />);

  // eslint-disable-next-line testing-library/no-node-access
  const label = container.firstChild;
  const someTextInput = screen.getByRole("textbox");
  const containsInput = label?.contains(someTextInput);

  expect(containsInput).toBeTruthy();
});

test("Given the required props, When the component is rendered, Then the label text should be present", () => {
  const props = {
    label: "Number of Beings",
    name: "",
    id: "",
    value: "",
    onChange: () => {},
    validate: () => [],
  };

  render(<ReasonsForSparing {...props} />);

  const someLabelText = screen.getByLabelText(`${props.label}:`);
  expect(someLabelText).toBeInTheDocument();
});

test("Given the required props, When the component is rendered, Then the input value should be present", () => {
  const props = {
    label: "",
    name: "",
    id: "",
    value: "test",
    onChange: () => {},
    validate: () => [],
  };

  render(<ReasonsForSparing {...props} />);

  const someTextInput = screen.getByRole("textbox");
  expect(someTextInput).toHaveValue(props.value);
});

test("Given the component is rendered, When the user types in the input, Then the onChange function is called", async () => {
  const user = userEvent.setup();

  const mockOnChange = jest.fn();

  const props = {
    label: "",
    name: "",
    id: "",
    value: "",
    onChange: mockOnChange,
    validate: () => [],
  };

  render(<ReasonsForSparing {...props} />);

  const someTextInput = screen.getByRole("textbox");

  await user.type(someTextInput, "test");

  expect(mockOnChange).toBeCalled();
  expect(mockOnChange).toBeCalledTimes(4);
});

test("Given the required props, When the component is rendered and there are no errors, Then the validate function should be called and no error messages should be present", async () => {
  const mockValidate = jest.fn();
  mockValidate.mockReturnValue([]);

  const props = {
    label: "",
    name: "",
    id: "",
    value: "",
    onChange: () => {},
    validate: mockValidate,
  };

  render(<ReasonsForSparing {...props} />);

  const errorMessage = screen.queryByText(
    "Must be between 17 and 153 characters."
  );

  expect(mockValidate).toBeCalled();
  expect(errorMessage).not.toBeInTheDocument();
});

test("Given the required props, When the component is rendered and there is one error, Then the validate function should be called and the error message should be present", async () => {
  const mockValidate = jest.fn();
  mockValidate.mockReturnValue(["Must be between 17 and 153 characters."]);

  const props = {
    label: "",
    name: "",
    id: "",
    value: "",
    onChange: () => {},
    validate: mockValidate,
  };

  render(<ReasonsForSparing {...props} />);

  const errorMessage = screen.getByText(
    "Must be between 17 and 153 characters."
  );

  expect(mockValidate).toBeCalled();
  expect(errorMessage).toBeInTheDocument();
});

test("Given the required props, When the component is rendered and there is more than one error, Then the validate function should be called and all the error message should be present", async () => {
  const mockValidate = jest.fn();
  mockValidate.mockReturnValue([
    "Must be between 17 and 153 characters.",
    "Some other error",
  ]);

  const props = {
    label: "",
    name: "",
    id: "",
    value: "",
    onChange: () => {},
    validate: mockValidate,
  };

  render(<ReasonsForSparing {...props} />);

  const errorMessage1 = screen.getByText(
    "Must be between 17 and 153 characters."
  );
  const errorMessage2 = screen.getByText("Some other error");

  expect(mockValidate).toBeCalled();
  expect(errorMessage1).toBeInTheDocument();
  expect(errorMessage2).toBeInTheDocument();
});
