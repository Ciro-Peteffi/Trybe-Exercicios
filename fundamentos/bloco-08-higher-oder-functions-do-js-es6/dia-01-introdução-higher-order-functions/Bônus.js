const mage = {
	healthPoints: 130,
	intelligence: 45,
	mana: 125,
	damage: undefined,
};

const warrior = {
	healthPoints: 200,
	strength: 30,
	weaponDmg: 2,
	damage: undefined,
};

const dragon = {
	healthPoints: 350,
	strength: 50,
	damage: undefined,
};

const battleMembers = { mage, warrior, dragon };
// console.log(battleMembers);

// Parte I - Game Actions Simulator - Nestes exercícios você irá implementar HOFs que simulam um turno de batalha em um jogo. Você irá criar funções que calculam dano, atualizam status, e ao final, retornam os resultados da rodada.

// 1 - Crie uma função que retorna o dano do dragão. O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).


const damageDragon = () => Math.floor(Math.random() * (dragon.strength - 14) + 15);

// console.log(damageDragon());

// 2 - Crie uma função que retorna o dano causado pelo warrior . O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).


const damageWarrior = () =>	{
  const warriorStrenghtMin = warrior.strength;
  const warriorStrenghtMax = (warrior.strength * warrior.weaponDmg) - (warrior.strength - 1);
  return Math.floor(Math.random() * warriorStrenghtMax) + warriorStrenghtMin;
  };

// console.log(damageWarrior());

// 3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno. O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo). A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.


const objMage = () => {
const mageDamageMin = mage.intelligence;
const mageDamageMax = mage.intelligence * 2 - (mageDamageMin - 1);
const manaTurn = 15;
	const roundStatus = {
		mageDamage: Math.floor(Math.random() * mageDamageMax) + mageDamageMin,
		spendManaByTurn: manaTurn,
	};

  if (manaTurn < 15) {
    roundStatus.spendManaByTurn = 0;
    roundStatus.mageDamage = 'Não possui mana suficiente'
  }
  return roundStatus;
};

// console.log(objMage());

// Parte II - Agora que você já possui a implementação das funções relativas aos três exercícios anteriores, passe-as como parâmetro para outras funções que irão compor um objeto gameActions . O objeto será composto por ações do jogo e cada ação é por denifição uma HOF , pois neste caso, são funções que recebem como parâmetro outra função. Copie o código abaixo e inicie sua implementação:

const gameActions = {

  // 1 - Crie a primeira HOF que compõe o objeto gameActions . Ela será a função que simula o turno do personagem warrior . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon . Além disto ela também deve atualizar o valor da chave damage do warrior .

  warriorTurn: (callback) => {
    warrior.damage = callback();
    dragon.healthPoints = dragon.healthPoints - warrior.damage;
  },

  // 2 - Crie a segunda HOF que compõe o objeto gameActions . Ela será a função que simula o turno do personagem mage . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem mage e atualizará os healthPoints do monstro dragon . Além disto ela também deve atualizar o valor das chaves damage e mana do mage.

  mageTurn: (callback) => {
    const mageStatus = callback();
    mage.damage = mageStatus.mageDamage;
    dragon.healthPoints = dragon.healthPoints - mage.damage;
  },

  // 3 - Crie a terceira HOF que compõe o objeto gameActions . Ela será a função que simula o turno do monstro dragon . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo monstro dragon e atualizará os healthPoints dos personagens mage e warrior . Além disto ela também deve atualizar o valor da chave damage do monstro.
  
  dragonTurn: (callback) => {
    dragon.damage = callback();
    warrior.healthPoints = warrior.healthPoints - dragon.damage;
    mage.healthPoints = mage.healthPoints - dragon.damage;
    },

  // 4 - Adicione ao objeto gameActions uma função que retorne o objeto battleMembers atualizado e faça um console.log para visualizar o resultado final do turno.

  turnResult: (callback1, callback2, callback3) => {
    callback1;
    callback2;
    callback3;
    console.log(battleMembers);
  },

};

// gameActions.warriorTurn(damageWarrior);
// gameActions.mageTurn(objMage);
// gameActions.dragonTurn(damageDragon);


gameActions.turnResult(gameActions.dragonTurn(damageDragon), gameActions.mageTurn(objMage), gameActions.warriorTurn(damageWarrior));

console.log(warrior.damage);
console.log(dragon.healthPoints);

console.log(mage.damage);
console.log(dragon.healthPoints);

console.log(dragon.damage);
console.log(mage.healthPoints);
console.log(warrior.healthPoints); 

