import { productos } from "./mocks/data";
import { movimientos } from "./mocks/data";
import "./App.css";
import { ListProducts } from "./components/ListProducts";
import { PagHistorialMovProducto } from "./components/PagHistorialMovProducto";
import { TicketCompra } from "./components/TicketCompra";
import { Separador } from "./components/Separador";
import { useState } from "react";

function App() {
  const [listTicket, setListTicket] = useState([]);
  return (
    <>
      <h1>Control Ventas 🛒🛠️</h1>
      <Separador />
      <ListProducts
        listProductos={productos}
        listTicket={listTicket}
        setListTicket={setListTicket}
        movimientos={movimientos}
      />
      <Separador />
      <TicketCompra listTicket={listTicket} />
      <Separador />
      <PagHistorialMovProducto
        movimientos={movimientos}
        listProductos={productos}
      />
    </>
  );
}

export default App;
