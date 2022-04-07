export const getData = (url) => {
  return fetch(url)
    .then((respuesta) => respuesta.json())
    .then((datos) => {
      return datos;
    });
};
