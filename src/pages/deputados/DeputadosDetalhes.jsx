import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from 'react-router-dom'
import './css-detalhes.css'

const DeputadosDetalhes = () => {
  const params = useParams()


  return (

    <div className="detalhes-dep ">
      <Container>
        <div className="div-backgound">
          <Row>
            <Col>
              <div>
                <h1 className="titulo-evento">Eventos</h1>
                <p className="txt-evento">
                  bla bla bla
                </p>
              </div>
            </Col>
            <Col>
              <div>
                <h1 className="titulo-nome">Nome:</h1>
              </div>
              <div>
                <Link className="btn botao-despesas" to="/despesas/">Despesas</Link>
                <img src="https://www.camara.leg.br/internet/deputado/bandep/pagina_do_deputado/204416.jpg" alt="..." class="rounded-circle img-dep"></img>
              </div>
              <div>
                <h3 className="titulo-info">Informações complementares</h3>
              </div>
              <div className="linha mb-2"></div>

              <div className="titulo-partido">Partido: </div>
              <div className="txt-detalhes"> texto detalhes deputado</div>
            </Col>
          </Row>
        </div>
      </Container>

    </div>

  );
};

export default DeputadosDetalhes;
