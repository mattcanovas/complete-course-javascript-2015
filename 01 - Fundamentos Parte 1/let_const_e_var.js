console.log(lastName); // Aqui o interpretador entende que a variável existe, então será exibida undefined pois não houve definição

let age = 21;
age = 22;

const name = "Matheus";
// name = "Canovas"; Irá lançar exceção ao compilar
console.log(name);

var lastName = "Canovas";
console.log(lastName);
lastName = "Martins";
console.log(lastName);