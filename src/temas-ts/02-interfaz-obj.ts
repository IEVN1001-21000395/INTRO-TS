
interface Alumno{
    nombre: string;
    edad: number;
    apellido: string;
    genero: string;
    calificacion?: number;
}

const alumno:Alumno = {
    nombre: "Cristian",
    apellido: "Serrano",
    edad: 23,
    genero: "M",
    calificacion: 0
}

console.table(alumno)

let mascotas = ['perico', 'perro', 'gato'];

console.log(mascotas[1]);
mascotas[1]='nuevo perra';
console.log(mascotas[1]);
mascotas.push('hamster');
console.log(mascotas);

let tem:(string|number)[]=[];

tem.push(11);
tem.push('Mario')

console.log(tem)