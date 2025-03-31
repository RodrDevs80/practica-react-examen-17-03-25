/**
 * 
 1-Obtener datos de un producto recibiendo el ID
 ◦ Retorna el objeto del producto o null si no existe.
 2-Obtener historial de movimientos por producto ID
 ◦ Retorna el objeto del producto o null si no existe.
 3-Obtener productos con stock bajo
 ◦ Retorna productos con stock menor o igual a 3 unidades.
 */
//Obtener datos de un producto recibiendo el ID
export const getDataProductById = (id, arreglo) => {
    const product = arreglo.find(item => item.id === id);

    if (!product) {
        return null
    }
    return product;
}
//Obtener historial de movimientos por producto ID
export const getHistorialById = (id, arreglo) => {
    const historialMovimientos = arreglo.filter(item => {
        if (item.productoId === id) {
            return item;
        }
    });
    return historialMovimientos;
}
//Obtener productos con stock bajo
export const getProductBajoStock = (arreglo) => {
    const productosBajoStock = arreglo.filter(item => item.cantidad <= 3);
    return productosBajoStock;
}

export const addProduct = (newProducto, listVendidos) => {
    const producto = listVendidos.find(item => item.id === newProducto.id);
    if (!producto) {
        newProducto = {
            nombre: newProducto.nombre,
            precio: newProducto.precio,
            id: newProducto.id,
            cantidad: 1
        }
        return [...listVendidos, { ...newProducto }]
    } else {

        return [...listVendidos.map(item => item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item)]
    }

}

export const addMovimientos = (producto, arreglo) => {
    let newDate = new Date().toString();
    arreglo.push({
        id: arreglo.length + 1,
        productoId: producto.id,
        tipo: 'salida',
        cantidad: 1,
        fecha: newDate
    })
}