import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Musicas from "./pages/Musicas/Musicas";
import NotFound from "./pages/NotFound/NotFound";
import Adicionar from "./pages/Adicionar/Adicionar";
import Editar from "./pages/Editar/Editar";

function Rotas() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/"  element={<Home />} />
            <Route path="/musicas"  element={<Musicas />} />
            <Route path="/adicionar"  element={<Adicionar />} />
            <Route path="/editar/:idCard" element={<Editar />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Rotas;