import React from "react";
import { useParams } from "react-router-dom";
import "../../css/Deputados.css";

const Deputados = () => {
  const params = useParams();
  return (
    <div className="cont">
      <h1 className="titulo">Lista de deputados por {params.query}</h1>
    </div>
  );
};

export default Deputados;
