# Introducción a la Programación

## Clase 3

29-03-2022

El video de la clase está subido y puede reveerlo quien guste, así y todo algunos temas quizás se entiendan mejor con algunas líneas de texto que sirvan como material de lectura.

Vale la pena aclarar que este material es simplemente complementario.

### Truthy & Falthy

Existe una función en JavaScript que nos va a ayudar a saber que valores son "truthy" o "falthy". Esta función en cuestión es `Boolean()`. Esta función evalúa lo que coloquemos en su interior y nos devuelve como resultado `true` o `false`.

-   Valores **"truthy"**:

    ```js
    const truthyValues = [
    	Boolean(true),
    	Boolean(" "),
    	Boolean(1),
    	Boolean([]),
    	Boolean({}),
    	Boolean(function name() {}),
    	Boolean(new Date()),
    	Boolean(Infinity),
    ]
    ```

-   Valores **"falsy"**:

    ```js
    const falsyValues = [
    	Boolean(false),
    	Boolean(""),
    	Boolean(0),
    	Boolean(-0),
    	Boolean(NaN),
    	Boolean(null),
    	Boolean(undefined),
    ]
    ```

### Short Cicuit VS If/Else

Los corto circuitos son una funcionalidad de JavaScript que nos permite crear lógicas muy similares a las que podemos crear con operadores de `if` y `else`.

El operador comienza a evaliar el código de izquierda a deracha y obtenemos en principio dos evaluaciones:

```js
primera evaluación || segunda evaluación

primera evaluación && segunda evaluación
```

Tanto el operador `or` como el operador `and` evalúa el primer valor para saber si es **"truthy"** o **"falsy"**.

En el caso de `or` este operador evalúa el primer valor (el de la izquierda), si este resulta ser **"falsy"** el operador continúa evaluando y nos devuelve el segundo valor (el de la derecha).

Si el primer valor es **"truthy"** el operador `or` corta la evaluación y nos retorna el valor evaluado.

```js
let casoOr

casoOr = false || "entrego este string"
casoOr = "entrego este string" || false

// Lo de arriba es equivalenta a esto 👇

let casoOrConIf

// casOrConIf = false || "entrego este string"
if (false) {
	casoOrConIf = false
} else {
	casoOrConIf = "entrego este string"
}

// casoOr = "entrego este string" || false
if ("entrego este string") {
	casoOrConIf = "entrego este string"
} else {
	casoOrConIf = false
}

// versión en ternarios
casoOrConIf = false ? false : "entrego este string"
casoOrConIf = "entrego este string" ? "entrego este string" : false
```

En el caso de `and` este operador evalúa el primer valor, si este resulta ser **"truthy"** el operador continúa evaluando y nos devuelve el segundo valor.

Si el primer valor es **"falsy"** el operador `or` corta la evaluación y nos retorna el valor evaluado.

```js
let casoAnd

casoAnd = "soy truthy, retorno el valor de al lado" && false
casoAnd = false && "soy truthy, retorno el valor de al lado"

// Lo de arriba es equivalenta a esto 👇

let casoAndConIf

// casoAndConIf = "soy truthy, retorno el valor de al lado" && false
if ("soy truthy, retorno el valor de al lado") {
	casoAndConIf = false
} else {
	casoAndConIf = "soy truthy, retorno el valor de al lado"
}

// casoAnd = "entrego este string" && false
if (false) {
	casoAndConIf = "soy truthy, retorno el valor de al lado"
} else {
	casoAndConIf = false
}

// versión en ternarios
casoAndConIf = "entrego este string" ? false : "entrego este string"
casoAndConIf = false ? "entrego este string" : false
```

#### ¿Para qué sirve esto?

Los short circuits tienen gran aceptación en el uso cotidiano de los desarrolladores. Eso quiere decir que no va a resultar extraño encontrarse con este tipo de sintaxis en el día a día.

Su correcto uso nos permite escribir algunas lógicas con menos texto, así y todo eso no siempre es deseable. Siempre hay que tener en cuenta que se puede ser más prolijo simplemente utilizando `else` e `if` por mucho que "engorde" nuestro código.

Los casos de uso más comunes son cuándo no sabemos si una propiedad (key) de un objeto existe, entonces podemos usar la siguiente lógica.

```js
const { data } = await getUsuarioAPI()

const nombreDeUsuario = data.nombre || "Usurio"
```

Este es un caso muy típico cuando trabajamos con APIs, muchas veces las APIs no nos devuelven los datos de forma completa y nos retornan `null`, `undefined` o simplemente `""`.

En este caso estamos pasando como valor por defecto el string `"Usuario"`.

### Leer Archivos MD (recomendado)

Para leer correcatamente este archivo ser recomienda utilizar un `Mark Down Previewer`

1 - En Visual Studio Code primero apretar:

    ctrl + shift + p

2 - Luego escribir (o pegar):

    Markdown: Open Preview

3 - Opcional:

    ctrl + shift + v
    ctrl + k (soltar y después) v
