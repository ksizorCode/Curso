
const data=[
  //  00 Título   --- 01 Texto ----                                                 02  archivo.jpg ---- 03 ruta ---                    04 tags
    ['Juego Planos', 'Interacivo en el que determinar que tipo de plano aparece', 'juego-planos.jpg', 'juego-planos/juegoplanos2.html', ['html','css','js']],
    ['Simpson Builder 1', 'Interacivo en el que determinar que tipo de plano aparece', 'juego-planos.jpg', 'juego-planos/juegoplanos2.html', ['html','css','js']],
    ['Simpson Builder 2', 'Interacivo en el que determinar que tipo de plano aparece', 'juego-planos.jpg', 'juego-planos/juegoplanos2.html', ['html','css','js']],
    ['Interactivo Planos', 'Interacivo en el que determinar que tipo de plano aparece', 'juego-planos.jpg', 'juego-planos/juegoplanos2.html', ['html','css','js']],
    ['Coloreando Minions', 'Interacivo en el que determinar que tipo de plano aparece', 'juego-planos.jpg', 'juego-planos/juegoplanos2.html', ['html','css','js','figma']],
    ['SVG Modifier', 'Interacivo en el que determinar que tipo de plano aparece', 'juego-planos.jpg', 'juego-planos/juegoplanos2.html', ['html','css','js','figma']],
    ['Juego Planos', 'Interacivo en el que determinar que tipo de plano aparece', 'juego-planos.jpg', 'juego-planos/juegoplanos2.html', ['html','css','js']],
    ['Juego Planos', 'Interacivo en el que determinar que tipo de plano aparece', 'juego-planos.jpg', 'juego-planos/juegoplanos2.html', ['html','css','js']]
  ]
  




let item ='';

for(let i=0; i< data.length-1; i++){

  item+='<li>';
  item+='<a href="'+data[i][3]+'" target="_blank">';
  item+='<img src="'+data[i][2]+'" alt="">';
  item+='<div class="text">';
  item+='<h3>'+data[i][0]+'</h3>';
  item+='<p>'+data[i][1]+'</p>';
  item+='</div>';
  item+='</a>';
  item+='<ul class="tags">';

  for(let ii=0; ii< data[i][4].length; ii++){
    item+='<li class="'+data[i][4][ii]+'"></li>';
  }

  item+='</ul>';
  item+='</li>';

}

document.getElementById('galeria').innerHTML=item;
console.log(item);


/* - - - - - - */


const element = document.getElementById("galeria");
const e2= document.getElementById("btn_cambiar");

function cambiar(){
    if (element.className == "list") {
      element.className = "grid";
      e2.innerText="Modo Lista";
    } else {
      element.className = "list";
      e2.innerText="Modo Retícula";

    }
  }


  cambiar();