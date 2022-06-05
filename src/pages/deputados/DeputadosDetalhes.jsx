import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from 'react-router-dom'
import apiDeputados from "../../services/apiDeputados";
import './css-detalhes.css'

const DeputadosDetalhes = () => {

  const params = useParams()
  let [deputado, setDeputado] = useState([])
  let [evento, setEvento] = useState([])

  useEffect(() => {

    async function resgatarInformacao(id) {
      const uriEvento = `/deputados/${id}/eventos`
      const uriDeputado = `/deputados/${id}`

      const evento = await apiDeputados.get(uriEvento)
      let deputadoResponse = await apiDeputados.get(uriDeputado)

      if (deputadoResponse) {
        deputadoResponse.data.dados.idade = idade(deputadoResponse.data.dados.dataNascimento)
      }

      setDeputado(deputadoResponse.data.dados)
      setEvento(evento.data.dados)

      console.log('Dados carregados');
      console.log(deputadoResponse.data.dados, evento.data.dados)
    }

    resgatarInformacao(params.id)

  }, [params.id])

  function idade(dataNascimento) {
    let anoDeNascimento = dataNascimento.split("-")[0]
    let idade = (new Date().getFullYear()) - anoDeNascimento

    return idade
  }

  if (!deputado || !deputado.ultimoStatus) {
    return (<h1>Carregando...</h1>)
  }

  return (
    <div className="detalhes-dep">
      <Container>
        <div className="div-backgound fundo-desfocado borda-arrendondada p-3 mt-5">
          <Row>
            <Col>
              <div className="px-5 p-3 titulo-evento">
                <h1>Eventos</h1>
                <div>
                  {evento.map(item => (

                    <><div className=" txt-evento" key={item.id}>Nome: {item.descricao} <br /> Local: {item.localCamara.nome} <br /> Data e Horário: {item.dataHoraInicio}</div></>

                  ))}
                </div>
              </div>
            </Col>
            <Col className="d-none d-md-block linha-vertical-col"></Col>
            <Col>
              <div>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <img src={deputado.ultimoStatus.urlFoto} alt="..." class="rounded-circle img-dep"></img>
                      </td>
                      <td>
                        <tr>
                          <td>
                            <h1 className="titulo-nome mx-3">{deputado.ultimoStatus.nomeEleitoral}</h1>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h1 className="titulo-nome mx-3">Partido: {deputado.ultimoStatus.siglaPartido}</h1>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Link className="btn botao-despesas btn-sm mx-3" style={{ fontSize: '12px' }} to="/despesas/">Despesas</Link>
                          </td>
                        </tr>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div><h3 className="titulo-info">Informações do Deputado</h3></div>
              <div className="linha-2 mb-2"></div>
              <div className="titulo-nome-2">Nome: {deputado.nomeCivil}</div>
              <div className="txt-detalhes">Idade: {deputado.idade}</div>
              <div className="txt-detalhes">Sexo: {deputado.sexo}</div>
              <div className="txt-detalhes">Escolaridade: {deputado.escolaridade}</div>
              <div className="txt-detalhes">Município: {deputado.municipioNascimento}</div>
              <div className="txt-detalhes">E-mail: {deputado.ultimoStatus.email}</div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default DeputadosDetalhes;
