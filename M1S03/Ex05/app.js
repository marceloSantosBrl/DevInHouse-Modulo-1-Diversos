const somaTudo = (...arr) => {
  const initialValue = 0;
  return arr.reduce((accumulator, current) => accumulator + current, initialValue);
};
