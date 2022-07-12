import React from "react";

const Digitos = (props) => {
  const crearNumeros = () => {
    const digitos = [];
    for (let i = 1; i < 10; i++) {
      digitos.push(<button key={i}>{i}</button>);
    }
    return digitos;
  };
  return (
    <div className="digits">
      {crearNumeros()}
      <button>0</button>
      <button>.</button>
      <button>=</button>
    </div>
  );
};

export default Digitos;
