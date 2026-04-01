# Documentación de la API - Ecommerce backend

Esta API permite gestionar los productos de la tienda online, proporcionando operaciones CRUD completas.

## Información General
- **Base URL:** `http://localhost:3000/api`
- **Formato de datos:** JSON

---

## Productos (`/products`)

### 1. Obtener todos los productos
Retorna una lista de todos los productos registrados.

- **URL:** `/products`
- **Método:** `GET`
- **Respuesta Exitosa (200 OK):**
  ```json
  [
    {
      "id": 1,
      "name": "Smartphone X",
      "description": "El último modelo de smartphone",
      "price": 699.99,
      "stock": 50,
      "created_at": "2024-03-28T..."
    }
  ]
  ```

### 2. Obtener un producto por ID
Busca un producto específico mediante su identificador único.

- **URL:** `/products/:id`
- **Método:** `GET`
- **Parámetros de URL:** `id` (integer)
- **Respuesta Exitosa (200 OK):**
  ```json
  {
    "id": 1,
    "name": "Smartphone X",
    "description": "El último modelo de smartphone",
    "price": 699.99,
    "stock": 50
  }
  ```
- **Error (404 Not Found):**
  ```json
  { "message": "Producto no encontrado" }
  ```

### 3. Crear un nuevo producto
Registra un nuevo producto en la base de datos.

- **URL:** `/products`
- **Método:** `POST`
- **Cuerpo de la Petición (JSON):**
  ```json
  {
    "name": "Teclado Mecánico",
    "description": "Teclado RGB con switches blue",
    "price": 89.50,
    "stock": 100
  }
  ```
- **Respuesta Exitosa (201 Created):**
  ```json
  {
    "id": 2,
    "name": "Teclado Mecánico",
    "description": "Teclado RGB con switches blue",
    "price": 89.50,
    "stock": 100
  }
  ```

### 4. Actualizar un producto
Modifica los datos de un producto existente.

- **URL:** `/products/:id`
- **Método:** `PUT`
- **Parámetros de URL:** `id` (integer)
- **Cuerpo de la Petición (JSON):**
  ```json
  {
    "name": "Teclado Mecánico Pro",
    "description": "Versión mejorada del teclado mecánico",
    "price": 95.00,
    "stock": 80
  }
  ```
- **Respuesta Exitosa (200 OK):**
  ```json
  {
    "id": 2,
    "name": "Teclado Mecánico Pro",
    "description": "Versión mejorada del teclado mecánico",
    "price": 95.00,
    "stock": 80
  }
  ```
- **Error (404 Not Found):**
  ```json
  { "message": "Producto no encontrado para actualizar" }
  ```

### 5. Eliminar un producto
Borra un producto de forma permanente.

- **URL:** `/products/:id`
- **Método:** `DELETE`
- **Parámetros de URL:** `id` (integer)
- **Respuesta Exitosa (200 OK):**
  ```json
  {
    "message": "Producto eliminado",
    "product": {
      "id": 2,
      "name": "Teclado Mecánico Pro",
      ...
    }
  }
  ```
- **Error (404 Not Found):**
  ```json
  { "message": "Producto no encontrado para eliminar" }
  ```

---

## Códigos de Estado Comunes
| Código | Descripción |
|---|---|
| `200 OK` | La petición fue exitosa. |
| `201 Created` | Recurso creado exitosamente. |
| `404 Not Found` | El recurso solicitado no existe. |
| `500 Internal Server Error` | Hubo un problema en el servidor. |
