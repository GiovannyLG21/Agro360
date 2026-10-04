# ♻️ Agro360

**Agro360** es una plataforma web orientada a la **gestión y evaluación de procesos educativos en el SENA**. Permite administrar cursos, temas, encuestas, usuarios, roles y respuestas de participantes, **centralizando la creación y gestión de formularios y sus resultados**. La solución integra una **API REST desarrollada con Express y MongoDB** con un **frontend en React y Vite**, proporcionando una arquitectura orientada a la gestión centralizada de formularios, evaluaciones y resultados.

---

## ✨ Características

- Administración de temas y contenido académico.
- Creación y edición de formularios con preguntas dinámicas.
- Registro y validación de respuestas.
- Visualización de resultados y estadísticas por formulario, usuario o instructor.
- Sistema de autenticación con JWT y cookies.
- Estructura modular con backend y frontend separados.
- Diseño adaptable para uso en navegador.

---

## 🛠️ Tecnologías

| Tecnología | Uso |
|---|---|
| [Node.js](https://nodejs.org/) | Entorno de ejecución del backend |
| [Express](https://expressjs.com/) | API REST y servidor web |
| [MongoDB](https://www.mongodb.com/) | Base de datos principal |
| [Mongoose](https://mongoosejs.com/) | Modelado y conexión a MongoDB |
| [React](https://react.dev/) | Interfaz del cliente |
| [Vite](https://vitejs.dev/) | Herramienta para desarrollo y build del frontend |
| [Tailwind CSS](https://tailwindcss.com/) | Estilos y diseño visual |
| [Material UI](https://mui.com/) | Componentes de interfaz |
| [Formik](https://formik.org/) | Manejo de formularios |
| [JWT](https://jwt.io/) | Autenticación segura |
| [Nodemailer](https://nodemailer.com/) | Envío de correos de recuperación y validación |

---

## 📸 Vista previa

![Agro360 Preview](./client/public/captures/01.%20Login.jpeg)

![Agro360 Preview](./client/public/captures/02.%20Index.jpeg)

![Agro360 Preview](./client/public/captures/04.%20Forms.jpeg)

![Agro360 Preview](./client/public/captures/06.%20Form.jpeg)

![Agro360 Preview](./client/public/captures/07.%20Form%20Response.jpeg)

---

## 🚀 Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/GiovannyLG21/Agro360.git
cd Agro360
```

### 2. Instalar dependencias del backend

```bash
npm install
```

### 3. Instalar dependencias del frontend

```bash
cd client
npm install
```

### 4. Iniciar el servidor de desarrollo

#### Backend

```bash
npm run dev
```

#### Frontend

```bash
cd client
npm run dev
```

La aplicación estará disponible en:

```bash
http://localhost:5173
```

El backend corre en:

```bash
http://localhost:4000
```

---

## 📦 Build de producción

Para compilar la aplicación frontend:

```bash
cd client
npm run build
```

Para previsualizar el build localmente:

```bash
cd client
npm run preview
```

---

## 📁 Estructura del proyecto

```bash
Agro360/
├── .env
├── README.md
├── package.json
├── package-lock.json
├── pnpm-lock.yaml
├── src/
│   ├── app.js
│   ├── index.js
│   ├── config/
│   ├── controllers/
│   ├── libs/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── validators/
│   └── ...
├── client/
│   ├── package.json
│   ├── index.html
│   ├── public/
│   └── src/
│       ├── api/
│       ├── assets/
│       ├── components/
│       ├── context/
│       ├── pages/
│       ├── App.jsx
│       ├── main.jsx
│       └── routes.jsx
├── test/
└── ...
```

---

## ⚙️ Variables de entorno

Crea un archivo `.env` en la raíz del proyecto:

```env
PORT=4000
MONGO_URI=mongodb://localhost:27017/agro360db
SECRET_TOKEN=tu_token_secreto
FRONTEND_URL=http://localhost:5173
INSTRUCTOR_IMAGES_ROUTE=assets/instructores
```

Y en la carpeta `client`, configura las variables del frontend:

```env
VITE_BACKEND_URL=http://localhost:4000/api
VITE_FRONTEND_URL=http://localhost:5173
```

---

## 👨‍💻 Autor

Giovanny Ladino

- GitHub: https://github.com/GiovannyLG21

---

## 📄 Licencia

Este proyecto está publicado bajo la licencia MIT.