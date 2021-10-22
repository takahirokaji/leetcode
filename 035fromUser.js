// I think smart

const searchInsert = (nums, target) => {
  let left = 0,
    right = nums.length - 1;
  while (left !== right) {
    let mid = Math.floor((left + right) / 2);
    if (target > nums[mid]) {
      left = mid + 1;
    } else right = mid;
  }
  return target > nums[nums.length - 1] ? left + 1 : left;
};
