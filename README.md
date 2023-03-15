<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://sujanbyanjankar.com.np/wp-content/uploads/2019/09/javascript.png" width="200" alt="JS Logo" /></a>
</p>

[circleci-image]: https://sujanbyanjankar.com.np/wp-content/uploads/2019/09/javascript.png
[circleci-url]: https://sujanbyanjankar.com.np/wp-content/uploads/2019/09/javascript.png

## Descripción

[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript).

## Correr la app

```bash
# development
Copiar el enlace del archivo index.html y abrir en su navegador o simplemente arrastrarlo.
```

## Soporte

(https://developer.mozilla.org/en-US/docs/Web/JavaScript).

## Ejercicios Finvoice

## El desafío consiste en:

➔ Imprimir números impares mayores a 100 y menores a 150, EJM. 101,103,105,107, n... 

➔ Crea una función que permita sumar, restar, multiplicar y dividir. Los valores para calcular deben ser enviados mediante inputs que solo permitan números enteros, el evento se iniciará a la pulsación de un botón llamado "calcular", Imprimir resultados por pantalla.

➔ ¿Qué significa HTML, y cuál es su estructura básica?

➔ A partir del siguiente listado filtre los vehículos que tengan una capacidad mayor a 10 y sean de color azul.

```javascript
  
  let vehiculo = [
  {"color": "rojo","marca": "bmw","capacidad": 11},
  {"color": "azul","marca": "fiat","capacidad": 2},
  {"color": "negro","marca": "hyundai","capacidad": 6},
  {"color": "amarillo","marca": "jeep","capacidad": 15},
  {"color": "azul","marca": "citroen","capacidad": 20},
  {"color": "azul","marca": "renault","capacidad": 12},
  {"color": "rojo","marca": "ford","capacidad": 4},
  {"color": "gris","marca": "toyota","capacidad": 8}
  ];
  
```

* Para resolver el primer ejercicio se implemento un ciclo for iniciado en 101, que aumenta de a 2 e indicando su limite en 150. Finalmente imprimir por consola mediante console.log mi variable iteradora "i"
 
* Para el segundo ejercicio se utilizaron inicialmente dos inputs para los números con los cuales se realizan las operaciones, un tag select con options para cada tipo de operación solicitada ( + - * / ), un botón "calcular" con el cual se dispara el evento es decir el ejercicio matemático. Se utilizó el método querySelector de JS para capturar por ID al botón, agregandole también un addEventListener para registrar el evento "click", se agrega como segundo parámetro de este método una función callback, dentro de ésta se capturan los valores de los dos inputs por ID mediante querySelector (num1 y num2) como tambien la operación a realizar (op) y el resultado (res). Con una serie de condicionales if y else if se indica que ejercicio matemático corresponde y se reasigna a res con el resultado de éste.
 Para imprimir por pantalla el resultado se captura un tag h3 por ID con un querySelector y aplicando el método innerHTML se establece el nuevo elemento.

* El tercer ejercicio está definido como comentario en el archivo app.js 

* Para el último ejercicio se utilizó una variable y el método filter de arrays y así almacenar dentro de ésta los vehículos que cumplen las condiciones establecidas en la función. Finalmente solo imprimir por consola con console.log mi array filtrado.
