import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import '../../css/Deputados.css'
import apiDeputados from '../../services/apiDeputados'
import Rowdep from "../../components/rowdep/Rowdep";

const Deputados = () => {

  const params = useParams()
  let [deputados, setDeputados] = useState([])
  let [partidos, setPartidos] = useState([])

  useEffect(() => {

    async function data() {

      const pega = await apiDeputados.get('/partidos?ordem=ASC&ordenarPor=sigla&pagina=1&itens=35');
      const data = pega.data.dados

      for (let index = 0; index < data.length; index++) {
        const id = data[index].id;
        const pega2 = await apiDeputados.get('/partidos/'+id+'/membros');
        data[index].membros = pega2.data.dados
      }

      console.log(data)

      setPartidos(data)

    }

    data();

  }, [])

  if (params.query === 'orgaos') {
    return (
      <div className="cont1">
        <h1 className="titulo"> Lista por Orgãos {params.query}</h1>
      </div>
    );
  }

  else if (params.query === 'ordemalfabetica') {
    return (
      <div className="cont1">
        <h1 className="titulo"> Lista em Ordem Alfabética {params.query}</h1>
      </div>
    );
  } 

  else if (params.query === 'uf') {
    return (
      <div className="cont1">
        <h1 className="titulo"> Lista por UF {params.query}</h1>
      </div>
    );
  } 

  else {
    return (
      <div className="cont1">
        <h1 className="titulo mb-3"> Lista de deputados por {params.query}</h1>
        <div className="linha mb-5"></div>
        {partidos && partidos.map ((item,key) => (
          <Rowdep className='md-5' title={item.nome} items={item.membros} key={key} />
        ))}
      </div>
    );
  }
};

export default Deputados;