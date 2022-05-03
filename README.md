# Wether Forecast - Telecom

![image](https://user-images.githubusercontent.com/39780800/166599962-6eb9fe0c-c1dd-423d-962a-074f31f8754a.png)

![image](https://user-images.githubusercontent.com/39780800/166231967-ecb41f0f-20cc-4a80-b3e1-ee52d79a1ba5.png)

*Weather Forecast* es un aplicativo web que realiza una consulta del pronóstico del tiempo para una ciudad y una fecha en concreto. Se ha agregado la función para mostrar la información en español o inglés y en formato de unidades métricas internacionales o en el sistema imperial (dependiendo el idioma)

Realizado por: Freddy Lezama [github](https://github.com/gabolezama/Telecom)

### SOBRE EL DISEÑO

Primeramente, se muestra una pantalla de inicio que da la bienvenida al usuario y ofrece sencillas instrucciones para operar la aplicación. Además, ofrece también un switch para cambiar el idioma de la interfaz desde el comienzo.

Se establece un Header con los controles necesarios para configurar la consulta que se pretende realizar. Hay un Select para elegir una de cinco ciudades. Hay 6 botones que permiten elegir un día dentro de un rango de hoy en 5 días posteriores. Por último se ofrece un switch para que el usuario seleccione el idioma (y las unidades de medida). El Header y el container que muestra la información estan envueltos en un componente context que permite acceder a variables de estados y funciones en común.

La consulta a la API trae información diversa sobre el clima para cada día, por lo cual se decidió seccionar la misma en cinco renglones: Previsión General, Sensación Térmica, Condiciones Atmosféricas, Información sobre el Viento y Sobre la Luna. Se utilizaron las tarjetas de bootstrap para mostrar la información de cada renglón informativo, con algunas modificaciones para mostrar dentro de ellas iconos que hagan mas agradable la lectura de los datos.


### CARACTERISTICAS

- Consume principalmente la [Open Weather Map API](https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}&units='imperial/metric') para obtener listado de conmodities y precios
- Realizado con componentes funcionales y Hooks, React Router, React Context, Styled Components y CSS


### HERRAMIENTAS UTILIZADAS 

- **ReactJS**
- **Open Weather Map API**
- **Visual Studio Code**

### COMO LO PRUEBO?

Si quieres probar el repo, puedes seguir los siguientes paso:

- Clonar el repositorio
- Desde la terminal, situado en la carpeta de pryecto ejecutar el comando **npm i**
- Cuando termine, utiliza el comendo: **npm start**
- Se iniciara el dashboard en el localhost:3000
