// it is toooooooooo late
const lengthOfLongestSubstring = (s) => {
  let map = new Map();
  const splitedArr = [...s];
  const splitedArrLength = splitedArr.length;
  let saveSize = 0;
  let i = 0;
  while (i < splitedArrLength) {
    const target = splitedArr[i];
    if (map.has(target)) {
      saveSize = map.size > saveSize ? map.size : saveSize;
      i = map.get(target) + 1;
      map.clear();
    } else {
      map.set(target, i);
      i++;
    }
  }
  return Math.max(map.size, saveSize);
};

console.log(lengthOfLongestSubstring("ggububgvfk"));
