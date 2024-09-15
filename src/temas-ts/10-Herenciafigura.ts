

//importo las clases del archivo anterior pero les pongo apodo con el as para no cundunfirme con las clases y mas aparte llamo el archivo
import { Rectangulo as RectanguloArea, Cuadrado as CuadradoArea, Circulo as CirculoArea } from './09-Clasesfriguras';

// Clase base para calcular el volumen
export class FiguraBase {
    protected altura: number; 

    constructor(altura: number) {
        this.altura = altura;
    }

    calcularVolumen(area: number): number {
        return area * this.altura;
    }

    imprimirVolumen(area: number) {
        console.log(`Volumen de la figura: ${this.calcularVolumen(area)}`);
    }
}

// Clase para rectángulo (hereda de RectánguloArea)
export class RectanguloVolumen extends FiguraBase {
    private rectangulo: RectanguloArea;

    constructor(largo: number, ancho: number, altura: number) {
        super(altura);//permite entrar a los metodos y propiedades de las clases mas llamar el contructor de la misma.
        this.rectangulo = new RectanguloArea(largo, ancho);
    }

    imprimir() {
        const area = this.rectangulo.calcularArea();//metodo de la otra clase. 
        console.log(`Largo del rectángulo: ${this.rectangulo['largo']}, Ancho: ${this.rectangulo['ancho']}, Altura: ${this.altura}`);
        console.log(`Área del rectángulo: ${area}`);
        this.imprimirVolumen(area);
    }
}

// Clase para cuadrado (hereda de CuadradoArea)
export class CuadradoVolumen extends FiguraBase {
    private cuadrado: CuadradoArea;

    constructor(lado1: number, lado2: number, altura: number) {
        super(altura);
        this.cuadrado = new CuadradoArea(lado1, lado2);
    }

    imprimir() {
        const area = this.cuadrado.calcularArea();
        console.log(`Lado 1: ${this.cuadrado['lado1']}, Lado 2: ${this.cuadrado['lado2']}, Altura: ${this.altura}`);
        console.log(`Área del cuadrado: ${area}`);
        this.imprimirVolumen(area);
    }
}

// Clase para círculo (hereda de CirculoArea)
export class CirculoVolumen extends FiguraBase {
    private circulo: CirculoArea;

    constructor(radio: number, altura: number) {
        super(altura);
        this.circulo = new CirculoArea(radio);
    }

    imprimir() {
        const area = this.circulo.calcularArea();
        console.log(`Radio del círculo: ${this.circulo['radio']}, Altura: ${this.altura}`);
        console.log(`Área del círculo: ${area}`);
        this.imprimirVolumen(area);
    }
}

// Ejemplo de uso
const rectanguloVol = new RectanguloVolumen(10, 5, 4);  // Largo, Ancho, Altura
rectanguloVol.imprimir();  // Área y volumen del rectángulo

const cuadradoVol = new CuadradoVolumen(8, 8, 5);  // Lado 1, Lado 2, Altura
cuadradoVol.imprimir();  // Área y volumen del cuadrado

const circuloVol = new CirculoVolumen(7, 10);  // Radio, Altura
circuloVol.imprimir();  // Área y volumen del círculo
