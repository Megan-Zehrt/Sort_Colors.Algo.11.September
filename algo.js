// 75. Sort Colors



// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.





/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let low = 0, mid = 0, high = nums.length - 1;

    while (mid <= high) {
        if (nums[mid] === 0) {
            // Swap nums[low] and nums[mid], and move both pointers
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        } else if (nums[mid] === 1) {
            // Just move the mid pointer forward
            mid++;
        } else {
            // Swap nums[mid] and nums[high], and move the high pointer backward
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }
};

