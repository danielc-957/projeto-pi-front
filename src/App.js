import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Deputados from "./pages/deputados/Deputados";
import DeputadosDetalhes from "./pages/deputados/DeputadosDetalhes";
import Evento from "./pages/evento/Evento";

function App() {
  return (
    <div className="app-background">
      <BrowserRouter>
        <Navigation />
        <div id="home-page">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/deputados/painel-deputados" element={<Deputados />} />
            <Route path="/deputados/detalhes" element={<DeputadosDetalhes />} />
            <Route path="/evento/detalhes" element={<Evento />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
