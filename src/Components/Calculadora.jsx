import React from "react";
import Pantalla from "./Pantalla";
import Teclado from "./Teclado";

const Calculadora = () => {
  return (
    <div className="calculadora">
      <Pantalla />
      <Teclado />
    </div>
  );
};

export default Calculadora;
