function publicar(){

let titulo = document.getElementById("titulo").value;

let texto = document.getElementById("texto").value;

let imagen = document.getElementById("imagen").value;

let noticias = JSON.parse(localStorage.getItem("noticias")) || [];

noticias.push({
titulo,
texto,
imagen
});

localStorage.setItem("noticias", JSON.stringify(noticias));

alert("Noticia publicada correctamente");

}