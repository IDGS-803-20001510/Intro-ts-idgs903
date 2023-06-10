
interface Alumno{
    matricula : number;
    nombre : string;
    email : string;
}

const  alumno= {
    nombre : "Alexis",
    matricula : 20001510,
    email : "alexisprado785@gmail.com"
}

let mascotas=['Perro', 'Gato', "Perico"]
mascotas[1]="ahaha"

let tem:(number|string)[]=[]
tem.push("nombre")
tem.push(224)

console.log(alumno)
console.table(mascotas)
