export class  Figura1{
     protected largo:number;
     protected ancho:number;
    constructor(largo:number,ancho:number){
        this.largo=largo;
        this.ancho=ancho;
    }
    imprimir(){
        console.log("Largo del rectangulo: " +this.largo+" Ancho: "+this.ancho);
    }
}

class Figura2{
    protected lado1:number;
    protected lado2:number;
    protected lado3:number;
    protected lado4:number;
   constructor(lado1:number,lado2:number,lado3:number,lado4:number){
       this.lado1=lado1;
       this.lado2=lado2;
       this.lado3=lado3;
       this.lado4=lado4;
       
   }
   imprimir(){
       console.log("largo del lado 1: " +this.lado1+"largo del lado 2: " +this.lado2+"largo del lado 3: " +this.lado3+"largo del lado 4: " +this.lado4);
   }
}

class Figura3{
    protected radio:number;
   constructor(radio:number){
       this.radio=radio;
       
       
   }
   imprimir(){
       console.log("El radio es de : " +this.radio)
    }
}

