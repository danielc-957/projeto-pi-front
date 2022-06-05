import React, {useEffect,useState} from "react";
import { useParams } from 'react-router-dom'
const EventosDetalhes = () => {
  const params = useParams()
  return (
    <div className="cont">
      <h1 className="titulo"> Detalhes do Evento {params.id}</h1>
    </div>
  );
};

export default EventosDetalhes;
