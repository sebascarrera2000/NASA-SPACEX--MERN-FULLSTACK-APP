
![Logo](https://media.discordapp.net/attachments/1135292607589777518/1135322335847665684/Astron__1_-removebg-preview.png)


# NASA-SPACEX- MERN FULLSTACK APP - English Version

Version español : Es una Integracion dentro  de una aplicacion web con tematica de la NASA , SPACE X y una api creada propia.

Verion Ingles: It is an integration within a web application with a theme related to NASA, SPACE X, and a custom created API.

Node JS con TS y APIs Rest -Backend

Versión en español:
La API creada es una aplicación para gestionar datos de astronautas y misiones espaciales. Permite crear, leer, actualizar y eliminar registros de astronautas y misiones. También permite asignar y desasignar astronautas a misiones específicas. La API sigue principios SOLID y utiliza patrones de diseño para un código limpio y mantenible. Se ha aplicado seguridad con manejo adecuado de solicitudes y respuestas, validación de datos y configuración CORS. Es escalable y extensible para futuras funcionalidades.

Versión en inglés:
The created API is an application to manage data of astronauts and space missions. It allows creating, reading, updating, and deleting records of astronauts and missions. It also enables assigning and unassigning astronauts to specific missions. The API follows SOLID principles and uses design patterns for clean and maintainable code. Security is implemented with proper handling of requests and responses, data validation, and CORS configuration. It is scalable and extensible for future functionalities.

React - Frontend 

Resumen en español:
En la aplicación de React, creamos una interfaz para gestionar información de astronautas y misiones espaciales. Utilizamos React junto con hooks para el manejo del estado y efectos secundarios. Con la API de SpaceX, obtuvimos datos sobre astronautas y misiones. Implementamos listados, eliminación y adición de astronautas y misiones. Creamos relaciones entre misiones y astronautas. Usamos fetch para interactuar con el backend y react-hot-toast para notificaciones. Aplicamos estilos espaciales con CSS. Implementamos enrutamiento con React Router para una navegación eficiente entre componentes.

Summary in English:
In the React application, we created an interface to manage information about astronauts and space missions. We used React along with hooks for state management and side effects. With the SpaceX API, we fetched data about astronauts and missions. We implemented listing, deletion, and addition of astronauts and missions. We established relationships between missions and astronauts. We used fetch to interact with the backend and react-hot-toast for notifications. Space-themed styles were applied using CSS. We implemented routing with React Router for efficient navigation between components.


## Tech Stack

**Client:** React

**Api:** Node, Express,Typescript

**base de datos:** Mongo 
## Run Locally /Correr localmente

Clone the project/ clonar proyecto

```bash
  git clone https://github.com/sebascarrera2000/NASA-SPACEX--MERN-FULLSTACK-APP
```

Go to the project directory/ Dirigite al directorio del repositorio

```bash
  cd NASA-SPACEX--MERN-FULLSTACK-APP
```
* Required Docker

Build docker 

```bash
  docker-compose -f docker-compose.yml up -d --build
```

Start all services / Iniciando todos los servicios

```bash
  Te diriges al docker -> 
   Api-Nasa-mision Backend(Api)- funcionando en puerto 3000
   Nasa-front Frontend - funcionando en el puerto 3015
   Mongo - database funcionando en el puerto 207017
```



## React - Front Web App

![Main Page](https://cdn.discordapp.com/attachments/1135292607589777518/1137836003143463002/image.png)

![Nasa - Api ](https://media.discordapp.net/attachments/1135292607589777518/1137836125898162277/image.png?width=1202&height=676)

![ Space X- Api ](https://media.discordapp.net/attachments/1135292607589777518/1137836556435062885/image.png?width=1196&height=676)

![ My Api ](https://media.discordapp.net/attachments/1135292607589777518/1137837632789946488/image.png?width=1395&height=676)
## Demo My Api Integration

https://cdn.discordapp.com/attachments/1135292607589777518/1137837030647287858/2023-08-04_20-53-57.mp4

## Nasa my Api 

#### CRUD (CREATE,READ,UPDATE,DELETE) -> Astonauts (Astronautas) 👨‍🚀

```http
  GET /api/astronauts
```

|  Description                |
|:------------------------- |
| Obtener todos los astronautas /Get all astronauts |

#### Get item

```http
 POST /api/astronauts
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| {  "name": "John Doe","age": 35, "nationality": "United States",}    | `JSON` | **Required**. Añadir Astronauta /Add astronaut |


```http
 PUT /api/astronauts/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| _id   | `String` | **Required {ID}**. Actualizar Astronauta  / Update astronaut |


```http
 DELETE /api/astronauts/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| _id   | `String` | **Required {ID}**. Eliminar Astronauta  /Delete astronaut |


#### CRUD (CREATE,READ,UPDATE,DELETE) -> Missiones (Missions) 🚀

```http
  GET /api/missions
```

|  Description                |
|:------------------------- |
| Listar las Misiones /Get all misions |

#### Get item

```http
 POST /api/missions
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| {"name": "Mars Rover Mission - Updated","launchDate": "2023-08-02","destination": "Mars"}   | `JSON` | **Required**. Añadir misiones /Add misions |


```http
 PUT /api/missions/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| _id   | `String` | **Required {ID}**. Actualizar misiones  / Update missions|


```http
 DELETE /api/missions/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| _id   | `String` | **Required {ID}**. Eliminar misiones  /Delete misions |


---

## Author/Autor

- [@RaptorAustriaco](https://github.com/sebascarrera2000)


## Agrediciemiento 

Gracias Escalab Academy 


https://escalab.tech/


![Main Page](https://media.discordapp.net/attachments/1135292607589777518/1137668638099390485/Logo_escalab1.png)
