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

// Parte I - Game Actions Simulator - Nestes exercícios você irá implementar HOFs que simulam um turno de batalha em um jogo. Você irá criar funções que calculam dano, atualizam status, e ao final, retornam os resultados da rodada.

// 1 - Crie uma função que retorna o dano do dragão. O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).

const dragonStrengthMax = dragon.strength - 14;
const damageDragon = (atributeDgStrMax) => Math.floor(Math.random() * atributeDgStrMax) + 15;
console.log(damageDragon(dragonStrengthMax));

// 2 - Crie uma função que retorna o dano causado pelo warrior . O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).

const warriorStrenghtMin = warrior.strength;
const warriorStrenghtMax = warrior.strength * warrior.weaponDmg - (warrior.strength - 1);
const damageWarrior = (atributeWarStrMax, atributeWarStrMin) =>	Math.floor(Math.random() * atributeWarStrMax) + atributeWarStrMin;
console.log(damageWarrior(warriorStrenghtMax, warriorStrenghtMin));

// 3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno. O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo). A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.

const mageDamageMin = mage.intelligence;
const mageDamageMax = mage.intelligence * 2 - (mageDamageMin - 1);
const manaTurn = 14;
const objMage = (atributeMgDmgMax, atributeMgDmgMin, mana) => {
	const roundStatus = {
		mageDamage: Math.floor(Math.random() * atributeMgDmgMax) + atributeMgDmgMin,
		spendManaByTurn: mana,
	};

  if (mana < 15) {
    roundStatus.spendManaByTurn = 0;
    roundStatus.mageDamage = 'Não possui mana suficiente'
  }
  return roundStatus;
};

console.log(objMage(mageDamageMax, mageDamageMin, manaTurn));