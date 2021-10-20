//　総当り攻撃

// const twoSum = (nums, target) => {
//   let anker = nums.length;
//   for (let i = 0; i < anker; i++) {
//     for (let j = 0; j < anker; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// };

// one-pass hash table
const twoSum = (nums, target) => {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
    console.log(map);
  }
};

console.log(twoSum([2, 3, 3, 7], 10));
