const isPalindrome = (x) => {
  let y = x.toString();

  y = Number([...y].reverse().join(""));
  return x === y ? true : false;
};

console.log(isPalindrome(-11));
