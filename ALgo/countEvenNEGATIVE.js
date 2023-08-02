function countEvenNegatives(nums){
    var count=0;
    for(var i=0;i<nums.length;i++)
    {
        if (nums[i]<0 && nums[i]%2===0)
        { count++;}
    }
    return count ;
}
const nums1 = [1, 5, -1, 2, -4, 9, -10, 0, -3, -2];
const expected1 = 3;
var count1=countEvenNegatives(nums1);
console.log(count1, "should be", expected1);

const nums2 = [];
const expected2 = 0;
var count2=countEvenNegatives(nums2);
console.log(count2, "should be", expected2);

const nums3 = [-4, -2, -6];
const expected3 = 3;
var count3=countEvenNegatives(nums3);
console.log(count3, "should be", expected3);


