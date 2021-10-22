// easy to write

const searchInsert = (nums, target) => {
  return [...nums, target].sort((a, b) => a - b).indexOf(2);
};

console.log(searchInsert([1, 2, 3, 4, 5, 10], 2));
