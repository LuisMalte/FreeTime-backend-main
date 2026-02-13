# 🚀 Service Exchange API - Backend

> **RESTful API robusta para la gestión y conexión laboral entre Freelancers (Freetimers) y Empleadores (Fulltimers).**

![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

## 📖 Descripción del Proyecto

Este proyecto es el backend de una aplicación Full Stack diseñada para facilitar la contratación de servicios profesionales. La arquitectura permite la interacción segura y eficiente entre dos roles principales: **Fulltimers** (empleadores/usuarios a tiempo completo) y **Freetimers** (freelancers/trabajadores independientes).

El sistema gestiona el ciclo completo de publicación de tareas, autenticación segura basada en roles, filtrado geográfico (Departamentos/Ciudades) y categorización de servicios.

## ✨ Características Principales

El núcleo de la aplicación se basa en cuatro pilares técnicos:

### 🔐 1. Autenticación Multi-Nivel (RBAC)
Implementación de **Middlewares personalizados** (`authenticateTokenUser`, `authenticateTokenFulltimer`, `authenticateTokenFreetimer`) que validan permisos específicos mediante JWT, asegurando que cada rol acceda solo a sus recursos permitidos.

### 🔄 2. Gestión de Tareas Avanzada (CRUD)
Sistema completo para la creación, lectura y actualización de tareas. Incluye **Soft Delete/Restore** (eliminación lógica), permitiendo desactivar usuarios o tareas sin perder la integridad histórica de los datos.

### 📍 3. Filtrado Inteligente y Dinámico
Endpoints optimizados para listas desplegables en el Frontend, manejando lógica de negocio para filtrar ubicaciones (**Departamento -> Ciudad**) y categorizar servicios de manera eficiente.

### 🔗 4. Relaciones de Base de Datos Sólidas
Diseño de base de datos relacional con **integridad referencial completa** usando Sequelize.
* **1:1** (Usuario - Perfil Fulltimer/Freetimer)
* **1:N** (Departamento - Ciudades, Usuario - Tareas)

## 🛠️ Tecnologías y Librerías

El proyecto fue construido utilizando un entorno de **Node.js** enfocado en escalabilidad:

* **Express.js:** Framework para el manejo del servidor y enrutamiento modular.
* **Sequelize ORM:** Modelado de datos y gestión de relaciones SQL.
* **MySQL:** Base de datos relacional.
* **JsonWebToken (JWT):** Seguridad y manejo de sesiones stateless.
* **Bcrypt:** Hashing de contraseñas para seguridad de datos sensibles.
* **Cors:** Manejo de políticas de origen cruzado.


##  Frontend

El frontend del proyecto https://github.com/LuisMalte/frontend_Free

## 📂 Arquitectura del Proyecto

El código sigue estrictamente el patrón de diseño **MVC (Model-View-Controller)**:

```bash
.
├── src
│   ├── Controllers   # Lógica de negocio y respuestas API
│   ├── DataBase      # Conexión, sincronización y seeds (JSON)
│   ├── Middleware    # Seguridad y validación de tokens
│   ├── Models        # Esquemas de datos (Sequelize)
│   ├── Routers       # Definición de endpoints
│   └── server.js     # Punto de entrada
├── package.json
└── ...




