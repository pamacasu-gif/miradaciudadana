let noticias = JSON.parse(localStorage.getItem("noticias")) || [

{
titulo:"Iniciativa ciudadana en la comunidad",
texto:"Vecinos organizan un proyecto social para mejorar su barrio.",
imagen:"https://picsum.photos/500/300?1"
},

{
titulo:"Análisis social de actualidad",
texto:"Expertos analizan las nuevas dinámicas sociales.",
imagen:"https://picsum.photos/500/300?2"
}

];

function mostrarNoticias(lista){

const contenedor = document.getElementById("noticias");

if(!contenedor) return;

contenedor.innerHTML="";

lista.forEach(n => {

contenedor.innerHTML += `

<div class="card">

<img src="${n.imagen}">

<h3>${n.titulo}</h3>

<p>${n.texto}</p>

</div>

`;

});

}

mostrarNoticias(noticias);