// Input: nums={2, 7, 11, 15}, target=9
// Output: index1=1, index2=2

const nums = [4, 2, 4, 3]
const tar = 8

var twoSum= function(nums, target) {
  const hash = []
  for(const [currentIndex, current] of nums.entries()) {
      const lastIndex = hash[ target - current ]
      if ( lastIndex !== undefined  ) {
        return [ lastIndex, currentIndex ]
      }
      hash[current] = currentIndex
  }
  return []
};

console.log(twoSum(nums, tar))
