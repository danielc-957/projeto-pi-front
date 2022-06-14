import React, { useState, useEffect } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import "../css/Navigation.css";
import { Button, Form } from "react-bootstrap";
import { RiSearchEyeLine } from "react-icons/ri";
import { useForm } from "react-hook-form";

const Navigation = ({ black }) => {
  const { register, handleSubmit, getValues } = useForm();
  const navigate = useNavigate();

  function receiveData() {
    const values = getValues();
    navigate("/busca", { state: values.busca });
  }

  return (
    <div id="general-page">
      <header className={black ? "black" : ""}></header>
      <div className="menu-bar">
        <Navbar variant="dark" fixed="top">
          <Link className="nav-cdb" to="/">
            PORTAL CDB
          </Link>
          <Nav className="me-auto color-nav">
            <div className="inside-navbar-division">
              <div className="drop-division">
                <NavDropdown title="Deputados" menuVariant="dark">
                  <Link
                    className="btn text-white"
                    to="/deputados/filtro/partidos"
                  >
                    Partidos
                  </Link>
                  <Link className="btn text-white" to="/deputados/filtro/uf">
                    UF
                  </Link>
                  <Link
                    className="btn text-white"
                    to="/deputados/filtro/orgaos"
                  >
                    Orgãos
                  </Link>
                  <Link
                    className="btn text-white"
                    to="/deputados/filtro/ordemalfabetica"
                  >
                    Ordem Alfabetica
                  </Link>
                </NavDropdown>
                <NavDropdown title="Eventos" menuVariant="dark">
                  <Link className="btn text-white" to="/eventos/filtro/orgaos">
                    Orgãos
                  </Link>
                  <Link
                    className="btn text-white"
                    to="/eventos/filtro/ordemalfabetica"
                  >
                    Ordem Alfabetica
                  </Link>
                  <Link
                    className="btn text-white"
                    to="/eventos/filtro/detalhes"
                  >
                    Detalhes Evento
                  </Link>
                </NavDropdown>
              </div>

              <div className="search-division d-flex justify-content-end">
                <Form.Group
                  className="mb-3"
                  controlId="busca"
                  id="divBusca"
                  placeholder="Buscar..."
                >
                  <Form.Control type="text" {...register("busca")} />
                </Form.Group>

                <a>
                  <RiSearchEyeLine />
                  <input type="submit" onClick={handleSubmit(receiveData)} />
                </a>
              </div>
            </div>
          </Nav>
        </Navbar>
      </div>
    </div>
  );
};

export default Navigation;
