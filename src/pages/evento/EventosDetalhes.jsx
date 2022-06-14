import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Rowdep from "../../components/rowdep/Rowdep";
import "../../css/EventoDetalhes.css";
import apiDeputados from "../../services/apiDeputados";
import dayjs from "dayjs";

const EventosDetalhes = () => {
  const params = useParams();

  const [evento, setEvento] = useState({});
  const [local, setLocal] = useState({});
  const [orgaos, setOrgaos] = useState([]);
  const [newObject, setNewObject] = useState({});

  let [deputados, setDeputados] = useState([]);
  useEffect(() => {
    async function data() {
      const pega = await apiDeputados.get(
        "/eventos/" + params.id + "/deputados"
      );
      const data = pega.data.dados;
      // const newData = newDataType(data);
      // console.log(data);
      let newData = [];
      for (let index = 0; index < data.length; index++) {
        const aux = {
          id: data[index].id,
          nome: data[index].nome,
          foto: data[index].urlFoto,
          cardEvento: true,
        };

        setNewObject(aux);
        newData[index] = aux;
      }
      console.log(newData);
      setDeputados(newData);
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
  function newDataType(data) {
    let newData = [];
    for (let index = 0; index < data.length; index++) {
      const aux = {
        nome: data.nome,
        urlFoto: data.urlFoto,
      };

      setNewObject(aux);
      console.log(newObject);
      newData[index] = newObject;
    }
    return newData;
    */
  /*
    data.map((item, id) => {
      newObject.photo = item.urlFoto;
      newObject.nome = item.nome;
      newData.push(newObject);
      return newData;
    });
  }
    */
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
            Data de Inicio:{" "}
            <span>
              {dayjs(evento.dataHoraInicio).format("DD/MM/YYYY HH:mm:ss")}
            </span>
          </h6>
          <h6 className="fonte">Local: {local.nome} </h6>
          <h6 className="fonte">
            Orgaos:{" "}
            {orgaos.map((item) => (
              <span key={item.id}>{item.nome} </span>
            ))}{" "}
          </h6>
          <h6 className="fonte">
            Link: <a href={evento.urlRegistro} target="_blank" rel="noreferrer">{evento.urlRegistro} </a>
          </h6>
        </div>
      </div>
      <Rowdep className="mb-2" title="Participantes" items={deputados} />
    </div>
  );
};

export default EventosDetalhes;
