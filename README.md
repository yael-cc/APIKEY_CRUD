# APIKey CRUD - Clientes con Firebase

Este proyecto es una API RESTful para la gestión de clientes (CRUD) usando Node.js, Express y Firebase Firestore, siguiendo el patrón MVC y protegido mediante API Key. Inspirado en la estructura de FacturaAPI.

## Características
- CRUD completo para la colección `clientes` en Firestore.
- Protección de endpoints mediante API Key (cabecera `x-api-key`).
- Modularización por controladores, modelos y rutas.
- Configuración de credenciales de Firebase desde `.env` usando el JSON completo.

## Estructura del proyecto
```
APIKey_CRUD/
├── app.js
├── package.json
├── .env.example
├── config/
│   └── firebase.js
├── controllers/
│   └── clienteController.js
├── middleware/
│   └── verifyApiKey.js
├── models/
│   └── cliente.js
├── routes/
│   └── clientes.js
```

## Configuración
1. Instala dependencias:
   ```sh
   npm install
   ```
2. Copia `.env.example` a `.env` y coloca tus credenciales reales:
   - `FIREBASE_CREDENTIALS_JSON`: Pega el JSON completo de tu cuenta de servicio de Firebase en una sola línea.
   - `API_KEY`: Define tu clave segura para proteger la API.
   - `FIREBASE_DATABASE_URL`: URL de tu base de datos Firestore.

## Uso
1. Inicia el servidor:
   ```sh
   node app.js
   ```
2. Realiza peticiones a los endpoints usando la cabecera `x-api-key`:
   - `POST   /clientes`      → Crear cliente
   - `GET    /clientes`      → Listar todos los clientes
   - `GET    /clientes/:id`  → Obtener cliente por ID
   - `PUT    /clientes/:id`  → Actualizar cliente
   - `DELETE /clientes/:id`  → Eliminar cliente

### Ejemplo de cliente JSON
```json
{
  "tax_id": "XAXX010101000",
  "tax_system": "616",
  "legal_name": "JOHN DOE PRUEBA",
  "email": "john@example.com",
  "address": {
    "city": "Hermosillo",
    "municipality": "Hermosillo",
    "state": "Sonora",
    "country": "MEX",
    "zip": "83240"
  },
  "default_invoice_use": "G03"
}
```

## Notas
- Los IDs de los clientes son generados automáticamente por Firebase.
- Todos los endpoints requieren la cabecera `x-api-key`.
- El modelo y controlador pueden ser extendidos según tus necesidades.

---

**Autor:**
- Cuevas Cruz Luis Angel Yael
