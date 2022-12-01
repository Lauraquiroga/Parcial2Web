import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  /*
  Ejemplo wrapped en routes:
<Route path="/" element={<Espacios />} />
<Route path="/espacios" element={<Espacios />} />
<Route path="/espacios/:espacioId" element={<Rooms />} />
  */
 
  return (
    <div className="App">
     <BrowserRouter>
       <Routes>

       </Routes>
     </BrowserRouter>
   </div>
  );
}

export default App;
