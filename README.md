# Aplicación de control de ventas desarrollada con React y Vite que permite gestionar productos, realizar compras y consultar historial de movimientos.

## Características principales

- Listado de productos con stock y precios

- Sistema de compra con generación de ticket

- Historial de movimientos por producto

- Visualización de stock bajo (resaltado)

- Cálculo automático de totales

## Estructura del proyecto

src/
├── components/
│ ├── ListProducts.jsx # Componente de lista de productos
│ ├── PagHistorialMovProducto.jsx # Historial de movimientos
│ ├── Separador.jsx # Componente visual separador
│ └── TicketCompra.jsx # Componente de ticket de compra
├── mocks/
│ └── data.js # Datos mock de productos y movimientos
├── utils/
│ └── funciones.js # Funciones auxiliares
├── App.css # Estilos principales
├── App.jsx # Componente principal
├── index.css # Estilos globales
└── main.jsx # Punto de entrada

## Requisitos del sistema

- Node.js (v18+ recomendado)

- npm (v9+ recomendado) o yarn

## Instalación

Clonar el repositorio

bash
Copy
git clone [https://github.com/RodrDevs80/practica-react-examen-17-03-25]
Instalar dependencias

bash
Copy
npm install
Iniciar la aplicación

bash
Copy
npm run dev

## Scripts disponibles

- npm run dev: Inicia el servidor de desarrollo

- npm run build: Crea una versión optimizada para producción

- npm run lint: Ejecuta el linter para verificar el código

- npm run preview: Previsualiza la versión de producción

## Tecnologías utilizadas

- React 19: Biblioteca principal para la interfaz de usuario

- Vite: Empaquetador y servidor de desarrollo ultrarrápido

- ESLint: Para mantener la calidad del código

- SWC: Compilador ultra rápido para React

## Componentes principales

### ListProducts

Muestra la lista de productos con su stock y precio. Permite realizar compras y resalta productos con stock bajo.

### TicketCompra

Genera un ticket con los productos comprados, mostrando cantidad, precio unitario, subtotal y total general.

### PagHistorialMovProducto

Permite consultar el historial de movimientos (entradas/salidas) de un producto específico.

## Funciones utilitarias

- getDataProductById: Obtiene un producto por su ID

- getHistorialById: Obtiene el historial de movimientos de un producto

- getProductBajoStock: Filtra productos con stock bajo (≤3 unidades)

- addProduct: Añade productos al ticket de compra

- addMovimientos: Registra movimientos de productos

## Personalización

Puedes modificar los datos iniciales editando el archivo src/mocks/data.js para adaptarlos a tus necesidades:

javascript

export const productos = [
{ id: 1, nombre: "Laptop", stock: 5, precio: 1200 },
// ... más productos
];

export const movimientos = [
{ id: 1, productoId: 1, tipo: "entrada", cantidad: 2, fecha: "2025-03-15" },
// ... más movimientos
];

## Licencia

Este proyecto está bajo la licencia MIT.

## Vista del proyecto:

https://practica-examen-17-03-25.netlify.app/
