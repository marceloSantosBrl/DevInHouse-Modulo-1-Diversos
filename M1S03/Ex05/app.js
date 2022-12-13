const somaTudo = (...arr) => {
  const initialValue = 0;
  const sum = arr.reduce((accumulator, current) => accumulator + current, initialValue);
  return sum;
};
