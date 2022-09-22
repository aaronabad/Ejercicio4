"use strict";

/* Trabajando con el DOM */
/* Posicionamiento relativo firstChild, lastChild, nextSibling, previousSibling*/

//var parrafo = document.body.firstChild;

/* Tipos de nodo Element (1), Attr (2) y Text (3) */

//console.log(parrafo.nodeType);

/* Crear referencia del document para evitar subir al alcance global a cada llamada (optimización del código) */

var doc = document;

/* Seleccionando elementos (recursivamente) -> getElementsByTagName, getElementById, getElementsByName*/

/* var parrafos = doc.getElementsByTagName("p");
console.log(`Párrafos seleccionados ${parrafos.length}`);
for (var i = 0; i < parrafos.length; i++) {
   console.log(parrafos[i]);
} */

/* Seleccionando elementos como en CSS -> querySelectorAll y querySelector */
/* 
var inputs = doc.querySelectorAll("input");
console.log(inputs);

var capa_botones = doc.querySelector("#botones");
console.log(capa_botones);

var capas = doc.querySelectorAll("div div");
console.log(capas);

var capas2 = doc.querySelectorAll(".contenido");
console.log(capas2);
 */
/* Creando objetos en el DOM -> document.createElement y document.createTextNode */

// 1.- Se crea el document.getElementById("feo");
var elemento = document.createElement("p");
// 2.- Se crea el texto (contenido)
var contenido = document.createTextNode(
  "Nuevo párrafo creado <strong>dinámicamente</strong>"
);
// 3.- Se añade el contenido (texto) al elemento
elemento.appendChild(contenido);
// 4.- Se añade al DOM -> appendChild(nuevo), insertBefore(nuevo,existente),  removeChild(existente), replaceChild(nuevo,existente)
document.getElementById("botones").appendChild(elemento);

/* Usando innerHTML */

function crear() {
  // 1.- Se crea el elemento
  var ele2 = document.createElement("p");
  // 2.- Se crea el texto (contenido)
  ele2.innerHTML =
    "Nuevo párrafo creado dinámicamente con <strong>innerHTML</strong>";
  // 3.- Se añade al DOM -> appendChild(nuevo), insertBefore(nuevo,existente),  removeChild(existente), replaceChild(nuevo,existente)
  ele2.setAttribute("class", "nuevo");
  document.getElementById("botones").appendChild(ele2);
}

/* Acceso y modificacción de atributos -> getAttribute(nombre), setAttribute(nombre, valor) o como propiedades de elementos */

/* var derecha = document.getElementById("primero");
console.log(derecha.getAttribute("align"));
derecha.setAttribute("align", "right");
console.log(derecha.getAttribute("align")); */

/* Usando la propiedad style pada dar formato -> elemento.style.propiedad (Mala idea) */

//derecha.style.color = "blue";

/* var azules = doc.getElementsByClassName("contenido");

for (var i = 0; i < azules.length; i++) {
  azules[i].style.color = "blue";
} */

/* Mejor se usa CSS -> className o classList (add, remove, toggle, length y contains) */

/* var primero = doc.getElementById("primero");
primero.classList.add("verde"); */

/* var nuevos = doc.getElementsByClassName("nuevo");

for (var i = 0; i < nuevos.length; i++) {
  nuevos[i].classList.add("destacado");
} */

/* var quitar = doc.getElementsByClassName("nuevo");

for (var i = 0; i < quitar.length; i++) {
  quitar[i].classList.remove("destacado");
} */
