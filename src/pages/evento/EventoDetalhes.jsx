import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../css/EventoDetalhes.css";
import apiDeputados from "../../services/apiDeputados";

const EventoDetalhes = () => {
  const params = useParams();

  const [evento, setEvento] = useState({});
  const [orgaos, setOrgaos] = useState([]);

  useEffect(() => {
    apiDeputados.get("/eventos/65087").then((resultado) => {
      setEvento(resultado.data.dados);
      console.log(resultado.data.dados);
    });
  }, []);

  return (
    <div className="cont">
      <h6 className="titulo">{evento.descricaoTipo}</h6>
      <div className=" align-container">
        <div className="inside-card">
          <h6 className="fonte">
            Data de Inicio: <span> {evento.dataHoraInicio}</span>
          </h6>
          <h6 className="fonte">
            Local: <span>{evento.localCamara.nome} </span>
          </h6>
          <h6 className="fonte">
            Orgaos:{" "}
            {evento.orgaos.map((item) => (
              <span key={item.id}>{item.nome} </span>
            ))}
          </h6>
          <h6 className="fonte">
            Link: <a href={evento.uri}>{evento.uri} </a>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default EventoDetalhes;
