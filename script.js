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