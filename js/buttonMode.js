var botonLight=document.querySelector(".fa-lightbulb")
var menuItem=document.querySelectorAll(".menu_item")
var body=document.querySelector(".cuerpo")
var svgs=document.querySelectorAll(".esevege")
var menuItemS=document.querySelectorAll(".menu_itemS")
var svgsS=document.querySelectorAll(".svgSlider")
var absoluto1=document.querySelector(".absolutoMenu")
var absoluto2=document.querySelector(".absoluto2")
var texto_obras=document.querySelector(".texto_obras")
var tarjetas=document.querySelectorAll(".tarjeta")
var titulObras=document.querySelector(".texto_obras h2")
var subObras=document.querySelector(".texto_obras h4")
botonLight.addEventListener("click", function()
{
    texto_obras.classList.toggle("texto_obrasColor")
    absoluto1.classList.toggle("absoluto1Oscuro")
    absoluto2.classList.toggle("absoluto2black")
    botonLight.classList.toggle("focoApagado")
    body.classList.toggle("cuerpoNegro")
    titulObras.classList.toggle("menuItemsDark")
    subObras.classList.toggle("menuItemsDark")
    for(let i=0;i<menuItem.length;i++)
    {
        menuItem[i].classList.toggle("menuItemsDark")
    }
    for(let i=0;i<svgs.length;i++)
    {
        svgs[i].classList.toggle("svgdark")
    }
    for(let i=0;i<menuItemS.length;i++)
    {
        menuItemS[i].classList.toggle("menuItemsSlider")
    }
    for(let i=0;i<svgsS.length;i++)
    {
        svgsS[i].classList.toggle("svgsDark")
    }
    for(let i =0;i<tarjetas.length;i++)
    {
        tarjetas[i].classList.toggle("tarjetaDark")
    }
})