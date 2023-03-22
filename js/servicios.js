var framing =
    `[
    {
        "texto":"AISLACION ACUSTICA",
        "icono":"recursos/sf/aislacion.webp"
    },

    {
        "texto":"AHORRO ENERGETICO",
        "icono":"recursos/sf/energia.webp"
    },

    {
        "texto":"AISLACION TERMICA",
        "icono":"recursos/sf/termica.webp"
    },

    {
        "texto":"MAYOR SOLIDEZ",
        "icono":"recursos/sf/solidez.webp"
    },

    {
        "texto":"VELOCIDAD DE ARMADO",
        "icono":"recursos/sf/rapidez.webp"
    },
    {
        "texto":"ALTA DURABILIDAD",
        "icono":"recursos/sf/durabilidad.webp"
    }

]
`
var electricidad = `[
    
    {
        "texto":"FLEXIBILIDAD Y ADAPTABILIDAD",
        "icono":"recursos/electricidad/flex.png"
    },
    {
        "texto":"AHORRO ENERGETICO",
        "icono":"recursos/sf/energia.webp"
    },
    {
        "texto":"CALIDAD Y SEGURIDAD",
        "icono":"recursos/electricidad/calidad.png"
    },
    {
        "texto":"SOLUCIONES PERSONALIZADAS",
        "icono":"recursos/electricidad/personalizada.png"
    },
    {
        "texto":"ELECTRICISTAS EXPERTOS",
        "icono":"recursos/electricidad/expertos.png"
    },
    {
        "texto":"CERTIFICACION ELECTRICA",
        "icono":"recursos/electricidad/certificacion.png"
    }
 ]`
var aire = `[
    
    {
        "texto":"INSTALACIONES SEGURAS Y CONFIABLES",
        "icono":"recursos/aires/seguridad.png"
    },
    {
        "texto":"TECNICOS ALTAMENTE CAPACITADOS",
        "icono":"recursos/electricidad/expertos.png"
    },
    {
        "texto":"REDUCCION DE CONSUMO ELECTRICO",
        "icono":"recursos/sf/energia.webp"
    },
    {
        "texto":"CUMPLIMIENTO DE NORMAS",
        "icono":"recursos/aires/iso.png"
    }
 ]`
var seguridad = `[
    
    {
        "texto":"VIGILANCIA CONSTANTE",
        "icono":"recursos/imagenes/CAM.SEG.png"
    },
    {
        "texto":"MONITOREO REMOTO",
        "icono":"recursos/camaras/monitor.png"
    },
    {
        "texto":"PREVENCION DE ROBOS",
        "icono":"recursos/camaras/robos.png"
    },
    {
        "texto":"CALIDAD EN VIDEO E IMAGENES",
        "icono":"recursos/camaras/hd.png"
    },
    {
        "texto":"INSTALACION RAPIDA",
        "icono":"recursos/camaras/instalacion.png"
    }
 ]`
var termotanque = `[
    
    {
        "texto":"AHORRO DE ENERGIA",
        "icono":"recursos/sf/energia.webp"
    },
    {
        "texto":"RAPIDA AMORTIZACION",
        "icono":"recursos/termotanque/amortizacion.png"
    },
    {
        "texto":"LARGA VIDA UTIL",
        "icono":"recursos/termotanque/vida-util.jpg"
    },
    {
        "texto":"INSTALACION SENSCILLA",
        "icono":"recursos/sf/rapidez.webp"
    },
    {
        "texto":"PORTEGE EL MEDIO AMBIENTE",
        "icono":"recursos/termotanque/medio-ambiente.png"
    }
 ]`
var paneles = `[
    
    {
        "texto":"NO CONSUME COMBUSTIBLE",
        "icono":"recursos/termotanque/medio-ambiente.png"
    },
    {
        "texto":"SON ESTATICOS Y SILENCIOSOS",
        "icono":"recursos/sf/aislacion.webp"
    },
    {
        "texto":"FACIL INSTALACION",
        "icono":"recursos/sf/rapidez.webp"
    },
    {
        "texto":"REQUIEREN MANTENIMIENTO MINIMO",
        "icono":"recursos/electricidad/personalizada.png"
    },
    
    {
        "texto":"AHORRO ECONOMICO",
        "icono":"recursos/termotanque/amortizacion.png"
    }
 ]`

var tarjetas = document.querySelectorAll(".tarjeta")
for (let i = 0; i < tarjetas.length; i++) {
    tarjetas[i].addEventListener("click", function (event) {
        switch (i) {
            case 0:
                div1()
                break;
            case 1:
                div2()
                break;

            case 2:
                div3()
                break;
            case 3:
                div4()
                break;
            case 4:
                div5()
                break;
            case 5:
                div6()
                break;


        }

    })
}
function div1() {
    const texto = "El Steel Framing es un sistema constructivo que utiliza perfiles de acero galvanizado para formar la estructura de una edificación. Es más ligero, resistente y duradero que los sistemas tradicionales de construcción, y es más eficiente en términos energéticos y de tiempo de construcción. Ofrece una mayor flexibilidad en el diseño de la estructura, lo que permite construir edificios de formas y tamaños diversos, adaptándose a las necesidades de cada proyecto. Además, permite la incorporación de aislantes térmicos y acústicos en el interior de los perfiles, lo que lo hace ideal para proyectos que requieren una alta eficiencia energética. En términos de seguridad, el Steel Framing es altamente resistente al fuego y a los terremotos, y también es altamente resistente a la humedad, por lo que es una opción atractiva para proyectos que requieren una mayor protección estructural en zonas con alta exposición a la lluvia y la humedad. En resumen, el Steel Framing es una excelente opción constructiva moderna y eficiente para proyectos de construcción."
    const imagen = "url(recursos/imagenes/framing.jpg)"
    crearDiv("STEEL FRAMING", texto, framing, imagen)
}
function div2() {
    const texto = "La instalación eléctrica es crucial para suministrar energía eléctrica a todos los sistemas y equipos eléctricos de un edificio, y debe ser segura, confiable y eficiente. En su sección de instalación eléctrica, ofrecen servicios profesionales de instalación, mantenimiento y reparación de sistemas eléctricos para todo tipo de edificaciones, cumpliendo con todas las normativas y estándares de seguridad eléctrica y utilizando materiales de alta calidad. También ofrecen servicios de instalación de sistemas de iluminación LED y asesoramiento en la selección de equipos y sistemas eléctricos eficientes y rentables. En resumen, si necesitas una instalación eléctrica segura y eficiente, contáctalos para obtener servicios profesionales."
    const imagen = "url(recursos/imagenes/panel.jpg)"
    crearDiv("ELECTRICIDAD", texto, electricidad, imagen)
}
function div3() {
    const texto = "La instalación de un sistema de aire acondicionado es fundamental para garantizar el confort en los ambientes. En su sección de instalación de aire acondicionado, ofrecen un servicio completo que incluye la selección del equipo adecuado, instalación y puesta en marcha. Su equipo de expertos trabaja bajo las buenas prácticas de refrigeración para garantizar la eficiencia y durabilidad del equipo. También se enfocan en detectar fugas de gas y realizan un proceso de vacío antes de cargar los gases necesarios. Ofrecen garantía sobre todos los trabajos realizados y aseguran un sistema de aire acondicionado de calidad y eficiente para garantizar el confort de sus clientes."
    const imagen = "url(recursos/imagenes/aire.jpg)"
    crearDiv("AIRES ACONDICIONADOS", texto, aire, imagen)
}
function div4() {
    const texto = "La sección de instalación de cámaras de vigilancia se enfoca en brindar un servicio completo y personalizado que garantice la seguridad y tranquilidad de los clientes. Utilizan materiales de primera marca y un equipo de expertos altamente capacitados para garantizar el correcto funcionamiento y eficacia de los sistemas instalados. Cumplen con los más altos estándares de calidad y seguridad, ofrecen mantenimiento y reparación de los equipos instalados y garantizan la protección de las personas y las instalaciones."
    const imagen = "url(recursos/imagenes/camara.jpg)"
    crearDiv("CAMARAS DE SEGURIDAD", texto, seguridad, imagen)
}
function div5() {
    const texto = "La instalación de termotanques solares utiliza la energía solar para calentar el agua en hogares o establecimientos comerciales. Los paneles solares capturan la energía del sol y la transfieren al tanque de almacenamiento donde se guarda el agua caliente. Esta alternativa es más amigable con el medio ambiente y ahorra energía. Además, estos sistemas son duraderos y requieren poco mantenimiento. La instalación del sistema incluye la evaluación del lugar, la selección del sistema adecuado, la colocación de los paneles y la conexión al tanque y a la red de agua. Es esencial contar con personal capacitado y experimentado para garantizar una instalación segura y eficiente."
    const imagen = "url(recursos/imagenes/termo.jpg)"
    crearDiv("TERMOTANQUES SOLARES", texto, termotanque, imagen)
}
function div6() {
    const texto = "La energía solar se puede convertir en energía eléctrica o en calor. Aquí nos referimos solamente a la conversión de la radiación solar en electricidad. Los paneles solares ( o módulos fotovoltaicos) son dispositivos planos, de distintas medidas, que tienen la propiedad de convertir directamente la luz solar en una corriente eléctrica continua que permite cargar una batería ,por ejemplo, de 12 Volts. Por lo general para alimentar con electricidad a una vivienda se necesitan varios paneles solares interconectados entre si. A estos paneles se los complementa con otros elementos: una estructura metálica para fijar los módulos, un regulador de carga de baterías, una o más baterías y un inversor de corriente (CC. A C.A) Al conjunto se lo denomina generador eléctrico solar (Ver esquema adjunto). Los paneles se pueden instalar sobre el techo de la vivienda o en el patio o jardín de la misma."
    const imagen = "url(recursos/imagenes/solar.jpg)"
    crearDiv("PANELES SOLARES", texto, paneles, imagen)
}

/* */

function crearDiv(titulo, parrafo, objeto, imagen) {
    const padre = document.querySelector(".cuerpo")


    var divContenedor = document.createElement("div")
    divContenedor.className = "divServiciosCard"
    divContenedor.style.backgroundImage = imagen

    var divContenedor2 = document.createElement("div")
    divContenedor2.className = "divServiciosCard2"

    var crearTitulo = document.createElement("h2")
    crearTitulo.textContent = titulo;

    var crearTexto = document.createElement("p")
    crearTexto.textContent = parrafo;

    var crearTitulo2 = document.createElement("h4")
    crearTitulo2.textContent = "BENEFICIOS"

    var botonCerrar = document.createElement("button")
    botonCerrar.className = "btnServiciosCard"
    botonCerrar.textContent = "x"
    botonCerrar.addEventListener("click", function () {
        divContenedor.remove()
    })

    var lista = document.createElement("ul")
    var listaItems = JSON.parse(objeto)
    for (let i = 0; i < listaItems.length; i++) {
        var item = document.createElement("li");
        var icono = document.createElement("img");
        icono.setAttribute('src', listaItems[i].icono);
        item.appendChild(icono);
        var texto = document.createElement("span");
        texto.textContent = listaItems[i].texto;
        item.appendChild(texto);
        lista.appendChild(item);
    }

    divContenedor.appendChild(divContenedor2)
    divContenedor2.appendChild(botonCerrar)
    divContenedor2.appendChild(crearTitulo)
    divContenedor2.appendChild(crearTexto)
    divContenedor2.appendChild(crearTitulo2)
    divContenedor2.appendChild(lista)

    padre.appendChild(divContenedor)
}