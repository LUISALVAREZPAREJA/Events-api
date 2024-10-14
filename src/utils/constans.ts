// src/utils/constants.ts
export class Parameters {
  // Métodos estáticos accesibles sin necesidad de instanciar la clase
  static readonly MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/eventDB";  // Cambiado a MONGODB_URI
  static readonly DATABASE_PORT = process.env.DATABASE_PORT || "3005";  // Mantiene el puerto por defecto
  static readonly DATABASE_HOST = process.env.DATABASE_HOST || "localhost";  // Cambiado a localhost
}
