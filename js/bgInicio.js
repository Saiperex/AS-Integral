var inicio = document.querySelector(".inicio");
const imagenes = ["aire.jpg", "camara.jpg", "framing.jpg", "panel.jpg", "solar.jpg", "termo.jpg"];
var index = 1;

function cambiarBackground() {
  inicio.style.backgroundImage = `url('recursos/imagenes/${imagenes[index]}')`;
  index=index+1
  if(index>5)
  {
    index=0
  }
}
setInterval(cambiarBackground,5000)