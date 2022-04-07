"use strict";
import { getData } from "./bibliotecas/get.js";
import { drawFilms } from "./bibliotecas/draw.js";

window.onload = async () => {
  const url = "http://swapi.py4e.com/api/films";

  document.getElementById("movies").innerHTML = drawFilms(await getData(url));
}; // Fin window.load
