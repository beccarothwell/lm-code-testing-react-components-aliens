import { render, screen } from "@testing-library/react";
import PlanetName from "./PlanetName";
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

  render(<PlanetName {...props} />);

  const someTextInput = screen.getByRole("textbox");

  expect(someTextInput).toBeInTheDocument();
  expect(someTextInput.tagName).toBe("INPUT");
  expect(someTextInput.getAttribute("type")).toBe("text");
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

  const { container } = render(<PlanetName {...props} />);

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

  const { container } = render(<PlanetName {...props} />);

  // eslint-disable-next-line testing-library/no-node-access
  const label = container.firstChild;
  const someTextInput = screen.getByRole("textbox");
  const containsInput = label?.contains(someTextInput);

  expect(containsInput).toBeTruthy();
});

test("Given the required props, When the component is rendered, Then the label text should be present", () => {
  const props = {
    label: "Planet Name",
    name: "",
    id: "",
    value: "",
    onChange: () => {},
    validate: () => [],
  };

  render(<PlanetName {...props} />);

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

  render(<PlanetName {...props} />);

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

  render(<PlanetName {...props} />);

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

  render(<PlanetName {...props} />);

  const errorMessage1 = screen.queryByText(
    "Must be between 2 and 49 characters."
  );
  const errorMessage2 = screen.queryByText("No special characters allowed!");

  expect(mockValidate).toBeCalled();
  expect(errorMessage1).not.toBeInTheDocument();
  expect(errorMessage2).not.toBeInTheDocument();
});

test("Given the required props, When the component is rendered and there is one error, Then the validate function should be called and the error message should be present", async () => {
  const mockValidate = jest.fn();
  mockValidate.mockReturnValue(["No special characters allowed!"]);

  const props = {
    label: "",
    name: "",
    id: "",
    value: "",
    onChange: () => {},
    validate: mockValidate,
  };

  render(<PlanetName {...props} />);

  const errorMessage = screen.getByText("No special characters allowed!");

  expect(mockValidate).toBeCalled();
  expect(errorMessage).toBeInTheDocument();
});

test("Given the required props, When the component is rendered and there is more than one error, Then the validate function should be called and all the error message should be present", async () => {
  const mockValidate = jest.fn();
  mockValidate.mockReturnValue([
    "Must be between 2 and 49 characters.",
    "No special characters allowed!",
  ]);

  const props = {
    label: "",
    name: "",
    id: "",
    value: "",
    onChange: () => {},
    validate: mockValidate,
  };

  render(<PlanetName {...props} />);

  const errorMessage1 = screen.getByText(
    "Must be between 2 and 49 characters."
  );
  const errorMessage2 = screen.getByText("No special characters allowed!");

  expect(mockValidate).toBeCalled();
  expect(errorMessage1).toBeInTheDocument();
  expect(errorMessage2).toBeInTheDocument();
});
