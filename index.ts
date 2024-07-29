class Producto {
    constructor(name: string, price: number) {
      this.name = name;
      this.price = price;
    }
    name: string;
    price: number;
    getPrice() {
      return this.price;
    }
  }
  class ProductoTecnologico extends Producto {
    constructor(name: string, price: number, useBatteries) {
      super(name, price);
      this.useBatteries = useBatteries;
    }
    useBatteries: boolean = false;
    setBatteries(usa: boolean) {
      this.useBatteries = usa;
    }
  }
  class ProductoAlimenticio extends Producto {
    fechaCaducidad: Date;
    constructor(name, price, fechaCaducidad) {
      super(name, price);
      // guarda la fecha de caducidad
      this.fechaCaducidad= fechaCaducidad;
    }
  
 checkCaducidad():boolean {
      const hoy = new Date();
      const caducidad =   this.fechaCaducidad.getTime() - hoy.getTime();
      const fechaCaducidad = Math.floor(caducidad / (1000 * 3600 * 24 * 365.25));
    
       let resultado : boolean= false;

       resultado = fechaCaducidad < 0 ? true: false;  
      return  resultado; 
      // [Completa la lógica para obtener si el producto está vencido]
    }
    
  }
  class ProductoCongelado extends ProductoAlimenticio {
    temperaturaRecomendada: number;
    private margen: number;
    constructor(name: string, price: number, fechaCaducidad: Date, temperaturaRecomendada: number, margen: number = 5) {
      super(name, price, fechaCaducidad);
      this.margen = margen;
      this.temperaturaRecomendada = temperaturaRecomendada;
      // [Tu código: Guarda  el dato temperaturaRecomendada]
      
    }
    estaAlmacenadoCorrectamente(temperaturaActual: number): boolean {
      const r = temperaturaActual - this.temperaturaRecomendada + this.margen < temperaturaActual? true: false;
      return r;
      // [Calcula si el producto está bien conservado contemplando 
      // el temperaturaRecomendada y el margen]
    }
  }
  function main(){
// Creación de la instancia
const helado = new ProductoCongelado("Helado de Vainilla", 2.99,new Date("2024-12-31"), -18);

// Temperatura actual de almacenamiento
const temperaturaActual = -20; // Supongamos que esta es la temperatura actual

// Verificar si el producto está almacenado correctamente
const estaAlmacenadoCorrectamente = helado.estaAlmacenadoCorrectamente(temperaturaActual);
console.log("¿Está almacenado correctamente?:", estaAlmacenadoCorrectamente ? "Sí" : "No");

// Verificar si el producto está caducado
 const esCaducado = helado.checkCaducidad();
console.log("¿El producto está caducado?:", esCaducado ? "Sí" : "No"); 
 
// Mostrar detalles del producto
console.log("Nombre del Producto:", helado.name);
console.log("Precio:", helado.getPrice());
console.log("Fecha de Caducidad:", helado.fechaCaducidad.toDateString());
console.log("Temperatura Recomendada:", helado.temperaturaRecomendada, "grados");  
  // Creación de la instancia
 const pan = new ProductoAlimenticio("Pan Integral", 3.50,new Date( "2024/10/30"));

const estaVencido = pan.checkCaducidad();
console.log("¿El producto está vencido?:", estaVencido ? "Sí" : "No");

// Mostrar detalles del producto
console.log("Nombre del Producto:", pan.name);
console.log("Precio:", pan.getPrice());
console.log("Fecha de Caducidad:", pan.fechaCaducidad); 
console.log("vino otra persona y le metio este cambio");
  }
  main();
  
