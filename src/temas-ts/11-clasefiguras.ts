// Clase para calcular el área del rectángulo
export class FiguraArea {
    protected lado1: number;// poner o dar una declaracion 
    protected radio: number;
    

    constructor(lado1: number,radio: number) {
        this.lado1 = lado1;
        this.radio = radio;
    }

    RectanguloArea(): number {
        return this.lado1 * this.lado1; //metodo para calcular el area 
    }
    CruadadoArea(): number {
        return this.lado1 * this.lado1; //metodo para calcular el area. 
    }
    CirculoArea(): number {
        return Math.PI * Math.pow(this.radio, 2);//metodo para calcular el area. 
    }

   
}//cierro la primera clase 