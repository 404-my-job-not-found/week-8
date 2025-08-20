function lengthOfLIS(nums: number[]): number {
  const tails: number[] = [];

  for (const x of nums) {
    let l = 0,
      r = tails.length;
    while (l < r) {
      const m = (l + r) >>> 1;
      if (tails[m] >= x) r = m;
      else l = m + 1;
    }

    tails[l] = x;
  }
  return tails.length;
}
