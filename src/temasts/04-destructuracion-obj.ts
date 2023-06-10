
interface Alumno1{
    matricula1:number;
    nombre:string;
    edad:number;
    correo:string;
    grupo:Grupo;
}

interface Grupo{
    grupo:string;
    year:number;
}

const alumno2:Alumno1={
    matricula1: 20001510,
    nombre: "Alexis",
    edad: 21,
    correo: "alexisprado785@gmail.com",
    grupo : {
        grupo: "IDGS",
        year: 2023,
    }
}
console.log(`La matricula es: ${alumno2.matricula1}`)
console.log(`El nombre es: ${alumno2.nombre}`)
console.log(`El año del grupo es: ${alumno2.grupo.year}`)

const{matricula1,nombre:nom,grupo:xx}=alumno2
const{grupo,year:anio}=xx

console.log(`La matricula es: ${matricula1}`)
console.log(`El nombre es: ${nom}`)
console.log(`El grupo es: ${grupo}`)
console.log(`El grupo es: ${anio}`)

//Desustructuración de arreglos
const gps:string[]=['IDGS','IEVN','REDES'];

console.log(`Grupo 1: ${gps[0]}`)
console.log(`Grupo 2: ${gps[1]}`)
console.log(`Grupo 3: ${gps[2]}`)

const[a,,b]=gps
console.log(`Grupo 1: ${a}`)
//console.log(`Grupo 1: ${}`)
console.log(`Grupo 3: ${b}`)