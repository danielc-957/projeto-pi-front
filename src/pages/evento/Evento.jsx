import React, {useEffect,useState} from "react";
import { useParams } from 'react-router-dom'
import '../../css/evento.css'
import apiDeputados from '../../services/apiDeputados'
import Rowdep from "../../components/rowdep/Rowdep";
const Evento = () => {
  const params = useParams()
  let [eventos,setEventos] = useState([])
  useEffect(()=>{
    async function data() {
      const pega = await apiDeputados.get('/eventos?ordem=ASC&ordenarPor=dataHoraInicio');
      const data= pega.data.dados
      console.log(data)
      setEventos(data)
    }
    data();
  },[])
  return (
    <div className="cont2">
      <h1 className="titulo mb-3">Lista de eventos por {params.query}</h1>
      <div className="linha mb-5"></div>
      <Rowdep className="mb-2" title='Partido' items={eventos}/>
    </div>
  );
};

export default Evento;
