var isHappy = function (n) {
  let nums = n;
  let squares;
  const maps = {};

  while (true) {
    nums = nums.toString().split('');
    squares = nums.reduce((acc, cur) => acc + cur * cur, 0);

    if (maps[squares]) {
      return false;
    }

    if (squares === 1) {
      return true;
    }

    maps[squares] = true;
    nums = squares;
  }
  return false;
};
