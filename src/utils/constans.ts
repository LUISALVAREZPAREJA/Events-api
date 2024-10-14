
export class Parameters {
  // Métodos estáticos accesibles sin necesidad de instanciar la clase
  static readonly DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://3nav3050:tNvBFAHbN3cWCOHS@electiva.3e69k.mongodb.net/";  // Cambiado a MONGODB_URI
  static readonly DATABASE_PORT = process.env.DATABASE_PORT || "3005";  // Mantiene el puerto por defecto
  static readonly DATABASE_HOST = process.env.DATABASE_HOST || "localhost";  // Cambiado a localhost
}
