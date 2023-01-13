/* Variáveis */

const constant = "train"; // por escopo - imutável
let variable = "train"; // por escopo - mutável
var globalVariable = "train"; // Não é recomendado usar


/* Funções */

/* function <qualquer nome>(<parâmetros>) {} */
function unifyStrings(str1, str2) { // Função padrão
  return str1 + str2;
}

/* const <qualquer nome> = (<parâmetros>) => {} */
const removeLastCharacter = (str) => { // Arrow function
  return str.splice(str.length - 1, 1);
};

/* const <qualquer nome> = function (<parâmetros>) {} */
const reverseString = function (str) { // Função anônima
  return str.split("").reverse().join();
};


/* Loops */

/* for (<variável>, <condição de parada>, <modificação da variável>) {} */
for (let index = 0; index < 10; index += 1) {
  // console.log('index', index);
};

/* while (<condição de parada>) {} */
let shouldContinue = true;
while (shouldContinue) {
  const randomNumber = Math.floor(Math.random() * 10);
  // console.log('random number', randomNumber);

  if (randomNumber % 2 === 0) {
    shouldContinue = false;
  }
}


/* Condicionais */

/* if (<condicional>) {} */
const randomNumber = Math.floor(Math.random() * 10);
const isEven = randomNumber % 2 === 0;
if (isEven) {
  console.log('É par!', randomNumber);
} else if (randomNumber < 5) {
  console.log('Não é par, mas é menor que 5', randomNumber);
} else {
  console.log('Não é nada', randomNumber);
}

/*
switch(<valor>) {
  case <condição>:
  default:
};
*/
const color = 'amarelo';
switch (color) {
  case 'amarelo':
    console.log('Atenção!');
    break;
  case 'verde':
    console.log('Pó ir!');
    break;
  case 'vermelho':
    console.log('Parou!');
    break;
  default:
    console.log('Estourou o semáforo');
}
