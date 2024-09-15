

// Clase para calcular el área del rectángulo
export class Rectangulo {
    protected largo: number; // poner o dar una declaracion 
    protected ancho: number;

    constructor(largo: number, ancho: number) {
        this.largo = largo; // el metodo constructor para despues llamarlo como herencia 
        this.ancho = ancho;
    }

    calcularArea(): number {
        return this.largo * this.ancho; //metodo para calcular el area 
    }

    imprimir(): void { // metodo para imprimir 
        console.log(`Rectángulo  Largo: ${this.largo}, Ancho: ${this.ancho}`); //llamo los valores definodos y los mestro 
        console.log(`Área del rectángulo: ${this.calcularArea()}`);//llamo la funcion o metodo para calcular el area y mostralo
    }
}//cierro la primera clase 

// Clase para calcular el área del cuadrado
export class Cuadrado {
    protected lado1: number;// poner o dar una declaracion 
    protected lado2: number;

    constructor(lado1: number, lado2: number) {
        this.lado1 = lado1; // el metodo constructor para despues llamarlo como herencia
        this.lado2 = lado2;
    }

    calcularArea(): number {
        return this.lado1 * this.lado2; //metodo para calcular el area. 
    }

    imprimir(): void {// metodo para imprimir
        console.log(`Cuadrado  Lado: ${this.lado1}, Lado: ${this.lado2}`);//llamo los valores definodos y los mestro
        console.log(`Área del cuadrado: ${this.calcularArea()}`);//llamo la funcion o metodo para calcular el area y mostralo
    }
}

// Clase para calcular el área del círculo
export class Circulo {
    protected radio: number;// poner o dar una declaracion 

    constructor(radio: number) {
        this.radio = radio;// el metodo constructor para despues llamarlo como herencia
    }

    calcularArea(): number {
        return Math.PI * Math.pow(this.radio, 2);//metodo para calcular el area. 
    }

    imprimir(): void {// metodo para imprimir
        console.log(`Círculo - Radio: ${this.radio}`);//llamo los valores definodos y los mestro
        console.log(`Área del círculo: ${this.calcularArea()}`);//llamo la funcion o metodo para calcular el area y mostralo
    }
}
