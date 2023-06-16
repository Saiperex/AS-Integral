const splash = document.querySelector(".splashPane");
function cambiarContenido(opcion) {
    var contenidoGrande = document.getElementById("contenido-grande");
    
    // Lógica para cambiar el contenido según la opción seleccionada
    if (opcion === 1) {
      contenidoGrande.innerHTML = "<img src='recursos/splash/splash2.jpeg' alt='Imagen 1'>";
    } else if (opcion === 2) {
      contenidoGrande.innerHTML = "<video src='recursos/splash/splash1.mp4' autoplay muted controls></video>";
    } else if (opcion === 3) {
      contenidoGrande.innerHTML = "<img src='recursos/splash/splash4.jpeg' alt='Imagen 2'>";
    } else if (opcion === 4) {
      contenidoGrande.innerHTML = "<video src='recursos/splash/splash3.mp4' autoplay muted controls></video>";
    }
  }
  const cerrarButton=document.querySelector(".fa-square-xmark")
  cerrarButton.addEventListener("click",function(){
    document.querySelector(".splashPane").style="display:none"
  })