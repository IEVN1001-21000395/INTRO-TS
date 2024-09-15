import { FiguraArea } from './11-clasefiguras'; // Importamos la clase de áreas

export class FiguraVolumen extends FiguraArea {
    protected altura: number;
    
    constructor(lado1: number, radio: number, altura: number) {
        super(lado1, radio); // Llamada al constructor de la clase 
        this.altura = altura; 
    }

    calcularPrismaRectangularVolumen(): number {
        return this.RectanguloArea() * this.altura;
    }

    // Método para calcular el volumen de un cubo
    calcularCuboVolumen(): number {
        return this.CruadadoArea() * this.altura;
    }

    // Método para calcular el volumen de un cilindro
    calcularCilindroVolumen(): number {
        return this.CirculoArea() * this.altura;
    }

    imprimirVolumenRectangulo() {
        console.log(`Área del rectángulo: ${this.RectanguloArea()}, Volumen del prisma rectangular: ${this.calcularPrismaRectangularVolumen()}`);
    }

    imprimirVolumenCubo() {
        console.log(`Área del cuadrado: ${this.CruadadoArea()}, Volumen del cubo: ${this.calcularCuboVolumen()}`);
    }
    imprimirVolumenCilindro() {
        console.log(`Área del círculo: ${this.CirculoArea()}, Volumen del cilindro: ${this.calcularCilindroVolumen()}`);
    }
}
const figuraVolumen = new FiguraVolumen(10, 5, 4);
figuraVolumen.imprimirVolumenRectangulo();
// Imprimir el área y el volumen del cubo
figuraVolumen.imprimirVolumenCubo();
// Imprimir el área y el volumen del cilindro
figuraVolumen.imprimirVolumenCilindro();
