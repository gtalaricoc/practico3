

# Juego Piedra, Papel o Tijera en REACT!!!!

_Se crea el famoso juego Piedra Papel o Tijera!! con la librería React._

## Comenzando 🚀

El juego de Piedra, Papel o Tijera que habiamos realizado en el practico2 se va a crear con la librería React, se copiaron las mismas imagenes para los botones de opción del Jugador

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

Se crean los componentes adicionales necesarios para realizar el juego:

OpcionJugador.js aqui el jugador podrá seleccionar su opción de piedra, papel o tijera.
Estilos.css para dar mejor aspecto al juego.
Se incorporan las imagenes en carpeta "Images".

En el componente principal en Src llamado App.js se desarrolla todo el código para poder realizar el juego, primero se importan la herramientos principales y componentes que se crearon; luego se crean las constantes que van a ser utilizadas mas abajo en la planilla algunos ligados al UseState, la funcionalidad de javascript y después del return todo el html necesario para dar estructura al juego.

Se tuvo problema cuando al colocar el nombre y luego la tecla Enter se reiniciaba el juego entonces se cambió en html el elemento <form></form> por un <div></div> y se resolvió.

Se creó el componente Estilos.css y Estilos.js para dar mejor aspecto al juego. 

### Aspectos a Mejorar

* Una imagen de fondo que no afecte la visualización de los textos del juego
* No dejar modificar el nombre una vez empezado el juego
* Un PopUp al inicio antes de empezar el juego diciendo las instrucciones y poder ingresar el nombre del jugado allí para dar la bienvenida.
* Un contador mas dinámico y agradable de ver de los puntos del juego.

## Como operar el Juego Piedra Papel o Tijera📦

Una vez que tengamos el proyecto en código completado procedemos a realizar el Juego:

- En el cuadro se procede a colocar tu nombre, después se visualiza el mensaje de bienvenida con tu nombre.
- Tienes 3 botones para escoger: Piedra, Papel o Tijera, se presiona uno de ellos para empezar turno.
- Se deben ganar 3 partidas para ser el ganador del juego, las jugadas máximas entre jugador y computadora son 5 ya que lo máximo que se verá son 3 y 2 partidas ganadas entre ambos.
- Debajo de los botones se van a visualizar tanto tu jugada escogida como la jugada de la computadora.
- Se va a ver el mensaje de quien ganó la jugada o si resultó empate.
- Automaticamente vas a ver la cantidad de puntos de el Jugador y la Computadora.
- Una vez al llegar a 3 partidas ganadas por parte del jugador o la computadora se declara al ganador con un mensaje.
- Por último se activa el botón de "Reiniciar" para poder limpiar y empezar el juego otra vez.


## Ejecutando las pruebas ⚙️

_Una vez desarrollados los códigos en cada una de las plantillas se detallan algunas pruebas realizadas:_

* Instrucciones: es un mensaje en H1 estatico que se coloca el color.

* Marcador: se hacen pruebas para ir visualizando el marcador y tiene respuestas exitosas ya que ganador alcanza hasta 3 puntos y se detiene el juego.

* Elige tu figura: Se realizan varias pruebas presionando las figuras siendo el jugador, se reseña sobre una de las pruebas: 

- Jugador: Usaste=> Piedra, Pc usó: Tijera.  Mensaje: Ganaste un punto
- Jugador: Usaste=> Tijera, Pc usó: Tijera.  Mensaje: Empate
- Jugador: Usaste=> Piedra, Pc usó: Piedra.  Mensaje: Empate
- Jugador: Usaste=> Papel,  Pc usó: Piedra.  Mensaje: Ganaste un punto
- Jugador: Usaste=> Papel,  Pc usó: Tijera.  Mensaje: Computadora ganó un punto
- Jugador: Usaste=> Piedra, Pc usó: Tijera.  Mensaje: Ganaste el Juego

* Una vez terminado se presiona el botón de reiniciar y resetean los valores a 0.

## Construido con 🛠️

_Estos son varias páginas web que ayudaron como referencias a construir el proyecto:_

* [TutorialMarkdown] https://tutorialmarkdown.com/emojis - Emojis para Markdown.
* [dofactory] https://www.dofactory.com/css/ - Turoriales, ejemplos y codigos Css.
* [W3School] https://www.w3schools.com/react/default.asp - tutorial y herramientas React.

## Github 📖

El trabajo se puede visualizar en el repositorio gtalaricoc.github.io/practico3

## Herramientas de Trabajo 📄

_Se realiza este proyecto con las siguientes herramientas_

* Visual Studio Code
* Github
* Gitbash
* Explorador Chrome
* Plataforma Windows 11
* npx create-react-app . (Se necesita instalarlo al principio del proyecto)
* Node 18.17.1 LTS

## Expresiones de Gratitud 🎁

* Gracias a la oportunidad que me dan de realizar este curso en ArgentinaPrograma y a la UNC
* La realización del curso es gracias a el profesor Ignacio Moretti: imoretti@unc.edu.ar. y tutor Nehuen Aramburu: nehuen.aramburu@mi.unc.edu.ar que nos dan el apoyo necesario para aprender.

---
⌨️ por [gtalaricoc](https://github.com/gtalaricoc) 





