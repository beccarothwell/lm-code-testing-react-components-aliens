import { useState } from "react";
import "./App.css";
import { W12MInputData } from "./components/W12MForm/W12Form.types";
import W12MForm from "./components/W12MForm/W12MForm";
import W12MSubmission from "./components/W12MSubmission/W12MSubmission";

function App() {
  const [submittedData, setSubmittedData] = useState<W12MInputData>();

  const updateSubmittedData = (newSubmission: W12MInputData) =>
    setSubmittedData(newSubmission);

  return (
    <>
      <h1>W-12-M :- APPLICATION TO SPARE PLANET FROM DESTRUCTION</h1>
      <W12MForm updateSubmittedData={updateSubmittedData} />
      {submittedData && <W12MSubmission submittedData={submittedData} />}
    </>
  );
}

export default App;
