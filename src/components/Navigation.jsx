import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/Navigation.css";

const Navigation = () => {
  return (
    <div id="general-page">
      <div className="menu-bar">
        <Link className="nav-cdb" to="/">
          PORTAL CDB
        </Link>
        <Navbar className="color-nav" variant="dark">
          <Nav className="me-auto">
            <div className="inside-navbar-division">
              <div className="links-division">
                <Link className="nav-link" to="/Array">
                  Deputados
                </Link>
                <Link className="nav-link" to="/Objeto">
                  Eventos
                </Link>
              </div>
              <div className="search-division">
                <form class="d-flex justify-content-end">
                  <input
                    class="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button type="submit">Search</button>
                </form>
              </div>
            </div>
          </Nav>
        </Navbar>
      </div>
    </div>
  );
};

export default Navigation;
