const minMax = (arr) => {
  if (arr === null || arr.length === 0) {
    return null;
  }
  let max = -Infinity;
  let min = +Infinity;
  arr.forEach((i) => {
    if (max < i) max = i;
    if (min > i) min = i;
  });
  return {
    min,
    max,
  };
};

const procuraMinMax = (arr) => {
  const value = minMax(arr);
  if (value === null) {
    console.log('Não é possível encontrar');
  } else {
    console.log(`O valor mínimo é igual a ${value.min} e o máximo igual a ${value.max}`);
  }
};

module.exports = minMax;
