const removeElement = (nums, val) => {
  let newArr = nums.map((el) => (el === val ? "_" : el)).sort();
  let underCounter = newArr.filter((el) => el === "_").length;

  return nums.length - underCounter;
};

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
