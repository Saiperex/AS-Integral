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
const facebook=document.querySelector(".fa-square-facebook")
const instagram=document.querySelector(".fa-square-instagram")
const whatsapp=document.querySelector(".fa-square-whatsapp")
facebook.addEventListener("click",function()
{
    window.open("https://www.facebook.com/profile.php?id=100083051043360")
})
instagram.addEventListener("click",function()
{
    window.open("https://www.instagram.com/as_serv.integrales/?igshid=MTA2NDdkNWE%3D")
})
whatsapp.addEventListener("click",function()
{
    window.open("https://wa.me/+5493518581248")
})