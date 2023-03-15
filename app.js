// Función para imprimir números impares del 100 al 150
let numImpar = () => {
    console.log("Números impares del 100 al 150:");
    for (let i = 101; i <= 150; i += 2) {
        console.log(i)
    }
}
numImpar();

// Función para controlar lo que se ingresa en el input

function inputControl(event) {

    let e = event || window.event;
    let key = e.keyCode || e.which;

    if (key === 189 || key === 110 || key === 190 || key === 188 || key == 107) {
        e.preventDefault();
    }
}

/*// Definición y estructura de HTML //
HTML: siglas en inglés de HyperText Markup Language ( "lenguaje de marcado de hipertexto" ), 
hace referencia al lenguaje de marcado para la elaboración de páginas web.
La estructura HTML de una página web se compone de las etiquetas 
<html>, que indica el comienzo de la página; 
<head>, que contiene información más descriptiva sobre el sitio; y 
<body>, que conforma todos los elementos visibles de la página.
*/

// Listado de vehículos y función para filtrar por "color": "azul" y "capacidad": > 10
let vehiculo = [
    { "color": "rojo", "marca": "bmw", "capacidad": 11 },
    { "color": "azul", "marca": "fiat", "capacidad": 2 },
    { "color": "negro", "marca": "hyundai", "capacidad": 6 },
    { "color": "amarillo", "marca": "jeep", "capacidad": 15 },
    { "color": "azul", "marca": "citroen", "capacidad": 20 },
    { "color": "azul", "marca": "renault", "capacidad": 12 },
    { "color": "rojo", "marca": "ford", "capacidad": 4 },
    { "color": "gris", "marca": "toyota", "capacidad": 8 }
];

let result = vehiculo.filter(el => {
    return el.color === "azul" && el.capacidad > 10
})

console.log("Vehículos que cumplen las condiciones:", result)

