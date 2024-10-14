// src/index.ts
import express from 'express';
import { initDatabase } from '../config/database/database';  // Asegúrate de que esta ruta sea correcta
import dotenv from 'dotenv';

dotenv.config();  // Cargar variables de entorno

const app = express();
const PORT = process.env.PORT || 3005;  // Puedes configurar el puerto si lo necesitas

// Middleware
app.use(express.json());

// Conexión a la base de datos
initDatabase(process.env.MONGODB_URI || '')
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running at port ${PORT}`);
    });
  })
  .catch(err => {
    console.error("Failed to connect to the database:", err);
  });

// Otras configuraciones y rutas pueden ir aquí
