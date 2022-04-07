export const drawFilms = (json) => {
  let result = "";
  json.results.map((v, i, a) => {
    result += `<p class='menuFilm'>${v.title}</p>`;
  });
  return result;
};
