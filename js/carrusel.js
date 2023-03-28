/*var lista=document.querySelectorAll(".galeria img")
const ste=["STE/ste(1).jpg","STE/ste(2).jpg","STE/ste(3).jpg","STE/ste(4).jpg","STE/ste(5).png"]
const aa=["AA/aa-1(1).jpeg","AA/aa-1(2).jpg","AA/aa-1(3).jpg","AA/aa-1(4).jpg"]
const ele=["ELE/ele(1).jpg","ELE/ele(2).jpg","ELE/ele(3).jpg","ELE/ele(4).jpg","ELE/ele(5).jpg","ELE/ele(6).jpg","ELE/ele(7).jpg","ELE/ele(8).jpg"]
const pan=["PAN/pan(1).jpg","PAN/pan(2).jpg","PAN/pan(3).jpg"]
const seg=["SEG/seg(1).jpg","SEG/seg(2).jpg","SEG/seg(3).jpg","SEG/seg(4).jpg","SEG/seg(5).jpg","SEG/seg(6).jpg","SEG/seg(7).jpg"]
const ter=["TER/ter(1).jpg","TER/ter(2).jpg","TER/ter(3).jpg","TER/ter(4).jpg","TER/ter(5).jpg"]
let punteroSTE=0;
let punteroAA=0;
let punteroELE=0;
let punteroPAN=0;
let punteroSEG=0;
let punteroTER=0;
function cambiar() 
{
    lista[0].setAttribute('src', "recursos/"+seg[punteroSEG]);
    punteroSEG = punteroSEG + 1;
    if (punteroSEG >(seg.length-1)) {
        punteroSEG = 0;
    }

    lista[1].setAttribute('src', "recursos/"+ter[punteroTER]);
    punteroTER = punteroTER + 1;
    if (punteroTER > (ter.length-1)) 
    {
        punteroTER = 0;
    }

    lista[2].setAttribute('src', "recursos/"+ste[punteroSTE]);
    punteroSTE = punteroSTE + 1;
    if (punteroSTE > (ste.length-1)) 
    {
        punteroSTE = 0;
    }
    lista[3].setAttribute('src', "recursos/"+pan[punteroPAN]);
    punteroPAN = punteroPAN + 1;
    if (punteroPAN > (pan.length-1)) {
        punteroPAN = 0;
    }
    lista[4].setAttribute('src', "recursos/"+ele[punteroELE]);
    punteroELE = punteroELE + 1;
    if (punteroELE > (ele.length-1)) {
        punteroELE = 0;
    }
    lista[5].setAttribute('src', "recursos/"+aa[punteroAA]);
    punteroAA = punteroAA + 1;
    if (punteroAA > (aa.length-1)) {
        punteroAA = 0;
    }
}
setInterval(cambiar,5000)*/
const lis = document.querySelectorAll('.clientes li');

const options = {
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, options);

lis.forEach(li => {
  observer.observe(li);
});