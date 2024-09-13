import class Figura1 extends Volumen1{
    private largo: number;
    private ancho: number;
    private area: number;

    constructor(largo: number, ancho: number) {
        super('Rectángulo');
        this.largo = largo;
        this.ancho = ancho;
        this.area = this.calcularArea(); // Calcular el área en el constructor
    }

    // Método para calcular el área del rectángulo
    calcularArea(): number {
        return this.largo * this.ancho;
    }

    imprimir(): void {
        console.log(El área es de ${this.area});
    }

// Ejemplo de uso
const rectangulo = new Volumen1(100, 60);
rectangulo.imprimir();
rectangulo.pagaImpuesto();