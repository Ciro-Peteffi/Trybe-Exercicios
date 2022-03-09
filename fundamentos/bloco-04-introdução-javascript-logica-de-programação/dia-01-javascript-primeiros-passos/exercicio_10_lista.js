const custoProduto = 100;
const valorVendaProduto = 200;

if (custoProduto < 0 || valorVendaProduto <0) {
    console.log('Valores inseridos inválidos');
} else {
    
    let lucro = (valorVendaProduto - (custoProduto * 1.2)) *1000;
    console.log(lucro);
    
}