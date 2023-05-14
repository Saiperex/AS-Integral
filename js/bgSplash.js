const splash = document.querySelector(".splashPane");
const imagenesS = ["splash1.jpeg", "splash2.jpeg", "splash3.jpeg", "splash4.jpeg"];
var indexS = 1;

function cambiarBackground() 
{
    splash.style.backgroundImage = `url('recursos/splash/${imagenesS[indexS]}')`;
    indexS = indexS + 1
    if (indexS > 3) {
        indexS = 0
    }
    console.log(imagenesS[indexS])

}

setInterval(cambiarBackground, 5000);
document.querySelector(".fa-square-xmark").addEventListener("click",function()
{
    splash.style.display="none"
})