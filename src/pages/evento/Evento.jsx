import React from "react";
import { useParams } from 'react-router-dom'
import '../../css/evento.css'
const Evento = () => {
  const params = useParams()
  return (
    <div className="cont">
    <h1 className="titulo">Lista de eventos por {params.query}</h1>
  </div>
  );
};

export default Evento;
