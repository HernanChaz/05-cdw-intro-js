function Producto(nombre, precio, disponible) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
}

const producto1 = new Producto('Laptop',500, true);
const producto2 = new Producto('Tablet',350, false);
const producto3 = new Producto('Smartphone',200, true);

console.log(producto1);
console.log(producto2);
console.log(producto3);