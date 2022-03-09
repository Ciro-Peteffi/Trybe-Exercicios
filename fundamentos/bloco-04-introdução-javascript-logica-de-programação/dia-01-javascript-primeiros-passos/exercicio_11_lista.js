const salarioBruto = 4000.0;

let aliquotaINSS;
let aliquotaIR;
let salarioBase;
let salarioLiquido;

if (salarioBruto <= 1556.94) {
  aliquotaINSS = salarioBruto * 0.08;
  salarioBase = salarioBruto - aliquotaINSS;
} else if (salarioBruto <= 2594.92) {
  aliquotaINSS = salarioBruto * 0.09;
  salarioBase = salarioBruto - aliquotaINSS;
} else if (salarioBruto <= 5189.82) {
  aliquotaINSS = salarioBruto * 0.11;
  salarioBase = salarioBruto - aliquotaINSS;
} else {
  aliquotaINSS = 570.88;
  salarioBase = salarioBruto - aliquotaINSS;
}

console.log(salarioBase);

if (salarioBase <= 1903.98) {
  aliquotaIR = 0;
  salarioLiquido = salarioBase - aliquotaIR;
} else if (salarioBase <= 2826.65) {
  aliquotaIR = salarioBase * 0.075 - 142.8;
  salarioLiquido = salarioBase - aliquotaIR;
} else if (salarioBase <= 37851.05) {
  aliquotaIR = salarioBase * 0.15 - 354.8;
  salarioLiquido = salarioBase - aliquotaIR;
} else if (salarioBase <= 4664.68) {
  aliquotaIR = salarioBase * 0.225 - 636.13;
  salarioLiquido = salarioBase - aliquotaIR;
} else {
  aliquotaIR = salarioBruto * 0.275 - 869.36;
}

console.log("Salário: " + salarioLiquido);
