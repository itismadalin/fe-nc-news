import React from "react";

const ErrorDisplay = ({ status, msg }) => {
  return (
    <section>
      <h1>{status}</h1>
      <h3>
        Ooops, we can't find the squirrel! Something must be wrong! <br /> {msg}{" "}
      </h3>
    </section>
  );
};

export default ErrorDisplay;
