function buscar(){

let texto = document.getElementById("busqueda").value.toLowerCase();

let resultado = noticias.filter(n =>

n.titulo.toLowerCase().includes(texto) ||

n.texto.toLowerCase().includes(texto)

);

mostrarNoticias(resultado);

}