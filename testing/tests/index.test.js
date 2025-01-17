const CarritoCompra = require("../index");

describe("Voy a testear a CarritoCompra", () => {
    const carrito = new CarritoCompra();
    it("Voy a probar que CarritoCompra es una clase", () => {
        expect(typeof CarritoCompra.prototype.constructor).toBe('function');
    });
    it("Voy a probar que carrito es una instancia de CarritoCompra", () => {
        expect(carrito).toBeInstanceOf(CarritoCompra);
    });
    it("Voy a probar que CarritoCompra se inicializa con un array vacío", () => {
        expect(carrito.productos.length).toBe(0);
    });
    it("Voy a probar que CarritoCompra tiene un método agregarProducto", () => {
        expect(typeof carrito.agregarProducto).toBe("function");
    });
});

describe("Voy a testear la función agregarProducto", () => {
    const carrito = new CarritoCompra();
    it("Voy a probar que agregarProducto es una función", () => {
        expect(typeof carrito.agregarProducto).toBe("function");
    });
    it("Voy a probar que agregarProducto agrega un producto al carrito", () => {
        carrito.agregarProducto ({ nombre: "Producto 1", precio: 100 });
        expect(carrito.productos.length).toBe(1);
        expect(carrito.productos[0]).toEqual({ nombre: "Producto 1", precio: 100 });
    }); 
});

describe("Voy a testear la función calcularTotal", () => {
    const carrito = new CarritoCompra();
    it("Voy a probar que calcularTotal es una función", () => {
        expect(typeof carrito.calcularTotal).toBe("function");
    });
    it("Voy a probar que calcularTotal calcula el total de los productos en el carrito", () => {
        carrito.agregarProducto({ nombre: "Producto 1", precio: 100 });
        carrito.agregarProducto({ nombre: "Producto 2", precio: 200 });
        expect(carrito.calcularTotal()).toBe(300);
    });
});

describe("Voy a testear la función aplicarDescuento", () => {
    const carrito = new CarritoCompra();
    it("Voy a probar que aplicarDescuento es una función", () => {
        expect(typeof carrito.aplicarDescuento).toBe("function");
    });
    it("Voy a probar que aplicarDescuento aplica un descuento al total del carrito", () => {
        carrito.agregarProducto({ nombre: "Producto 1", precio: 100 });
        carrito.agregarProducto({ nombre: "Producto 2", precio: 200 });
        expect(carrito.aplicarDescuento(10)).toBe(270);
    });
});