import { useState, useEffect } from "react";
import { buscarNoticas } from "../servicios/buscarNoticas";

export default function useObtenerNoticias() {
  const [noticias, setNoticias] = useState([]);

  // URL del feed RSS
  const RSS_FEED_URL = "https://www.diariolibre.com/rss/actualidad.xml";

  useEffect(() => {
    // Función para obtener y procesar las noticias
    fetch(RSS_FEED_URL)
      .then((response) => response.text())
      .then((data) => {
        // Parsear el XML del feed RSS
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, "text/xml");

        // Obtener los elementos <item> del feed RSS
        const items = xmlDoc.getElementsByTagName("item");

        var arr = [].slice.call(items);

        return arr;

        // Recorrer los elementos <item> y extraer la información
      })
      .then((data) => {
        setNoticias(buscarNoticas(data));
      })
      .catch((error) => {
        console.error("Error al obtener las noticias:", error);
      });
  }, []); // El segundo argumento vacío [] indica que el efecto se ejecuta solo una vez al montar el componente

  return { noticias };
}
