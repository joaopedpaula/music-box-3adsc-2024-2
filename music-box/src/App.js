import api from "./api";
import { useState } from "react";

import './utils/globals.css'

function App() {
  const [musicas, setMusicas] = useState([]);

  function listar() {
    api
      .get()
      .then((response) => {
        console.log(response);
        console.log(response.status);
        console.log(response.data);

        setMusicas(response.data);
      })
      .catch(function (error) {
        console.log(error.status);
        console.error(error); // exibe como erro
        // console.warn(error); // exibe como aviso
        // console.log(error); // exibe como informação
      });

    console.log("TESTE");
  }

  return (
    <>
      h
      <h1>Titulo</h1>
      <button onClick={listar}>Listar</button>
    </>
  );
}

export default App;
