// 1 - Crie um objeto player

let player = {
  name: "Marta",
  lastName: "Silva",
  age: "34",
  medals: {
    golden: 2,
    silver: 3,
  },
};

// 2 - Acesse as chaves name , lastName e age e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".


// console.log(player.name, player.lastName, player.age);

// console.log(player.name);
// console.log(player.lastName);
// console.log(player.age);
// console.log(player['name'], player['age'], player['lastName'], player['medals']['silver']);


console.log('A jogadora ' + player.name +' tem ' + player.age + ' anos de idade.');

// 3 - Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.


player['bestIntheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];

console.log(player);

// 4 - Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por ' + player.bestIntheWorld.length + ' vezes.')

// 5 - Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".
// Agora veremos uma variação do laço for , que nos garante facilidade ao lidar com objetos.

console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.' )
