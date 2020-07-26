const person = () => {
    var saveName = "Name";
    return {
        getName: () => {
            return saveName;
        },
        setName: (name) => {
            saveName = name;
        }
    };
}

//console.log(saveName); // No accede al ser una variable privada

newPerson = person();
console.log(newPerson.getName());
newPerson.setName('Sergio');
console.log(newPerson.getName());