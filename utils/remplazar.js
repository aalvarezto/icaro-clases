"use strict"

/**
 *
 * @param {String} texto Texto que queremos colocar en un lugar determinado
 * @param {String} objetivo Lugar donde queremos colocar el texto
 * @param {String} string Cadena de texto total
 * @returns {String} String con el reemplazo realizado
 * 
```js

const cantidad = "20"
const estudiantes = "{estudiantes}"
const cadenaDeTexto = "Número de estudiantes: {estudiantes}"

const ejemplo = reemplazar(cantidad, estudiantes, cadenaDeTexto)

console.log(ejemplo) // Número de estudiantes: 20
```
*/

const reemplazar = (texto, objetivo, string) => string.replace(objetivo, texto)

module.exports = reemplazar
