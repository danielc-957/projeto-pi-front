import React,{useState,useEffect} from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/Navigation.css";
import {RiSearchEyeLine} from 'react-icons/ri'

const Navigation = ({black}) => {
  
  return (
    <div id="general-page">
      <header className={black ? 'black' : ''}></header>
      <div className="menu-bar">
      <Navbar  variant="dark" fixed="top">
        <Link className="nav-cdb" to="/">
          PORTAL CDB
        </Link>
          <Nav className="me-auto color-nav">
            <div className="inside-navbar-division">
              <div className="drop-division">
              <NavDropdown title="Deputados" menuVariant="dark" >
              <Link className='btn text-white' to='/deputados/filtro/partidos'>Partidos</Link>
              <Link className='btn text-white' to='/deputados/filtro/uf'>UF</Link>
              <Link className='btn text-white' to='/deputados/filtro/orgaos'>Orgãos</Link>
              <Link className='btn text-white' to='/deputados/filtro/ordemalfabetica'>Ordem Alfabetica</Link>
              
              </NavDropdown>
              <NavDropdown title="Eventos" menuVariant="dark" >
              <Link className='btn text-white' to='/eventos/filtro/orgaos'>Orgãos</Link>
              <Link className='btn text-white' to='/eventos/filtro/ordemalfabetica'>Ordem Alfabetica</Link>
              </NavDropdown>
              </div>
                
              <div className="search-division d-flex justify-content-end">
              <input type="text" id="divBusca" placeholder="Buscar..."/>
              
              
              <a><RiSearchEyeLine/></a>
                  <a><p>Search</p></a>
             
              </div>
            </div>
          </Nav>
        </Navbar>
      </div>
    </div>
  );
};

export default Navigation;
