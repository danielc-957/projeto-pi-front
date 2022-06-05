import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Rowdep from "../../components/rowdep/Rowdep";
import "../../css/EventoDetalhes.css";
import apiDeputados from "../../services/apiDeputados";

const EventosDetalhes = () => {
  const params = useParams();

  const [evento, setEvento] = useState({});
  const [local, setLocal] = useState({});
  const [orgaos, setOrgaos] = useState([]);

  let [deputados, setDeputados] = useState([]);
  useEffect(() => {
    async function data() {
      const pega = await apiDeputados.get(
        "/eventos/" + params.id + "/deputados"
      );
      console.log(pega);
      const data = pega.data.dados;
      console.log(data);
      setDeputados(data);
    }
    data();
  }, []);

  useEffect(() => {
    apiDeputados.get("/eventos/" + params.id).then((resultado) => {
      setEvento(resultado.data.dados);
      console.log(resultado.data.dados.orgaos[0].nome);
    });

    apiDeputados.get("/eventos/" + params.id).then((resultado) => {
      setLocal(resultado.data.dados.localCamara);
    });

    apiDeputados.get("/eventos/" + params.id).then((resultado) => {
      setOrgaos(resultado.data.dados.orgaos);
    });
  }, []);

  /*

  Exemplos projeto: 
  65164
  65120
  65238
  http://localhost:3000/eventos/detalhe/65164
  {evento.descricaoTipo}
  {evento.dataHoraInicio}
  {evento.localCamara.nome}
  {evento.orgaos.map((item) => (
    <span key={item.id}>{item.nome} </span>
  ))}
  <a href={evento.uri}>{evento.uri} </a>
  */
  return (
    <div className="cont">
      <h6 className="titulo">{evento.descricaoTipo}</h6>
      <div className=" align-container">
        <div className="inside-card">
          <h6 className="fonte">
            Data de Inicio: <span>{evento.dataHoraInicio}</span>
          </h6>
          <h6 className="fonte">Local: {local.nome} </h6>
          <h6 className="fonte">
            Orgaos:{" "}
            {orgaos.map((item) => (
              <span key={item.id}>{item.nome} </span>
            ))}{" "}
          </h6>
          <h6 className="fonte">
            Link: <a href={evento.uri}>{evento.uri} </a>
          </h6>
        </div>
      </div>
      <Rowdep className="mb-2" title="Participantes" items={deputados} />
    </div>
  );
};

export default EventosDetalhes;
