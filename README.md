# My Tinerary

## Tabla de contenido
- [Pautas generales](#pautas-generales)
- [Requisitos mínimos](#requisitos-mínimos)

# Pautas generales

- El objetivo de este sprint es crear la página de inicio de la aplicación *MyTinerar* (atención a no deformar el nombre porque pierde sentido el juego de palabras).
- Deben crear un repositorio **PÚBLICO** en github. El repositorio debe llamarse
mytinerary-nombreApellido.
- El repositorio debe ser pusheado antes del horario de entrega, los mentores realizarán el último pull y el estado evaluable del repositorio será el de ese momento. Se sugiere realizar pusheos diarios para incorporar Git a la rutina de trabajo e ir identificando problemas y errores en el uso de la herramienta.
- Durante el día se procederá a la corrección de cada trabajo. Para obtener un MVP se deben cumplimentar todas las consignas aquí especificadas. Incumplir algunos de los criterios evaluatorios implica un NO-MVP.
- La interfaz de toda la aplicación de **MyTinerary** debe estar en idioma **inglés** (verificar el correcto uso de palabras, expresiones, etc; evitar traducciones literales no verificadas). El código (nombre de funciones, variables, comentarios, etc) puede estar en inglés o en español (**evitar la mezcla**).
- El no respeto a los requisitos del MVP por falta de lectura, falta de cross-check (o hecho de manera deficiente), etc. los hará incurrir en un NO-MVP.

# Requisitos mínimos

La página de inicio de MyTinerary debe contener:
- El producto debe ser full responsive y mantener en todas las resoluciones una experiencia de usuario intuitiva, ágil y accesible.
- **Header**:
    - **Optativo**: logo y nombre de aplicación.
    - **Obligatorio**: menú lateral con opciones. Debe figurar en el header también una imagen de usuario genérico (significa que no hay nadie logueado). Los links y la imagen por ahora no deben dirigir a ningún lado ni efectuar ninguna acción; excepto el link de Cities que debe estar funcional y linkear a una página vacía donde irá el buscador de Ciudades. A esta página (Cities) se accede tanto del menú como del call to action.
- **Hero/Welcome**: con buena estética debemos mostrar y resaltar el nombre de la app MyTinerary y el slogan "*Find your perfect trip, designed by insiders who know and love their cities!*".
- **Call to Action**: de alguna manera llamativa debemos **invitar al usuario**, a través de algún icono y acompañado de alguna frase, **a clickear** para acceder a la página de Cities. Complementar con imágenes, animaciones, darle atractivo.
- **Footer**: recapitular la información del sitio, debería contener otro menú de navegación para facilitarle la vida al usuario, e información diversa a criterio de ustedes (direccion, redes sociales, mapa, lo que quieran).
- **Carrousel**: debe haber un carrusel que cambie las slides de forma automática (y que 
permita también al usuario cambiarla de forma manual). El carrusel debe tener el título 
"***Popular Mytineraries***" y debe contener 3 slides de 4 fotos cada una.  
Cada foto debe corresponder a una ciudad del mundo y debe estar su nombre indicado 
en ella (nombre en inglés). Son 12 ciudades repartidas en 3 slides de 4 fotos c/u. Esta 
información puede estar hardcodeada en el componente dado que aún no disponemos de base de datos. Lo que sí, su renderizado debe ser DINÁMICO (no puede estar hardcodeado el código que muestra las slides con sus fotos).



