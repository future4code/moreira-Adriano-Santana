import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import PaginaInicial from "./Paginas/PaginaInicial";
import Perfis from "./Paginas/Perfis";

export default class RoutesApp extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PaginaInicial />}/>
          <Route path="/contatos" element={<Perfis />}/>
        </Routes>
      </BrowserRouter>
    );
  }
}

 
