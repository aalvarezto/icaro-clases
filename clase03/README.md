# Introducción a la Programación

## Clase 3

22-03-2022

Si bien la clase fue párctica, esta clase vimos temas que quedaron un poco "colgados" de la clase anterior, como por ejemplo:

-   Modulos

    -   **_ES modules:_**

        -   Exportación

            ```js
            // en un archivo sumar.js
            function sumar(a, b) {
            	return a + b
            }

            export { sumar }
            ```

        -   Importación

            ```js
            // en el archivo index.js
            // que en lo posible que esté en el mismo directorio
            import { sumar } from "./sumar.js"

            var resultado = sumar(1, 1)

            console.log(resultado) // 2
            ```

    -   **_CommonJS:_**

        -   Eportación

            ```js
            // en un archivo sumar.js
            function sumar(a, b) {
            	return a + b
            }

            module.exports = { sumar }
            ```

        -   Importación

            ```js
            // en el archivo index.js
            // que en lo posible que esté en el mismo directorio
            var { sumar } = require("./sumar.js")

            var resultado = sumar(1, 1)

            console.log(resultado) // 2
            ```

#### ¡¡**Importante** para **_ESModules_**!!

Recordar ejecutar el comando:

    $ npm ini -y

y en el archivo creado por node (**_package.json_**) insertar lo siguiente:

```json
{
	"type": "module"
}
```

### App Para Calcular

Les hice un programa para ejecutar sus funciones creadas para ingresar desde la línea de comandos.

La app funciona como si una empresa los contratara y les pidiera que implementen algunas funcionalidades para su modelo de negocios (en este caso la empresa se dedicaría a la aritmética al parecer...).

A ustedes les piden implementar las funciones de:

-   Sumar
-   Restar
-   Multiplicar
-   Dividir

La empresa pide también aplicar ciertos criterios de escalabilidad y buenas prácticas.

Las funciones son las mismas que vimos en la clase del taller, y solamente tienen que colocar sus archivos en la carpeta `./operadoresMatematicos` y exportar las funciones desde el archivo `index.js`

#### **ACLARACIÓN IMPORTANTE**

Sí o sí, sus archivos tienen que estar dentro de la carpeta `./operadoresMatematicos` y tienen que tener los siguientes nombres `dividir.js`, `multiplicar.js`, `restar.js` y `sumar.js`, con sus respectivas funciones creadas y exportadas con los mismo nombres, todo con la sintaxis de ESModules.

Si no se sigue correctamente este paso, puede haber errores para correr el programa.

Cuidado con las mayúsculas, evitarlas en lo posible.

#### Directorio de archivos

```
- project
|
│   - appParaCalcular
|
│   - operadoresMatematicos
│   │
│   │   - dividir.js
│   │   - index.js
│   │   - multiplicar.js
│   │   - restar.js
│   │   - sumar.js
│
|   - app.js
```

#### Requerimientos

Alguna versión de Node.js, por ejemplo:

    $ node -v
    v14.8.0

#### Comandos

    $ npm install

    $ node app.js

### Leer Archivos MD (recomendado)

Para leer correcatamente este archivo ser recomienda utilizar un `Mark Down Previewer`

1 - En Visual Studio Code primero apretar:

    ctrl + shift + p

2 - Luego escribir (o pegar):

    Markdown: Open Preview

3 - Opcional:

    ctrl + shift + v
    ctrl + k (soltar y después) v
