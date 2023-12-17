import { render, screen } from "@testing-library/react";
import W12MForm from "./W12MForm";
import userEvent from "@testing-library/user-event";

test("Given the required props, When the component renders, Then the w12MForm section should be present", () => {
  const props = {
    updateSubmittedData: () => {},
  };
  // we can hold onto the object returned from render()
  // this object has a container property that we can destructure and inspect
  const { container } = render(<W12MForm {...props} />);

  // the container is just a normal DOM element, so we can look at normal properties like '.firstChild'
  // for example, the firstChild of our container should be our form element
  // eslint-disable-next-line testing-library/no-node-access
  expect(container.firstChild).toHaveClass("w12MForm");
});

test("Given the required props, When the component renders, Then the form should be present", () => {
  const props = {
    updateSubmittedData: () => {},
  };

  render(<W12MForm {...props} />);

  const someForm = screen.getByRole("form");

  expect(someForm).toBeInTheDocument();
});

test("Given the component is rendered, When the user clicks submit, Then the onClick function is called", async () => {
  const user = userEvent.setup();

  const mockOnClick = jest.fn();

  const props = {
    updateSubmittedData: mockOnClick,
  };

  render(<W12MForm {...props} />);

  const someButton = screen.getByRole("button");

  await user.click(someButton);

  expect(mockOnClick).toBeCalled();
});
