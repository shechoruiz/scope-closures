var hello = 'Hello';
var hello = 'Hello +'
let world = 'Hello World'
const helloWorld = 'Hello World!'

const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFunction();

//############################
// 1er error a tener en cuenta: Llamar una variable dentro de una función, como si fuera global

const helloWorld = () => {
    globalVar = 'Im global'
}

helloWorld();
console.log(globalVar);

//############################
// 2do error a tener en cuenta: Usar una doble asignación de variables dentro de una función, como si fuera global

const anotherFunction2 = () => {
    var localVar = globalVar = 'Im global'
}

anotherFunction2();
console.log(globalVar)