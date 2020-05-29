var maxProfit = function (prices) {
  if (prices.length < 2) {
    return 0;
  }

  let max = 0;
  let min = prices[0];

  for (let i = 1; i < prices.length; i += 1) {
    min = Math.min(min, prices[i]);
    if (prices[i] > min) {
      max += prices[i] - min;
      min = prices[i];
    }
  }

  return max;
};
