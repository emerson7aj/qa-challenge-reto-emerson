# QA challenge

Hola, bienvenid(@) a la prueba para el puesto QA Engineer, a continuación encontrarás una serie de retos que deberás realizar, ten presente que estos no son ejercicios con respuestas válidas o inválidas, es solo para conocer tus habilidades técnicas y prácticas para manejarte en diferentes situaciones que se puedan originar en el día a día laboral.

Nota: 
Primero debes crear un documento cuyo nombre tenga el siguiente formato: qa-challenge-reto[nombre].docx y procedé a colocar allí tus respuestas.

Leer con atención el siguiente contexto:

En el área de TI de UTP surgió la necesidad de realizar un nuevo proyecto de autenticación. El Product Owner registro los siguientes requerimientos:

 - Nueva funcionalidad de login
 - Nueva funcionalidad de registro

### Historia de usuario Nro. 1
Como usuario nuevo deseo poder registrarme en la web y poder loguearme de manera satisfactoria.

### Criterios de aceptación

Los criterios de aceptación para el registro son los siguientes:
- El correo ingresado debe tener un @ para ser válido.
- La contraseña debe tener como mínimo 5 caracteres.
- El correo y la contraseña son requeridos obligatoriamente.
- El sistema debe mostrar un mensaje de error al ingresar campos no válidos.

Los criterios de aceptación para el login son los siguientes:
- El correo ingresado debe tener un @ para ser válido.
- La contraseña debe tener como mínimo 5 caracteres.
- El correo y la contraseña son requeridos obligatoriamente.
- El sistema debe mostrar un mensaje de error al ingresar campos no válidos.

El equipo de desarrollo realizo sus tareas y ahora te toca a ti certificar que dichos requerimientos se llegaron a implementar correctamente 🙌. 

** Ojo: En todos los requerimientos se debe considerar la parte front y back del sistema.

### Descarga el código
** En este repositorio se encuentra la parte front como la parte back del reto, cada una debe ser ejecutada por separado para comenzar con el challenge.
Descarga el proyecto 🗂 y levanta los servicios 🔥:

    $ git clone https://github.com/djego/recruiting-qa-challenge.git
    $ cd recruiting-qa-challenge
    $ cd back/
    $ npm run start
    $ cd ..
    $ cd front/
    $ npm run start


A continuación se hace mención de los retos:

# RETO 1

### Eres nuevo en el proyecto y te asignan la historia de usuario definida lineas arriba. Por consiguiente debes responder como procederías ante las siguientes circunstancias planteadas:

1. Describe que actividades realizarías para asegurar un optimo proceso de control de calidad para la historia de usuario asignada y el ¿porqué?.
2. Identifica y argumenta los tipos de prueba que estarías aplicando para validar los requerimientos propuestos.
3. Menciona al menos 4 tipos de técnicas de diseño de casos de prueba que usarías y describe como los estarías aplicando a tu proceso de diseño para obtener todos los casos de prueba a ejecutarse.
4. Elabora una matríz con los casos de prueba a ejecutar y argumenta cual sería el motivo del orden de la ejecución.
5. ¿Cuáles son los criterios que aplicarías para estimar los story points de tu historia de usuario siendo un nuevo miembro del equipo?
6. Identifica y registra al menos 5 bugs y 3 mejoras por requerimiento las cuales consideres que son necesarias realizarse para que pueda darse por coberturada la historia de usuario. (Eres libre de proponer una matriz y/o formato para el registro y comunicación del defecto).
7. Si el desarrollador te indica que 2 de los bugs que reportaste no aplican, Pero tu consideras que están dentro del alcance ¿Cómo procederías ante esta situación?.
8. Si para la ejecución de tus pruebas te encuentras con dependencias por accesos, por data o información y requieres del apoyo de otro miembro del equipo que no se encuentra disponible, ¿Qué acciones tomarías para resolver este bloqueante?.
9. Si durante la etapa de ejecución el Product Owner solicita cambios al requerimiento solicitado, ¿Qué considerarías tú que debes hacer?.
10. Si ya estás en el limite de la fecha programada para la entrega de tu historia de usuario y hay presión para que esta fecha se cumpla ¿Cómo procedes a actuar ante esta situación?

Nota: Coloca tus respuestas en el documento (qa-challenge-reto[nombre].docx)


# RETO 2
### 📌 Objetivo:
### Agile testing 
El proyecto considera necesario incorporar pruebas automatizadas E2E y de servicios, Para ello te solicitan desarrollar un modelo para poder iniciar con la automatización de pruebas, teniendo en cuenta las siguientes consideraciones:

1. La automatización debe considerar las buenas practicas de desarrollo y estar bajo una estrategia de arquitectura mantenible y escalable.
2. Para la automatización web debes identificar los casos de pruebas clave que definiste en el punto 4 del reto 1, de tal manera que se pueda garantizar una regresión exitosa.
3. Puedes utilizar el framework que prefieras para automatizar la parte web como los servicios.

Nota: Para el proyecto de automatización deberas crear una carpeta aparte llamada [qaAutomationChallenge], subirlo a tu repositorio y enviar el link por correo. 


# RETO 3
### 📌 Objetivo:
### Entornos de trabajo y niveles de pruebas
El equipo maneja varios ambientes de trabajo (Desarrollo, QA, UAT, Produccion) a lo largo del desarrollo del producto. Consideramos que la calidad debe asegurarse en todo el flujo, por lo tanto diferentes pruebas deben realizarce en cada uno de los ambientes propuestos.

Ambientes: 
![Flujo de trabajo](workflow.png)
Niveles de pruebas : 
![Pirámide de pruebas](piramidedepruebas.png)
 
1. Comenta en base a tu criterio que nivel(es) de pruebas aplicarías para cada ambiente (Puedes sugerir otros ambientes u estructura si es que lo consideras)

Nota: Coloca tus respuestas en el documento (qa-challenge-reto[nombre].docx)


# RETO 4
### 📌 Objetivo:
### Priorización de errores 

### Caso:
Imagina una herramienta web, desarrollada con el objetivo de proporcionar una versión de ancho de banda ligero (se requiere un uso óptimo alrededor de 50 MB) de una herramienta principalmente utilizada por personas de todo el mundo para comprar productos de segunda mano.

Defectos: 
1. Los precios no varían cuando una transacción se realiza en diferentes monedas.
2. Las transacciones entre usuarios no se reflejan en un informe de back-end.
3. Hay algunos errores ortográficos en la página de inicio.
4. Las credenciales de usuario no están cifradas en la base de datos.
5. Los foros oficiales de soporte no siempre registran los comentarios del usuario.
6. El ancho de banda necesario para una experiencia de usuario óptima es una velocidad de descarga de 100 MB.


1. Para el siguiente conjunto de defectos, prioriza del 1 al 6, siendo 1 el más crítico y explique brevemente el por qué del ordenamiento (puedes incluir alguna suposición que asumas). 
 
Nota: Coloca tus respuestas en el documento (qa-challenge-reto[nombre].docx)


# RETO 5
### 📌 Objetivo:
### Agile testing 

### Caso:
La aplicación web a probar es una plataforma como Mercado Libre. A continuación, podrás encontrar una lista de técnicas y procedimientos utilizados en las pruebas

El equipo de pruebas : 
1. Utiliza el mismo entorno que los usuarios finales para realizar las pruebas perfomance.
2. Las pruebas de humo se ejecutan para cubrir todas las posibles opciones del usuario y se realizan en cada implementación de una nueva versión, todas las pruebas se realizan manualmente para reflejar la misma experiencia del usuario.
3. Las pruebas de regresión solo cubren los módulos que probablemente se vean afectados por los cambios realizados en la última versión..
4. Los casos de prueba se crean en Excel para que sean fáciles de editar. Los casos de prueba se eliminan después de la implementación de esa versión, por lo que se crean nuevos completos en cada iteración.
5. Las pruebas comienzan a estar involucradas en el proceso de desarrollo desde la etapa inicial.

### 📌 Objetivos:
1. Evalúa si los procedimientos de la lista son los más adecuados y brinda al menos 1 alternativa entre tipo de prueba o mejora que desde tu punto de vista se puede plantear a las reglas que no consideres adecuadas o se deba mejorar. 

Nota: Coloca tus respuestas en el documento (qa-challenge-reto[nombre].docx)


Recuerda enviar tu archivo al remitente que te mando la evaluación y ante cualquier duda puedes enviar un correo a pao_admin@utp.edu.pe y estaremos encantados de ayudarte. 

Exitos y gracias por tu tiempo!😃
