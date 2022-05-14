import React, {useEffect,useState} from "react";
import { useParams } from 'react-router-dom'
import '../../css/Deputados.css'
import apiDeputados from '../../services/apiDeputados'
import Rowdep from "../../components/rowdep/Rowdep";
const Deputados = () => {
  const params = useParams()
  let [deputados,setDeputados] = useState([])
  let [deputados2,setDeputados2] = useState([])
  let [deputados3,setDeputados3] = useState([])
  useEffect(()=>{
    async function data() {
      const pega = await apiDeputados.get('/deputados?ordem=ASC&siglaPartido="PT"');
      const pega2 = await apiDeputados.get('/deputados?ordem=ASC&siglaPartido="PSDB"');
      const data1= pega2.data.dados
      const data= pega.data.dados
      console.log(data)
      setDeputados(data)
      setDeputados2(data1)
    }
    data();
  },[])
  return (
    <div className="cont">
      <h1 className="titulo">Lista de deputados por {params.query}</h1>
      <Rowdep title='PT' items={deputados}/>
      <Rowdep title='PSDB' items={deputados2}/>
    </div>
  );
};

export default Deputados;
