const minMax = require('./app');

const shortener = (arr, obj) => {
  expect(minMax(arr)).toStrictEqual(obj);
};

test('teste genérico', () => {
  shortener([56, 65, 64, -3, 23, 42, -15, 65, 14, 32, 78, 70, 47], { min: -15, max: 78 });
  shortener([], null);
  shortener([1], { min: 1, max: 1 });
  shortener([1, -1], { min: -1, max: 1 });
  shortener(null, null);
  shortener([-2, -2, -2, -2], { min: -2, max: -2 });
  shortener([20, 10, 30], { min: 10, max: 30 });
});
