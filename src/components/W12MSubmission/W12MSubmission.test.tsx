import { render, screen } from "@testing-library/react";
import W12MSubmission from "./W12MSubmission";

test("Given the required props, When the component renders, Then the w12MSubmission section should be present", () => {
  const props = {
    submittedData: {
      speciesName: {
        label: "",
        id: "",
        value: "",
      },
      planetName: {
        label: "",
        id: "",
        value: "",
      },
      numberOfBeings: {
        label: "",
        id: "",
        value: "",
      },
      mathChallenge: {
        label: "",
        id: "",
        value: "",
      },
      reasonForSparing: {
        label: "",
        id: "",
        value: "",
      },
    },
  };
  // we can hold onto the object returned from render()
  // this object has a container property that we can destructure and inspect
  const { container } = render(<W12MSubmission {...props} />);

  // the container is just a normal DOM element, so we can look at normal properties like '.firstChild'
  // for example, the firstChild of our container should be our form element
  // eslint-disable-next-line testing-library/no-node-access
  expect(container.firstChild).toHaveClass("w12MSubmission");
});

test("Given the required props, When the component renders, Then the section heading should be present", () => {
  const props = {
    submittedData: {
      speciesName: {
        label: "",
        id: "",
        value: "",
      },
      planetName: {
        label: "",
        id: "",
        value: "",
      },
      numberOfBeings: {
        label: "",
        id: "",
        value: "",
      },
      mathChallenge: {
        label: "",
        id: "",
        value: "",
      },
      reasonForSparing: {
        label: "",
        id: "",
        value: "",
      },
    },
  };

  render(<W12MSubmission {...props} />);

  const sectionHeading = screen.getByText("Information Submitted:");

  expect(sectionHeading).toBeInTheDocument();
  expect(sectionHeading.tagName).toBe("H2");
});

test("Given the required props, When the component renders, Then the submitted data should be present", () => {
  const props = {
    submittedData: {
      speciesName: {
        label: "Species Name",
        id: "speciesName",
        value: "test1",
      },
      planetName: {
        label: "Planet Name",
        id: "planetName",
        value: "test2",
      },
      numberOfBeings: {
        label: "Number of Beings",
        id: "numberOfBeings",
        value: "test3",
      },
      mathChallenge: {
        label: "What is 2 + 2",
        id: "mathChallenge",
        value: "4",
      },
      reasonForSparing: {
        label: "Reason for Sparing",
        id: "reasonForSparing",
        value: "test5",
      },
    },
  };

  render(<W12MSubmission {...props} />);

  const {
    speciesName,
    planetName,
    numberOfBeings,
    mathChallenge,
    reasonForSparing,
  } = props.submittedData;

  const someSubmittedData1 = screen.getByText(
    `${speciesName.label}: ${speciesName.value}`
  );
  const someSubmittedData2 = screen.getByText(
    `${planetName.label}: ${planetName.value}`
  );
  const someSubmittedData3 = screen.getByText(
    `${numberOfBeings.label}: ${numberOfBeings.value}`
  );
  const someSubmittedData4 = screen.getByText(
    `${mathChallenge.label}: ${mathChallenge.value}`
  );
  const someSubmittedData5 = screen.getByText(
    `${reasonForSparing.label}: ${reasonForSparing.value}`
  );

  expect(someSubmittedData1).toBeInTheDocument();
  expect(someSubmittedData2).toBeInTheDocument();
  expect(someSubmittedData3).toBeInTheDocument();
  expect(someSubmittedData4).toBeInTheDocument();
  expect(someSubmittedData5).toBeInTheDocument();
});
