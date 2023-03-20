const botones=document.querySelectorAll(".menu_item")
const sectores=document.querySelectorAll(".sec")
const botonesSlider=document.querySelectorAll(".menu_itemS")
for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", function (event) {
        sectores[i].scrollIntoView({ behavior: 'smooth' });
    })
    botonesSlider[i].addEventListener("click", function (event) {
        sectores[i].scrollIntoView({ behavior: 'smooth' });
    })
}