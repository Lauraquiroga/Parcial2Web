import React from 'react';
import Bandas from './componentes/bandas'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Bandas />} />
          <Route path="/bandas" element={<Bandas />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
