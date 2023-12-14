import { ChangeEvent, useState } from "react";
import W12MHeader from "../W12MHeader/W12MHeader";
import SpeciesName from "../SpeciesName/SpeciesName";
import PlanetName from "../PlanetName/PlanetName";
import NumberOfBeings from "../NumberOfBeings/NumberOfBeings";
import SelectInput from "../SelectInput/SelectInput";
import ReasonForSparing from "../ReasonForSparing/ReasonsForSparing";

interface inputData {
  speciesName: string;
  planetName: string;
  numberOfBeings: string;
  mathChallenge: string;
  reasonForSparing: string;
}

const DEFAULT_INPUT_DATA = {
  speciesName: "",
  planetName: "",
  numberOfBeings: "",
  mathChallenge: "",
  reasonForSparing: "",
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

const W12MForm = () => {
  const [inputData, setInputData] = useState<inputData>(DEFAULT_INPUT_DATA);

  function handleChange(
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) {
    setInputData((currentData) => {
      return {
        ...currentData,
        [event.target.id]: event.target.value,
      };
    });
  }

  return (
    <section className="w12MForm">
      <W12MHeader />
      <form>
        <SpeciesName
          label={"Species Name"}
          name={"speciesName"}
          id={"speciesName"}
          value={inputData.speciesName}
          onChange={handleChange}
        />
        <PlanetName
          label={"Planet Name"}
          name={"planetName"}
          id={"planetName"}
          value={inputData.planetName}
          onChange={handleChange}
        />
        <NumberOfBeings
          label={"Number of Beings"}
          name={"numberOfBeings"}
          id={"numberOfBeings"}
          value={inputData.numberOfBeings}
          onChange={handleChange}
        />
        <SelectInput
          label={"What is 2 + 2"}
          name={"mathChallenge"}
          id={"mathChallenge"}
          options={MATH_CHALLENGE_OPTIONS}
          onChange={handleChange}
        />
        <ReasonForSparing
          label={"Reason for Sparing"}
          name={"reasonForSparing"}
          id={"reasonForSparing"}
          value={inputData.reasonForSparing}
          onChange={handleChange}
        />
      </form>
    </section>
  );
};

export default W12MForm;
