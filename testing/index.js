class CarritoCompra {
    constructor() {
      this.productos = [];
    }
  
    agregarProducto(producto) {
      this.productos.push(producto);
    }
  
    calcularTotal() {
      return this.productos.reduce((total, producto) => total + producto.precio, 0);
    }

    aplicarDescuento(descuento) {   
        const total = this.calcularTotal();
        return total * ((100 - descuento) / 100);
    }     
  };

module.exports = CarritoCompra;