import React from "react";

const Pagination = ({ paginate, totalQuotes, quotesPorPagina }) => {
  const totalPaginas = []; //[1,2,3,4,5,6,7,8,9,10,11]

  for (let i = 1; i <= Math.ceil(totalQuotes / quotesPorPagina); i++) {
    //10.2 => 11
    totalPaginas.push(i);
  }

  return (
    <nav>
      {totalPaginas.map((number) => {
        return (
          <button
            key={number}
            onClick={() => paginate(number)}
            /* className={number == currentPage ? "active" : ""} */
          >
            {number}
          </button>
        );
      })}
    </nav>
  );
};

export default Pagination;
