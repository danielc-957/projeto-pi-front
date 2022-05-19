import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navigation from "./components/Navigation"; // componente menu
import Home from "./pages/Home"; //componente home
import Deputados from "./pages/deputados/Deputados";
import DeputadosDetalhes from "./pages/deputados/DeputadosDetalhes";
import Evento from "./pages/evento/Evento";
import EventoDetalhes from "./pages/evento/EventoDetalhes";

function App() {
  const [blackHeader, setblackHeader] = useState(false);
  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setblackHeader(true);
      } else {
        setblackHeader(false);
      }
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div className="app-background">
      <BrowserRouter>
        <Navigation black={blackHeader} />
        <div id="home-page">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/deputados/filtro/:query" element={<Deputados />} />
            <Route path="/deputados/detalhes" element={<DeputadosDetalhes />} />
            <Route path="/eventos/filtro/:query" element={<Evento />} />
            <Route
              path="/eventos/filtro/detalhes"
              element={<EventoDetalhes />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
