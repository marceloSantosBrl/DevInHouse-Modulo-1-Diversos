const verificaPalindromo = (str) => {
  if (str === null || str.length === 0) return false;
  for (let i = 0; i < str.length / 2 + 1; i += 1) {
    if (str[i] !== str[str.length - 1 - i]) return false;
  }
  return true;
};

const teste1 = verificaPalindromo('ana');

const teste2 = verificaPalindromo('julia');

console.log(teste1);
console.log(teste2);
