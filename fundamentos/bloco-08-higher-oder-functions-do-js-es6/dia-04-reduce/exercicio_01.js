//  1 - Dada uma matriz, transforme em um array.

const arrays = [['1', '2', '3'], [true], [4, 5, 6]];

const teste = arrays.reduce((acc, value) => {
    value.forEach(element => {
        acc.push(element)
    }); return acc;
}, [] )

console.log(teste);