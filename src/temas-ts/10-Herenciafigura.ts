// Clase base para todas las figuras
export class Figura1 {
    protected largo: number;
    protected ancho: number;

    constructor(largo: number, ancho: number) {
        this.largo = largo;
        this.ancho = ancho;
    }

    // Método para calcular el área del rectángulo
    calcularArea(): number {
        return this.largo * this.ancho;
    }

    imprimir() {
        console.log("Largo del rectángulo: " + this.largo + ", Ancho: " + this.ancho);
        console.log("Área del rectángulo: " + this.calcularArea());
    }
}

// Clase para el cruadrado 
class Figura2 {
    protected lado1: number;
    protected lado2: number;
 

    constructor(lado1: number, lado2: number) {
        this.lado1 = lado1;
        this.lado2 = lado2;
        
    }

    // Método para calcular el área de cuadro.
    calcularArea(): number {
        return (this.lado1 * this.lado2) 
    }

    imprimir() {
        console.log(`Lado1: + ${this.lado1}` +`Lado 2:+ ${this.lado2}`);
        console.log("Área del rectángulo cruzado: " + this.calcularArea());
    }
}

// Clase para círculo
class Figura3 {
    protected radio: number;

    constructor(radio: number) {
        this.radio = radio;
    }

    // Método para calcular el área del círculo
    calcularArea(): number {
        return Math.PI * Math.pow(this.radio, 2);
    }

    imprimir() {
        console.log("El radio es de: " + this.radio);
        console.log("Área del círculo: " + this.calcularArea());
    }
}

// Ejemplo 
const rectangulo = new Figura1(10, 5);
rectangulo.imprimir(); // Área del rectángulo

const Cruadrado = new Figura2(8, 8);
Cruadrado.imprimir(); // Área del cuadro.

const circulo = new Figura3(7);
circulo.imprimir(); // Área del círculo