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
