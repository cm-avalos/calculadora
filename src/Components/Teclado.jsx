import React from "react";
import Digitos from "./Digitos";
import Operaciones from "./Operaciones";

const Teclado = () => {
  return (
    <div>
      <Operaciones />
      <Digitos />
    </div>
  );
};

export default Teclado;
