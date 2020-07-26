const helloWorld = () => {
    const hello = 'Hello World';
    console.log(hello);
}

// Al estar creada dentro de la función, el console log final no puede encontrar dicha variable
helloWorld();
console.log(hello);

var scope = 'i am global';

const functionScope = () => {
    var scope = 'i am just a local';
    const func = () => {
        return scope
    }
    console.log(func());
}

functionScope();
// Solo enseñara el resultado de la variable scope definida dentro de la función. Esto gracias al almbito léxico que facilita que la variable global no sea alterada.