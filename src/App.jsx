import "./App.css";
import Noticias from "./components/Noticias";

function App() {
  return (
    <div className="contenedor-principal">
      <header>
        <h1>Noticias al rojo vivo 📰</h1>
      </header>
      <main>
        <Noticias />
      </main>
    </div>
  );
}

export default App;
