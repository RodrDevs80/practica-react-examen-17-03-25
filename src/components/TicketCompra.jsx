/** Mostrar el ticket de compra mostrando nombre de producto, precio, cantidad, y subtotal.
 • Mostrar total general al final del ticket.
 */

import { useEffect, useState } from "react";

export const TicketCompra = ({ listTicket }) => {
  const [totalVentas, setTotalVentas] = useState("");

  useEffect(() => {
    setTotalVentas(
      listTicket.reduce((total, item) => total + item.precio * item.cantidad, 0)
    );
  }, [listTicket]);

  return (
    <>
      <h2>Ticket de Compra</h2>
      <table>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>Subtotal</th>
        </tr>
        {listTicket.map((item) => (
          <tr key={item.id}>
            <td>{item.nombre}</td>
            <td>💲{item.precio}</td>
            <td>{item.cantidad}</td>
            <td>💲{item.precio * item.cantidad}</td>
          </tr>
        ))}
      </table>
      <h3>Total de la Venta: 💲{totalVentas}</h3>
    </>
  );
};
