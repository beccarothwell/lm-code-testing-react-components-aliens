import { render, screen } from "@testing-library/react";
import W12MHeader from "./W12MHeader";

test("renders header text", () => {
  render(<W12MHeader />);
  const someHeaderText = screen.getByText(
    /Each species may only submit ONE W-12-M form./i
  );
  expect(someHeaderText).toBeInTheDocument();
});

test("Given the component renders, When the user reads the page, Then the mistake warning text should be present", () => {
  render(<W12MHeader />);
  const someHeaderText = screen.getByText(
    /Any mistakes will guarantee rejection and your planet will NOT be spared./i
  );
  expect(someHeaderText).toBeInTheDocument();
});
