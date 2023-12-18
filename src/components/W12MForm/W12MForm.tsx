import { MouseEvent, useState } from "react";
import W12MHeader from "../W12MHeader/W12MHeader";
import SpeciesName from "../SpeciesName/SpeciesName";
import PlanetName from "../PlanetName/PlanetName";
import NumberOfBeings from "../NumberOfBeings/NumberOfBeings";
import SelectInput from "../SelectInput/SelectInput";
import ReasonForSparing from "../ReasonForSparing/ReasonsForSparing";
import { W12MInputData } from "./W12Form.types";
import validateSpeciesName from "../../validate/SpeciesName/validate_species_name";
import validatePlanetName from "../../validate/PlanetName/validate_planet_name";
import validateNumberOfBeings from "../../validate/NumberOfBeings/validate_number_of_beings";
import validateMathChallenge from "../../validate/MathChallenge/validate_math_challenge";
import validateReasonsForSparing from "../../validate/ReasonsForSparing/validate_reasons_for_sparing";

const DEFAULT_INPUT_DATA = {
  speciesName: {
    label: "Species Name",
    id: "speciesName",
    value: "",
  },
  planetName: {
    label: "Planet Name",
    id: "planetName",
    value: "",
  },
  numberOfBeings: {
    label: "Number of Beings",
    id: "numberOfBeings",
    value: "",
  },
  mathChallenge: {
    label: "What is 2 + 2",
    id: "mathChallenge",
    value: "",
  },
  reasonForSparing: {
    label: "Reason for Sparing",
    id: "reasonForSparing",
    value: "",
  },
};

const MATH_CHALLENGE_OPTIONS = [
  {
    value: "4",
    text: "4",
  },
  {
    value: "not4",
    text: "Not 4",
  },
];

interface W12MFormProps {
  updateSubmittedData: (newSubmission: W12MInputData) => void;
}

const W12MForm: React.FC<W12MFormProps> = ({ updateSubmittedData }) => {
  const [inputData, setInputData] = useState<W12MInputData>(DEFAULT_INPUT_DATA);

  function handleChange(id: string, value: string) {
    setInputData((currentData) => {
      return {
        ...currentData,
        [id]: {
          ...currentData[id as keyof W12MInputData],
          value: value,
        },
      };
    });
  }

  function handleSubmit(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    updateSubmittedData(inputData);
  }

  const {
    speciesName,
    planetName,
    numberOfBeings,
    mathChallenge,
    reasonForSparing,
  } = inputData;

  return (
    <section className="w12MForm">
      <W12MHeader />
      <form name="W12M">
        <SpeciesName
          label={speciesName.label}
          name={speciesName.id}
          id={speciesName.id}
          value={speciesName.value}
          onChange={handleChange}
          validate={validateSpeciesName}
        />
        <PlanetName
          label={planetName.label}
          name={planetName.id}
          id={planetName.id}
          value={planetName.value}
          onChange={handleChange}
          validate={validatePlanetName}
        />
        <NumberOfBeings
          label={numberOfBeings.label}
          name={numberOfBeings.id}
          id={numberOfBeings.id}
          value={numberOfBeings.value}
          onChange={handleChange}
          validate={validateNumberOfBeings}
        />
        <SelectInput
          label={mathChallenge.label}
          name={mathChallenge.id}
          id={mathChallenge.id}
          options={MATH_CHALLENGE_OPTIONS}
          value={mathChallenge.value}
          onChange={handleChange}
          validate={validateMathChallenge}
        />
        <ReasonForSparing
          label={reasonForSparing.label}
          name={reasonForSparing.id}
          id={reasonForSparing.id}
          value={reasonForSparing.value}
          onChange={handleChange}
          validate={validateReasonsForSparing}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </section>
  );
};

export default W12MForm;
