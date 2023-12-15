import { W12MInputData } from "../W12MForm/W12Form.types";

interface W12MSubmissionProps {
  submittedData: W12MInputData;
}

const W12MSubmission: React.FC<W12MSubmissionProps> = ({ submittedData }) => {
  console.log(Object.values(submittedData));
  return (
    <section className="w12MSubmission">
      <h2>Information Submitted:</h2>
      {Object.values(submittedData).map((item) => (
        <p>{`${item.label}: ${item.value}`}</p>
      ))}
    </section>
  );
};

export default W12MSubmission;
