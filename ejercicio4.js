//creacion de los elementos
//createeElement
let nuevoElemento = document.createElento("div");
nuevoElemento.textcontent = "soy un elemento nuevo";
document.body.appendChild(nuevoElemento);
nuevoElemento.remover();

let nparrafo = document.createElement("p");
nparrafo.textcontent ="este es un nuevo parrafo";
document.body .appendChild(nparrafo);
let nparrafo = document.createElement("div");
nparrafo.textcontent ="este es un nuevo div";
nparrafo.parentNode.replaceChild(ndiv,nparrafo);
