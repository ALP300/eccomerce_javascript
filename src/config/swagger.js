import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de Ecommerce - Documentación Interactiva",
      version: "1.0.0",
      description: "Esta es la documentación de la API del Ecommerce, generada con Swagger para facilitar las pruebas.",
      contact: {
        name: "Antigravity",
      },
    },
    servers: [
      {
        url: "http://localhost:3000/api",
        description: "Servidor local (Desarrollo)",
      },
    ],
    components: {
      schemas: {
        Product: {
          type: "object",
          required: ["name", "description", "price", "stock"],
          properties: {
            id: {
              type: "integer",
              description: "ID auto-generado del producto",
            },
            name: {
              type: "string",
              description: "Nombre del producto",
            },
            description: {
              type: "string",
              description: "Breve descripción",
            },
            price: {
              type: "number",
              format: "float",
              description: "Precio del producto",
            },
            stock: {
              type: "integer",
              description: "Cantidad disponible en inventario",
            },
            created_at: {
              type: "string",
              format: "date-time",
              description: "Fecha de creación",
            },
          },
        },
      },
    },
  },
  apis: ["./src/routes/*.js"], // Archivos donde están las rutas anotadas
};

const swaggerSpec = swaggerJSDoc(options);

const setupSwagger = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log("Documentación de Swagger disponible en: http://localhost:3000/api-docs");
};

export default setupSwagger;
