const fruits = () => {
    if(true){
        var fruits1 = 'apple';
        let fruits2 = 'banana';
        const fruits3 = 'kiwi';
    }
    console.log(fruits1);
    console.log(fruits2);
    console.log(fruits3);
    // Con los valores de let y const, el console log no puede acceder a fruits2 y 3 dado que tiene un scope de bloque (No pueden salir mas allá del if en el que fueron declarados)
}

fruits();

let x = 1;
{
    let x = 2;
    console.log(x);  //2
}

console.log(x); //1

var x = 1;
{
    var x = 2;
    console.log(x);  //2
}

console.log(x); //2