const EnviarFormulario=document.querySelector(".EnviarFormulario")
EnviarFormulario.addEventListener("click",function()
{
    sel=espacios()
    n=document.getElementById("nombre").value
    e=document.getElementById("email").value
    t=document.getElementById("numero").value

    if(n.trim().length>0 && e.trim().length>0 && t.trim().length>0 )
    {
        window.open("https://wa.me/+5493518581248?text=Mensaje%20de:%20"+n+"%0AAsunto:%20"+sel+"%0AE-Mail:%20"+e+"%0ATelefono:%20"+t);
    }
    else
    {
        alert("Hay campos que no lleno. Llenelos para continuar");
    }
})
function espacios()
{
    var select=document.getElementById("select")
    var texto=select.options[select.selectedIndex].text;
    if(texto.includes(" "))
    {
        texto = texto.replaceAll(" ","%20")
    }
    return texto;
}