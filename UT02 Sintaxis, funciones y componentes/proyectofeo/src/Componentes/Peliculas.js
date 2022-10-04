import React from "react";
import Pelicula from "./Pelicula";

const Peliculas = (props) => {
  const Discentes = [
    {
      id: 1,
      nombre: "Feo",
      apellidos: "De verdad de la buena",
      curso: "2DAW",
      módulos: "DWC, DWS, DIW, DES",
    },
    {
      id: 2,
      nombre: "Fea",
      apellidos: "También De verdad",
      curso: "2DAW",
      módulos: "DWC, DWS, DIW",
    },
    {
      id: 3,
      nombre: "Horrible",
      apellidos: "De verdad",
      curso: "2DAW",
      módulos: "DWC",
    },
  ];

  return (
    <React.Fragment>
      <h1>Películas de Star Wars</h1>
      <div>
        {peliculas.map((v) => {
          return (
            <Pelicula
              key={v.id}
              nombre={v.name}
              ano={v.ano}
              director={v.director}
            >
              {v.opening_crawl}
            </Pelicula>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Peliculas;
