// it takes half as fast as 003.js
const lengthOfLongestSubstring = (s) => {
  const splitedArr = [...s];
  let saveStr = "";
  let ans = 0;
  splitedArr.forEach((el) => {
    const indexOfEl = saveStr.indexOf(el);
    if (indexOfEl >= 0) {
      saveStr = saveStr.substr(indexOfEl + 1) + el;
    } else {
      saveStr = saveStr + el;
    }
    ans = Math.max(saveStr.length, ans);
  });
  return ans;
};
console.log(lengthOfLongestSubstring("ggububgvfk"));
