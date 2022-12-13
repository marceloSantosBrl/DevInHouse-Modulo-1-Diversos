const somaTudo = (...arr) => arr.reduce((accumulator, current) => accumulator + current, 0);

const resultado = somaTudo(1, 2, 3, 4);
console.log(resultado);
