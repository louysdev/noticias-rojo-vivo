import "./App.css";
import Noticias from "./components/Noticias";
import PeriodicoImange from "./assets/periodico-main.png";
import { GithubIcon } from "./components/Icons";

function App() {
  return (
    <div className="contenedor-principal">
      <header>
        <h1>Noticias al rojo vivo</h1>
        <img src={PeriodicoImange} />
      </header>
      <main>
        <Noticias />
      </main>
      <footer style={{ display: "flex", justifyContent: "center" }}>
        <p>Desarrollado por</p>
        <p style={{ fontWeight: "700" }}>laetusdev</p>
        <GithubIcon />
      </footer>
    </div>
  );
}

export default App;
