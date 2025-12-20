import React from "react";

const ErrorMessage = ({ message }) => {
  return (
    <p className="text-red-500 mt-3 text-center">
      {message}
    </p>
  );
};

export default ErrorMessage;
