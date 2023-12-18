interface ErrorMessageProps {
  messages: string[];
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ messages }) => {
  return (
    <>
      {messages.map((message, i) => (
        <span key={i} className="error">
          {message}
        </span>
      ))}
    </>
  );
};

export default ErrorMessage;
