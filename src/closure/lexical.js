const buildCount = (i) => {
    let count = i;
    const displayCount = () => {
        console.log(count++);
    }
    return displayCount;
}


// Se crea una variable con el scope contador, que aceptará el valor 1 y gracias al closure displayCount, recibira el valor y le sumara 1. Por eso de ahi en adelante seguira entregndo valores en orden
const contador = buildCount(1);
contador();
contador();
contador();

// Ocurre lo mismo en este casi, se crea una variable con el scope myOtherCount, entrega el valor de 10 y de ahí en adelante se limita a sumar de uno en uno
const myOtherCount = buildCount(10)
myOtherCount();
myOtherCount();