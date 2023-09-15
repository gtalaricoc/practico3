

# Juego Piedra, Papel o Tijera en REACT!!!!

_Se crea el famoso juego Piedra Papel o Tijera!! con la librería React._

## Comenzando 🚀

El juego de Piedra, Papel o Tijera que habiamos realizado en el practico2 se va a crear con la librería React.

### Pre-requisitos 📋

_Vamos a crear el proyecto por Github y utilizamos el VSCode para desarrollar el código. 

_En Github se crea el repositorio Practico3 y seguimos los pasos siguientes en el terminal de Gitbash en VSCode:

git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/gtalaricoc/practico3.git
git push -u origin main

También debemos importar el programa de react por el comando "npx create.react.app .", una vez instalado empezamos a desarrollar el practico3.

### Desarrollo 🔧

Se crean los componentes necesarios para realizar el juego:

OpcionJugador.js aqui el jugador podrá seleccionar su opción de piedra, papel o tijera.
OpcionPc.js la Pc hace la seleccion de la jugada de piedra, papel o tijera de manera aleatoria o random.
Opcion.js 

## Como operar el Juego Piedra Papel o Tijera📦

Una vez que tengamos el proyecto en código completado procedemos a realizar el Juego:

- En el cuadro se procede a colocar tu nombre y luego se presiona el botón de "Saludar", después se visualiza el mensaje de bienvenida con tu nombre.
- Se leen las instrucciones.
- Tienes 3 botones para escoger: Piedra, Papel o Tijera, se presiona uno de ellos para empezar turno.
- Se deben ganar 3 partidas para ser el ganador del juego, las jugadas máximas entre jugador y computadora son 5 ya que lo máximo que se verá son 3 y 2 partidas ganadas entre ambos.
- Debajo de los botones se van a visualizar tanto tu jugada escogida como la jugada de la computadora.
- Se va a ver el mensaje de quien ganó la jugada o si resultó empate.
- Automaticamente vas a ver en el marcador la cantidad de puntos entre el Jugador y la Computadora.
- Una vez al llegar a 3 partidas ganadas por parte del jugador o la computadora se declara al ganador con un mensaje y se desabilita los mensajes de puntos obtenidos.
- Por último se activa el botón de "Reiniciar" para poder limpiar y empezar el juego otra vez.

## Resumen de desarrollo e incidencias 🛠️

* Html5: se hace básico que contengan todas las etiquetas necesarias, Head, Main, Body. Se había colocado el link de script fuera del body y no corría bien el juego y luego se corrigío y se incluyó dentro ahora funcionando bien. Todos los demás elementos se fueron revisando uno por uno para dar el formato a la página. Se necesitó ayuda en google para poder implementar el ingreso del nombre de la persona que va a jugar. 

* CSS: se revisa la página uno por uno de los elementos y se le configura el estilo detalladamente.

* Javascript: Se procede a elaborar la mayoría de las variables con Let para ya tenerlas configuradas para su uso mas adelante. Se utilza el getElemenByID revisando en Html que esten bien los string que se toman mediando el código "ID". Además se colocan las formulas necesarias y los condicionales con If else para obtener los resultados necesarios. Todos estos explicados en la plantilla de Javascript.

## Ejecutando las pruebas ⚙️

_Una vez desarrollados los códigos en cada una de las plantillas se detallan algunas pruebas realizadas:_

* Nombre: se coloca el nombre de la persona y al presionar el botón aparece el mensaje de bienvenida "!Hola + El nombre de la persona + Bienvenida".
No se colocó nombre y se dejó el campo vacío y aparece una ventana diciendo "Por favor, ingrese su nombre" y presionar Aceptar.

* Instrucciones: es un mensaje en H1 estatico que se coloca el color.

* Marcador: se hacen pruebas para ir visualizando el marcador y tiene respuestas exitosas ya que ganador alcanza hasta 3 puntos y se detiene el juego.

* Elige tu figura: Se realizan varias pruebas presionando las figuras siendo el jugador, se reseña sobre una de las pruebas: 

- Jugador: Usaste=> Piedra, Pc usó: Tijera.  Mensaje: Ganaste un punto
- Jugador: Usaste=> Tijera, Pc usó: Tijera.  Mensaje: Empate
- Jugador: Usaste=> Piedra, Pc usó: Piedra.  Mensaje: Empate
- Jugador: Usaste=> Papel,  Pc usó: Piedra.  Mensaje: Ganaste un punto
- Jugador: Usaste=> Papel,  Pc usó: Tijera.  Mensaje: Computadora ganó un punto
- Jugador: Usaste=> Piedra, Pc usó: Tijera.  Mensaje: Ganaste el Juego

* Al ganar el juego se desabilitan el click de los botones de piedra papel o tijera, se ponen invisibles los puntos y se activa el botón de reiniciar, visualizandose el mensaje de Ganaste el Juego o La computadora ganó el Juego. 
* Una vez terminado se presiona el botón de reiniciar y resetean los valores a 0.

## Construido con 🛠️

_Estos son varias páginas web que ayudaron como referencias a construir el proyecto:_

* [TutorialMarkdown] https://tutorialmarkdown.com/emojis - Emojis para Markdown.
* [dofactory] https://www.dofactory.com/css/ - Turoriales, ejemplos y codigos Css.
* [W3School] https://www.w3schools.com/html/ - tutorial y herramientas Html.

## Github 📖

El trabajo se puede visualizar en el repositorio gtalaricoc.github.io/sobre-mi/practico2

## Herramientas de Trabajo 📄

_Se realiza este proyecto con las siguientes herramientas_

* Visual Studio Code
* Github
* Gitbash
* Explorador Chrome
* Plataforma Windows 11

## Expresiones de Gratitud 🎁

* Gracias a la oportunidad que me dan de realizar este curso en ArgentinaPrograma y a la UNC
* La realización del curso es gracias a el profesor Ignacio Moretti: imoretti@unc.edu.ar. y tutor Nehuen Aramburu: nehuen.aramburu@mi.unc.edu.ar que nos dan el apoyo necesario para aprender.

---
⌨️ por [gtalaricoc](https://github.com/gtalaricoc) 


Primero se hacen todos los pasos para importar el React en el VSCode


* Se crean los componentes necesarios para poder realizar el juego


* Ingresar imagenes a botones del componente OpcionJugador
Después de haber creado el componente de OpcionJugador se crea una carpeta en *public* que se llama *imagenes* allí colocamos las imagenes .png que necesitamos de piedra.png, papel.png y tijera.png






# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
