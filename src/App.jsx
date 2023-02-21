import { useEffect, useState } from "react";
import "./App.css";
import Pagination from "./components/Pagination";
import QuotesDisplay from "./components/QuotesDisplay";
import quotes from "./json/quotes.json";

function App() {
  //SIMULACION CON UNA API

  /* 
  
  const [quotes, setQuotes] = useState()

  useEffect(() => {
    const url = "loQueSea/API."

    axios.get(url)
    .then(res => setQuotes(res.data))
    .catch(err => console.log(err))
  },[]) 
  
  */
  const [paginaActual, setPaginaActual] = useState(1);
  const quotesPorPagina = 10;

  //Obtener la cantidad de quotes por pagina de manera dinamica

  const indexOfLastQuote = paginaActual * quotesPorPagina; //10
  const indexOfFirstQuote = indexOfLastQuote - quotesPorPagina; //0
  const currentQuotes = quotes.slice(indexOfFirstQuote, indexOfLastQuote);

  //Funcion para el evento Click del cambio de pagina
  const paginate = (numeroPagina) => {
    setPaginaActual(numeroPagina);
  };

  return (
    <div className="App">
      <h1>Pagination</h1>
      <Pagination
        paginate={paginate}
        totalQuotes={quotes.length}
        quotesPorPagina={quotesPorPagina}
      />

      <div>
        {currentQuotes.map((quote, index) => (
          <QuotesDisplay key={index} quote={quote} index={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
