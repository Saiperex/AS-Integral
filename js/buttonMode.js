var botonLight=document.querySelector(".fa-lightbulb")
var menuItem=document.querySelectorAll(".menu_item")
var body=document.querySelector(".cuerpo")
var svgs=document.querySelectorAll(".esevege")
var menuItemS=document.querySelectorAll(".menu_itemS")
var svgsS=document.querySelectorAll(".svgSlider")
botonLight.addEventListener("click", function()
{
    botonLight.classList.toggle("focoApagado")
    body.classList.toggle("cuerpoNegro")
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
})