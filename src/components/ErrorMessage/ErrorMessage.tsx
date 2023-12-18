interface ErrorMessageProps {
  messages: string[];
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ messages }) => {
  return (
    <>
      {messages.map((message) => (
        <span className="error">{message}</span>
      ))}
    </>
  );
};

export default ErrorMessage;
