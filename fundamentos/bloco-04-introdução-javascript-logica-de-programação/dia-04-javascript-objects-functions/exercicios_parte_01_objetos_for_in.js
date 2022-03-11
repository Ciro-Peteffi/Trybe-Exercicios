// Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.

let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

// 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.

console.log("Bem vinda, " + info.personagem);

// 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.

info["recorrente"] = "Sim";

console.log(info);

// 3 - Faça um for/in que mostre todas as chaves do objeto.

for (keys in info) {
  console.log(keys);
}

// 4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.

for (keys in info) {
  console.log(info[keys]);
}

// 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'

let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dells Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
};

for (keys in info) {
  if (keys === "recorrente" && info[keys] === "Sim" && info2[keys]) {
    console.log("Ambos recorrentes");
  } else {
    console.log(info[keys] + " e " + info2[keys]);
  }
}
