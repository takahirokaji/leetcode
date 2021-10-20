const longestCommonPrefix = (strs) => {
  const map = new Map();
  strsLength = strs.length;
  first = [...strs.shift()];
  for (let i = 1; i <= first.length; i++) {
    map.set(first.slice(0, i).join(""), 1);
  }

  splitedStrs = strs.map((el) => [...el]);
  splitedStrs.forEach((el) => {
    for (let i = 1; i <= el.length; i++) {
      let str = el.slice(0, i).join("");
      if (map.has(str)) {
        map.set(str, map.get(str) + 1);
      }
    }
  });
  let ank = 0;
  let ans = "";
  map.forEach((val, key) => {
    if (ank <= val) {
      ank = val;
      ans = key;
    }
  });
  return ank === strsLength ? ans : "";
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
