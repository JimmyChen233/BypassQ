const { Dish } = require('../model');

exports.findTopThree = (arr) => {
  let res = {};
  const topArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (!(arr[i] in res)) {
      res[arr[i]] = 1;
    } else {
      res[arr[i]] += res[arr[i]];
    }
  }

  for (let [key, value] of Object.entries(res)) {
    topArray.push({ key, count: value });
  }

  return topArray.sort((a, b) => b.count - a.count).slice(0, 3);
};
