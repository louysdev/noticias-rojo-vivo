import useObtenerNoticias from "../hooks/useObtenerNoticias";
import "../App.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";

export default function Noticias() {
  const { noticias } = useObtenerNoticias();

  return (
    <section className="contenedor-noticias">
      <section className="pais">
        <h3>Republica Dominicana</h3>
        <span className="fi fi-do"></span>
      </section>

      <ul className="noticias">
        {noticias.map((noticia) => {
          return (
            <li className="noticia" key={noticia.id}>
              <section className="imagen">
                <img src={noticia.imagen} alt={noticia.titulo} />
              </section>

              <section className="contenido">
                <h3>{noticia.titulo}</h3>
                <p>{noticia.descripcion}</p>
                <a href={noticia.enlace}>Ir a la noticia</a>
              </section>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
