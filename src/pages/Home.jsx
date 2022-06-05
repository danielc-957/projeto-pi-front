import React, { useEffect, useState } from "react";
import "../css/Home.css";
import apiDeputados from "../services/apiDeputados";

const Home = () => {
  const [deputados, setDeputados] = useState([]);

  useEffect(() => {
    apiDeputados
      .get("/deputados?ordem=ASC&ordenarPor=nome")
      .then((resultado) => {
        setDeputados(resultado.data.dados);
        console.log(resultado.data.dados);
      });
  }, []);

  return (
    <>
      <div className="chamada-home">
        <h2 className="texto-principal">
          Portal da Câmara <br /> dos Deputados
        </h2>
        <p className="texto-conteudo">
          Conheça os Deputados, representantes do povo <br /> eleitos para o
          parlamento.
        </p>
        <p className="texto-conteudo-secundario">
          Conheça o Futuro do seu país!
        </p>
      </div>
      <div className="chamada-home">
        <h2 className="texto-principal">
          Portal da Câmara <br /> dos Deputados
        </h2>
        <p className="texto-conteudo">
          Conheça os Deputados, representantes do povo <br /> eleitos para o
          parlamento.
        </p>
        <p className="texto-conteudo-secundario">
          Conheça o Futuro do seu país!
        </p>
      </div>
    </>
  );
};

export default Home;
