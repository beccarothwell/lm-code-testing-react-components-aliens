import { render, screen } from "@testing-library/react";
import ErrorMessage from "./ErrorMessage";

test("Given the required props, When the component renders, Then an error should be present", () => {
  const props = {
    messages: ["here is an error"],
  };
  const { container } = render(<ErrorMessage {...props} />);

  const errorMessage = screen.getByText("here is an error");

  // eslint-disable-next-line testing-library/no-node-access
  expect(container.firstChild).toHaveClass("error");
  expect(errorMessage).toBeInTheDocument();
});

test("Given the required props, When the component renders and there are no errorMessages, Then no error should be present", () => {
  const props = {
    messages: [],
  };

  const { container } = render(<ErrorMessage {...props} />);

  // eslint-disable-next-line testing-library/no-node-access
  expect(container.firstChild).not.toBeInTheDocument();
});

test("Given the required props, When the component renders, Then error should be present for each message", () => {
  const props = {
    messages: [
      "here is an error",
      "here is another error",
      "what if there's a third error?!",
    ],
  };

  render(<ErrorMessage {...props} />);

  const errorMessage1 = screen.getByText("here is an error");
  const errorMessage2 = screen.getByText("here is another error");
  const errorMessage3 = screen.getByText("what if there's a third error?!");

  expect(errorMessage1).toBeInTheDocument();
  expect(errorMessage2).toBeInTheDocument();
  expect(errorMessage3).toBeInTheDocument();
});
