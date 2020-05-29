var maxProfit = function (prices) {
  if (prices.length < 2) {
    return 0;
  }

  let max = 0;
  let min = Math.min(prices[0], prices[1]);

  for (let i = 1; i < prices.length; i += 1) {
    min = Math.min(min, prices[i]);
    max = Math.max(max, prices[i] - min);
  }

  return max;
};
