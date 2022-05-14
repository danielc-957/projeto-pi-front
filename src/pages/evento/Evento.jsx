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
    <div className="cont">
      <h1 className="titulo">Lista de eventos por {params.query}</h1>
      <Rowdep title='partido' items={eventos}/>
    </div>
  );
};

export default Evento;
