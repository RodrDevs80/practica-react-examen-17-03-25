/**A. Visualizar la lista de productos
 • Mostrar nombre, stock y precio de cada producto.
 • Resaltar productos con stock bajo */

import { useState } from "react";
import {
  addMovimientos,
  addProduct,
  getDataProductById,
} from "../utils/funciones";

export const ListProducts = ({
  listProductos,
  listTicket,
  setListTicket,
  movimientos,
}) => {
  const [productos, setProductos] = useState(listProductos);

  const handleCompra = (id) => {
    let newProductos = productos.map((item) =>
      item.id === id && item.stock >= 0
        ? { ...item, stock: item.stock - 1 }
        : { ...item }
    );
    setProductos(newProductos);
    setListTicket(
      addProduct(getDataProductById(id, listProductos), listTicket)
    );
    addMovimientos(getDataProductById(id, listProductos), movimientos);
  };

  return (
    <>
      <h2>Lista de Productos</h2>
      <table>
        <tr>
          <th>Nombre</th>
          <th>Stock</th>
          <th>Precio</th>
          <th>🛒</th>
        </tr>
        {productos &&
          productos.map((item, index) => (
            <tr
              key={item.id}
              style={{
                background: `${index % 2 === 0 ? "#646464" : "#a9a9a9"}`,
              }}
            >
              <td>{item.nombre}</td>
              <td style={{ background: `${item.stock <= 3 ? "red" : ""}` }}>
                {item.stock}
              </td>
              <td>${item.precio}</td>
              <td>
                <button
                  style={{
                    cursor: `${item.stock === 0 ? "not-allowed" : "pointer"}`,
                  }}
                  disabled={item.stock === 0 ? true : false}
                  onClick={() => handleCompra(item.id)}
                >
                  Comprar
                </button>
              </td>
            </tr>
          ))}
      </table>
    </>
  );
};
