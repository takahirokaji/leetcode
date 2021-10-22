const addTwoNumbers = (l1, l2) => {
  console.log(l1);
  console.log(l2);
  const toNum = (array) => {
    return Number(array.reverse().join(""));
  };
  const sum = (toNum(l1) + toNum(l2)).toString();
  return [...sum].reverse().map((el) => Number(el));
};

console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]));
