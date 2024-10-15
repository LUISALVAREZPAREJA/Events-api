// src/index.ts
import express from 'express';
import { initDatabase } from '../config/database/database';  
import dotenv from 'dotenv';

dotenv.config();  // Cargar variables de entorno

const app = express();
const PORT = process.env.PORT || 3000;  


app.use(express.json());


initDatabase(process.env.MONGODB_URI || '')
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running at port ${PORT}`);
    });
  })
  .catch(err => {
    console.error("Failed to connect to the database:", err);
  });


