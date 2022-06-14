import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import "./search.css";
import apiDeputados from "../../services/apiDeputados";
import { useForm } from "react-hook-form";
import ImageNotFound from "../../images/image-not-found.png";
import SearchNotFound from "../../images/search-not-found.png";

const Search = () => {
  const location = useLocation();
  const [newResultado, setNewResultado] = useState([]);
  const [naoAchei, setNaoAchei] = useState(Boolean);

  useEffect(() => {
    apiDeputados
      .get("/deputados?nome=" + location.state + "&ordem=ASC&ordenarPor=nome")
      .then((resultado) => {
        setNewResultado(resultado.data.dados);
      });
  }, [location.state]);
  
  if(location.state.toLowerCase() === "super mario" ){
    return(
      <div className="cont">
      <h6 className="titulo text-center">Resultados para: {location.state}</h6>
      <>
            <div className="organize-list">
              <div className="txt-search" >
                <img
                  src="https://sm.ign.com/t/ign_br/news/n/nintendo-a/nintendo-announces-new-post-game-outfit-for-super-mario-odys_1gqd.h720.jpg"
                  alt="..."
                  className="rounded-circle img-dep mt-2"
                ></img>{" "}
                <br />
                <div className="mt-2">
                  Nome: {location.state} <br />
                </div>
              </div>
              <div>
                <Link
                  className="btn botao-verMais btn-sm mx-3"
                  style={{ fontSize: "19px" }}
                  to={"/deputados/detalhe/supermario" }
                >
                  Ver Mais
                </Link>
              </div>
            </div>
            <div className="linha-2"></div>
          </>
          </div>    
    )
  }else{
  return (
    <div className="cont">
      <h6 className="titulo text-center">Resultados para: {location.state}</h6>
      {newResultado.length !== 0  && 
        newResultado.map((item) => (
          <>
            <div className="organize-list">
              <div className="txt-search" key={item.id}>
                <img
                  src={item.urlFoto}
                  onError={(e) => {
                    e.target.src = ImageNotFound;
                  }}
                  alt="..."
                  className="rounded-circle img-dep mt-2"
                ></img>{" "}
                <br />
                <div className="mt-2">
                  Nome: {item.nome} <br />
                </div>
              </div>
              <div>
                <Link
                  className="btn botao-verMais btn-sm mx-3"
                  style={{ fontSize: "19px" }}
                  to={"/deputados/detalhe/" + item.id}
                >
                  Ver Mais
                </Link>
              </div>
            </div>
            <div className="linha-2"></div>
          </>
        ))
                } 
        {newResultado.length === 0 &&  
        <div className="notFoundSearch">
          <img src={SearchNotFound} alt="..." className="img-not-found"></img>
        </div>
        } 
       
      
    </div>
  );}
};

export default Search;
