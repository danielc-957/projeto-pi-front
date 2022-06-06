import React, { useEffect, useState } from "react";
import Rowdep from "../components/rowdep/Rowdep";
import "../css/Home.css";
import apiDeputados from "../services/apiDeputados";

const Home = () => {
  const [deputados, setDeputados] = useState([]);

  useEffect(() => {
    let sortDeputados = [];

    apiDeputados
      .get("/deputados?itens=600&ordem=ASC&ordenarPor=nome")
      .then((resultado) => {
        console.log(resultado.data.dados);
        let newData = [];
        const data = resultado.data.dados;
        for (let index = 0; index < 20; index++) {
          const numeroAleatorio = Math.floor(Math.random() * 513);
          newData[index] = data[numeroAleatorio];
        }
        console.log(newData);
        setDeputados(newData);
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
      <Rowdep className="mb-2" title="Participantes" items={deputados} />
    </>
  );
};

export default Home;
