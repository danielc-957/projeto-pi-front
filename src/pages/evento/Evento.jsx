import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../css/evento.css";
import apiDeputados from "../../services/apiDeputados";

const Evento = () => {
  const params = useParams();

  const [evento, setEvento] = useState({});
  const [orgaos, setOrgaos] = useState([]);

  useEffect(() => {
    apiDeputados.get("/eventos/65087").then((resultado) => {
      setOrgaos(resultado.data.dados);
      console.log(resultado.data.dados);
    });
  }, []);

  return (
    <div className="cont">
      <h1 className="titulo">Lista de eventos por {params.query}</h1>
    </div>
  );
};

export default Evento;
