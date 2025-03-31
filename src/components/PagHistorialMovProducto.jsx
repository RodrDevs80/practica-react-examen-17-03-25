import { useState } from "react";
import { getDataProductById, getHistorialById } from "../utils/funciones";

export const PagHistorialMovProducto = ({ movimientos, listProductos }) => {
  const [idProducto, setIdProducto] = useState("");
  const [historialProducto, setHistorialProducto] = useState([]);
  const [nombreDelProducto, setNombreDelProducto] = useState("");
  const handleCahnge = (e) => {
    setIdProducto(e.target.value);
    setHistorialProducto([]);
    setNombreDelProducto("");
  };
  const handleClick = () => {
    const p = getDataProductById(Number(idProducto), listProductos) ?? "";
    setNombreDelProducto(p.nombre);
    let newHistorial = getHistorialById(Number(idProducto), movimientos);
    setHistorialProducto(newHistorial);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        gap: "15px",
      }}
    >
      <label>Ingrese el Id del producto para ver su Historial</label>
      <input
        type="number"
        id="idProducto1"
        value={idProducto}
        onChange={handleCahnge}
      />
      <button onClick={handleClick}>Buscar</button>
      <div className="historial">
        <h3>{nombreDelProducto}</h3>
        <ul style={{ listStyle: "none", padding: "10px" }}>
          {idProducto.length !== 0 && historialProducto.length !== 0
            ? historialProducto.map((item) => (
                <li
                  style={{
                    margin: "10px",
                    padding: "15px",
                    borderRadius: "15px",
                  }}
                  key={item.id}
                >
                  <p>Fecha: {item.fecha}</p>
                  <p>Tipo: {item.tipo}</p>
                  <p>Cantidad: {item.cantidad}</p>
                </li>
              ))
            : "No hay historial del producto buscado 🔍"}
        </ul>
      </div>
    </div>
  );
};
