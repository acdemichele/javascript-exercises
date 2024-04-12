const removeFromArray = function (arr, ...value) {
  return arr.filter((x) => !value.includes(x));
};

module.exports = removeFromArray;
