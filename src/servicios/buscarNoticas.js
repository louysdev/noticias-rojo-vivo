export const buscarNoticas = (noticias) => {
  const mappedNoticias = noticias?.map((noticia) => {
    const id = noticia.getElementsByTagName("guid")[0].textContent;
    const titulo = noticia.getElementsByTagName("title")[0].textContent;
    const descripcion =
      noticia.getElementsByTagName("description")[0].textContent;
    const enlace = noticia.getElementsByTagName("link")[0].textContent;
    const imagen = noticia.getElementsByTagName("media:content");

    // Procesado
    const imagenUrl = imagen[0].getAttribute("url");
    const descripcionSinEtiquetas = descripcion.replace(/<[^>]+>/g, "");

    const punto = /\./g;
    const posicionPunto = descripcionSinEtiquetas.search(punto);
    const descripcionHastaPunto = descripcionSinEtiquetas.slice(
      0,
      posicionPunto
    );

    const newNoticia = {
      id: id,
      titulo: titulo,
      descripcion: `${descripcionHastaPunto}.`,
      enlace: enlace,
      imagen: imagenUrl,
    };

    return newNoticia;
  });

  return mappedNoticias;
};
