import React from "react";

const QuotesDisplay = ({ quote, index }) => {
  return (
    <div>
      <h2>{index}</h2>
      <p>{quote.quote}</p>
      <h3>{quote.author}</h3>
      <hr />
    </div>
  );
};

export default QuotesDisplay;
