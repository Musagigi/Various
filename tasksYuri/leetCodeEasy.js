///// Sorted Algo ////////////////////////////////////////////////////
// Сортировка пузырьком O(n2).
const bubbleSort = (arr) => {
	for (let i = 0; i < arr.length; i++) {
	  for (let j = 0; j < arr.length - i; j++) {
		if (arr[j] > arr[j + 1]) {
		  [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Меняем значения переменных
		}
	  }
	}
};

// Быстрая сортировка O(n*log(n)) - при хорошем расскладе, а так O(n2)
const partition = (arr, start, end) => {
	const pivot = arr[end]; // Определяем опорный элемент
	let i = start; // Определяем индекс, по которому делим массив на две части
  
	for (let j = start; j <= end - 1; j++) {
	  if (pivot >= arr[j]) {
			[arr[i], arr[j]] = [arr[j], arr[i]]; // Меняем значения переменных
			i++;
	  }
	}
  
	[arr[i], arr[end]] = [arr[end], arr[i]]; // Меняем значения переменных
	return i;
};
  
const quickSort = (arr, start, end) => {
	if (end > start) { // Условия запуска рекурсии
	  const pi = partition(arr, start, end); // Получаем индекс
  
	  quickSort(arr, start, pi - 1);
	  quickSort(arr, pi + 1, end);
	}
};
///// Sorted Algo ////////////////////////////////////////////////////


///// Search Algo ////////////////////////////////////////////////////
// Бинарный поиск - сложность O(log(n)), в лучшем случае O(1)
// Использовать только при отсортированном массиве!!!
const binarySearch = (arr, findItem) => {
	let start = 0;
	let end = arr.length - 1;
  
	while (end >= start) {
	  let mid = Math.floor((start + end) / 2);
  
	  if (arr[mid] === findItem) {
			return mid;
	  }
  
	  if (findItem > arr[mid]) {
			start = mid + 1; // Отбрасываем левую часть массива
	  } else {
			end = mid - 1; // Отбрасываем правую часть массива
	  }
	}
  
	return -1;
};
///// Search Algo ////////////////////////////////////////////////////


// https://leetcode.com/problems/maximum-average-subarray-i/description/
// 643. Maximum Average Subarray I
// Pattern - Sibling Window
var findMaxAverage = function(nums, k) {
  if (nums.length === 1) {return nums[0]}
  if (k === 1) {return Math.max(...nums)}
	if (nums.length === k) return nums.reduce((acc, curr) => acc += curr) / k

	let windowMaxSum = -Infinity  
  let windowSum = 0
	let left = 0

  for (let right = 0; nums.length > right; right++) { 

		windowSum += nums[right]

		if (right - left + 1 >= k) {	
			windowMaxSum = Math.max(windowSum, windowMaxSum)

			windowSum -= nums[left]			
			left += 1
		}			
  }

  return windowMaxSum / k
};
// console.log(findMaxAverage([1,12,-5,-6,50,3], 4)); // 12.75
// console.log(findMaxAverage([5], 1)); // 5
// console.log(findMaxAverage([0,4,0,3,2], 1)); // 4
// console.log(findMaxAverage([4,2,1,3,3], 2)); // 3
// console.log(findMaxAverage([4,0,4,3,3], 5)); // 2.8
// console.log(findMaxAverage([9,7,3,5,6,2,0,8,1,9], 6)); // 5.3
// console.log(findMaxAverage([-6662,5432,-8558,-8935,8731,-3083,4115,9931,-4006,-3284,-3024,1714,-2825,-2374,-2750,-959,6516,9356,8040,-2169,-9490,-3068,6299,7823,-9767,5751,-7897,6680,-1293,-3486,-6785,6337,-9158,-4183,6240,-2846,-2588,-5458,-9576,-1501,-908,-5477,7596,-8863,-4088,7922,8231,-4928,7636,-3994,-243,-1327,8425,-3468,-4218,-364,4257,5690,1035,6217,8880,4127,-6299,-1831,2854,-4498,-6983,-677,2216,-1938,3348,4099,3591,9076,942,4571,-4200,7271,-6920,-1886,662,7844,3658,-6562,-2106,-296,-3280,8909,-8352,-9413,3513,1352,-8825], 90));
////////////////////////////////////////////////////


///// Pattern Prefix Sum ////////////////////////////////////////////////////
// 303. Range Sum Query - Immutable
// https://leetcode.com/problems/range-sum-query-immutable/description/
var NumArray = function (numbers) {
  this.prefixSumArray = [];
  let s0 = 0;
  for (let i = 0; i < numbers.length; i++) {
    this.prefixSumArray.push(numbers[i] + s0);
    s0 = this.prefixSumArray[i];
  }
};

NumArray.prototype.sumRange = function (left, right) {
  return left > 0
    ? this.prefixSumArray[right] - this.prefixSumArray[left - 1]
    : this.prefixSumArray[right];
};

const nums = [-2, 0, 3, -5, 2, -1];
const obj = new NumArray(nums);
// console.log(obj.sumRange(0, 2));


// 525. Contiguous Array
// https://leetcode.com/problems/contiguous-array/description/
var findMaxLength = function (nums) {
  const obj = {
    0: -1,
  };
  let count = 0;
  let answer = 0;

  for (let i = 0; i < nums.length; i++) {
    count += nums[i] === 1 ? 1 : -1;

    if (count in obj) {
      answer = Math.max(answer, i - obj[count]);
    } else {
      obj[count] = i;
    }
  }

  return answer;
};
// console.log(
//   findMaxLength([0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0]),
// );
// console.log(findMaxLength([0, 1]));


// 560. Subarray Sum Equals K
// https://leetcode.com/problems/subarray-sum-equals-k/description/
var subarraySum = function (nums, k) {
  let answer = 0;
  let count = 0;

  const hashSum = {
    0: 1,
  };

  for (let i = 0; i < nums.length; i++) {
    count += nums[i];

    if (count - k in hashSum) {
      answer += hashSum[count - k];
    }

    hashSum[count] ? (hashSum[count] += 1) : (hashSum[count] = 1);
  }
  console.log(hashSum);
  return answer;
};
// console.log(subarraySum([1, 1, 1], 2)); // 2
// console.log(subarraySum([1, 2, 3], 3)); // 2
// console.log(subarraySum([1], 1)); // 1
// console.log(subarraySum([1, -1, 0], 0)); // 3
///// Pattern Prefix Sum ////////////////////////////////////////////////////



///// Algo Two Pointer ////////////////////////////////////////////////////
// 167. Two Sum II - Input Array Is Sorted
// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/
var twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;
  let sum = 0;

  while (right) {
    sum = numbers[left] + numbers[right];

    if (sum === target) {
      return [left + 1, right + 1];
    }

    sum > target ? (right -= 1) : (left += 1);
  }
};
// console.log(twoSum([2, 7, 11, 15], 9)); // [1,2]
// console.log(twoSum([2, 3, 4], 6)); // [1,3]
// console.log(twoSum([-1, 0], -1)); // [1,2]
// console.log(twoSum([5, 25, 75], 100)); // [2,3]


// 15. 3Sum
// https://leetcode.com/problem s/3sum/
// РЕШЕНИЕ НЕ ПРАВИЛЬНОЕ, НАДО ДОДЕЛАТЬ !!!
var threeSum = function (nums) {
  let left = 0;
  const answer = {};
  const sortedNums = nums.sort((a, b) => a - b);
  console.log(sortedNums);
  for (let i = 0; i < sortedNums.length; i++) {
    let right = sortedNums.length - 1;
    let preright = right - 1;
    let sum = 0;

    while (preright > left) {
      if (left !== preright && left !== right && preright !== right) {
        sum = sortedNums[left] + sortedNums[preright] + sortedNums[right];

        if (sum === 0) {
          answer[
            `${sortedNums[left]}${sortedNums[preright]}${sortedNums[right]}`
          ] = [sortedNums[left], sortedNums[preright], sortedNums[right]];
        }

        if (sum > 0) {
          preright -= 1;
          right -= 1;
        } else {
          left += 1;
        }
      }
    }
  }

  return Object.values(answer);
};
// console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1,0,1], [-1,2,-1]]
// console.log(threeSum([0, 0, 0, 0])); // [[0,0,0]]
// console.log(threeSum([-1, 0, 1, 0])); // [[-1,0,1]]
///// Algo Two Pointer ////////////////////////////////////////////////////


// 645. Set Mismatch
// https://leetcode.com/problems/set-mismatch/description/
// Самый быстрый способ найти пропущенное число в массиве чисел
// n * (n + 1) / 2
var findErrorNums = function(nums) {
	const obj = {}
  const N = nums.length
	const TOTAL_SUM = N * (N + 1) / 2
	const ARR_SUM = nums.reduce((acc, cur) => acc + cur)

	for (let item  of nums) {
		if (item in obj) {
			return [item, TOTAL_SUM - (ARR_SUM - item)]
		}

		obj[item] = 1
	}
};
// console.log(findErrorNums([1, 2, 2, 4])); // [2, 3]
// console.log(findErrorNums([1, 1])); // [1, 2]
// console.log(findErrorNums([1, 3, 3])); // [3, 2]
// console.log(findErrorNums([1,5,3,2,2,7,6,4,8,9])); // [2, 10]
////////////////////////////////////////////////////////////////////////////////////////////////


// 141. Linked List Cycle
// https://leetcode.com/problems/linked-list-cycle/description/
// Решение через алгоритм --- Fast and Slow Pointers ---
var hasCycle = function(head) {
  let slow = head
  let fast = head

  while (fast && fast.next && fast.next.next) {
    slow = slow.next
    fast = fast.next.next

    if (slow === fast) {
        slow = head

        while (slow !== fast) {
            slow = slow.next
            fast = fast.next
        }
        return true
    }
  }
  return false    
};
// console.log(detectCycle([3,2,0,-4])) // 1
// console.log(detectCycle([1,2])) // 0
// console.log(detectCycle([1])) // -1
////////////////////////////////////////////////////////////////////////////////////////////////


// 290. Word Pattern
// https://leetcode.com/problems/word-pattern/
var wordPattern = function(pattern, s) {
	const obj = {}
	const sArr = s.split(' ')

	if (pattern.length !== sArr.length) {
		return false
	}

	for (let i = 0; i < pattern.length; i++) {

		if (obj[pattern[i]]) {

			if (obj[pattern[i]] !== sArr[i]) {
				return false
			}
		} else if (Object.values(obj).includes(sArr[i])) {
			return false
		}	else {
			obj[pattern[i]] = sArr[i]
		}		
	}
	return true
};
// console.log(wordPattern('abba', 'dog cat cat dog')); // true
// console.log(wordPattern('abba', 'dog dog dog dog')); // false
// console.log(wordPattern('abc', 'dog cat dog')); // false
////////////////////////////////////////////////////////////////////////////////////////////////






// НАЙТИ НА ЛИТКОДЕ И УЗНАТЬ СЛОЖНОСТЬ
// function sumDigPow(a, b) {
// 	let degree = 1
// 	let sumArr = null
// 	let listTest = []
// 	let listValidValues = []

// 	for (; a < b; a++) {
// 		if (a < 10) {
// 			listValidValues.push(a)
// 		}
// 		else if (a >= 10) {
// 			String(a).split('').forEach(item => {
// 				listTest.push(Number(item) ** degree)
// 				degree++
// 			})

// 			sumArr = listTest.reduce((acc, current) => acc + current, 0)

// 			listTest = []
// 			degree = 1

// 			if (a === sumArr) {
// 				listValidValues.push(a)
// 			}
// 		}
// 		else {
// 			return []
// 		}
// 	}
// 	return listValidValues;
// }
// console.log(sumDigPow(1, 10))
// console.log(sumDigPow(1, 100))
// console.log(sumDigPow(10, 100))
// console.log(sumDigPow(90, 100))
// console.log(sumDigPow(90, 150))
// console.log(sumDigPow(50, 150))
// console.log(sumDigPow(10, 150))
////////////////////////////////////////////////////


// function removeSmallest(numbers) {
// 	let innerArr = [...numbers]
// 	let minNum = Math.min(...innerArr)
// 	let indexMinNum = innerArr.indexOf(minNum)
// 	if (indexMinNum !== -1) {
// 		innerArr.splice(indexMinNum, 1)
// 		return innerArr
// 	}
// 	return []
// }
// console.log(removeSmallest([1, 2, 3, 4, 5]))
// console.log(removeSmallest([5, 3, 2, 0, 4]))
// console.log(removeSmallest([2, 2, 1, 2, 1]))
////////////////////////////////////////////////////


// function queueTime(customers, n) {
	
//   if (!customers.length) {
// 		return 0
// 	}

// 	let result = 0;
// 	let tills = Array(n).fill(0); // создаем массив нулей размером n, чтобы отслеживать время для каждой кассы
	
//   for (let i = 0; i < customers.length; i++) {
		
//     let minTime = Math.min(...tills); // находим кассу с минимальным временем
// 		let minIndex = tills.indexOf(minTime); // находим индекс этой кассы

//     // добавляем время обслуживания очередного клиента к времени кассы с минимальным временем
//     tills[minIndex] += customers[i]; 
//   }

// 	result = Math.max(...tills); // общее время = максимальное время из времен касс
	
//   return result;
// }
// console.log(queueTime([5,3,4], 0)); // -Infinity
// console.log(queueTime([10, 2, 3, 3], 2)); // 10
// console.log(queueTime([2,3,10], 2)); // 12


var longestCommonPrefix = function (strs) {

	let firstStr = strs[0]

	for (let i = 1; i < strs.length; i++) {

    let count = ''

		for (let k = 0; k < strs[i].length; k++) {

			if (firstStr[k] === strs[i][k]) {
				count += strs[i][k]
			} else {
				break
			}
		}
		if (!count) return ''

		firstStr = count
	}

	return firstStr
}
// console.log(longestCommonPrefix(["flower", "flow", "flight"]));
// console.log(longestCommonPrefix(["dog", "racecar", "car"]));
// console.log(longestCommonPrefix(["cir", "car"]));
// console.log(longestCommonPrefix(["cirar", "carar"]));
////////////////////////////////////////////////////


var isValid = function (s) {

	let store = []

	if (s.length < 2) { return false }

	for (let i = 0; i < s.length; i++) {

		if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
			store.push(s[i])
		}
		else {
			if (
				(s[i] === ')' && store.at(-1) !== '(') ||
				(s[i] === ']' && store.at(-1) !== '[') ||
				(s[i] === '}' && store.at(-1) !== '{')
			) {
				return false
			}
			store.pop()
		}
	}
	return true
}
// console.log(isValid('()[]{}'));
// console.log(isValid('()'));
// console.log(isValid('({[]})'));
// console.log(isValid('(]'));


var removeDuplicates = function (nums) {
	let set = new Set(nums);
	let i = 0;
	for (let num of set) {
		nums[i] = num;
		i++;
	}

	nums.splice(i);
	return nums.length
};
// console.log(removeDuplicates([1, 1, 2]));
// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));


// 27. Remove Element
var removeElement = function (nums, val) {
	for (let i = 0; i < nums.length; i++) {

		if (nums[i] === val) {
			nums.splice(i, 1)
			i--
		}
	}

	return nums.length
};
// console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
// console.log(removeElement([3, 2, 2, 3], 2));


// 28. Find the Index of the First Occurrence in a String
var strStr = function (haystack, needle) {
	return haystack.indexOf(needle)
};
// console.log(strStr('busadtsad', 'sad'));
// console.log(strStr('leetcode', 'leeto'));


// 35. Search Insert Position
// var searchInsert = function (nums, target) {

// 	if (nums.includes(target)) {
// 		return nums.indexOf(target)
// 	}

// 	for (let i = 0; i < nums.length; i++) {
// 		if (nums[i] > target) {
// 			return i
// 		}
// 	}

// 	return nums.length
// }
// console.log(searchInsert([1, 3, 5, 6], 5));
// console.log(searchInsert([1, 3, 5, 6], 2));
// console.log(searchInsert([1, 3, 5, 6], 7));
// console.log(searchInsert([1, 3, 4, 6, 7, 10], 11));
////////////////////////////////////////////////////


// 58. Length of Last Word
var lengthOfLastWord = function (s) {
	return s.trim().split(' ').at(-1).length
};
// console.log(lengthOfLastWord("   fly me   to   the moon  "));


// 66. Plus One
var plusOne = function (digits) {
	return String(BigInt(digits.join('')) + BigInt(1)).split('').map(item => +item)
}

// console.log(plusOne([1, 2, 3]));
// console.log(plusOne([4, 3, 2, 1]));
// console.log(plusOne([9]));
// console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 9]));

// 67. Add Binary
var addBinary = (a, b) => (BigInt('0b' + a) + BigInt('0b' + b)).toString(2)


// 69. Sqrt(x)
var mySqrt = function (x) {
	return Math.floor(Math.sqrt(x))
};
// console.log(mySqrt(4));
// console.log(mySqrt(8));


// 70. Climbing Stairs
var climbStairs = function (n) {
	// let count = 1
	// let testArr = []
	// if (n === count) return count

	// if (n & 1) { // если нечетное
	// 	count++
	// 	testArr.push(1)

	// 	for (let i = 2; i < n; i += 2) {
	// 		testArr.push(2)
	// 	}

	// 	for (let i = 0; i < testArr.length; i++) {

	// 	}
	// }
	// return testArr;
};
// console.log(climbStairs(43));
// console.log(climbStairs(2));
// console.log(climbStairs(3));
// console.log(climbStairs(44));


// 459. Repeated Substring Pattern
var repeatedSubstringPattern = function (s) {
	const doubled = s + s;
	const sub = doubled.slice(1, -1);
	return sub.includes(s);
};
// console.log(repeatedSubstringPattern('abab'));
// console.log(repeatedSubstringPattern('abcabcabcabc'));
// console.log(repeatedSubstringPattern('aba'));
/////////////////////////////////


// 169. Majority Element
// Алгоритм большинства голосов Бойера — Мура
var majorityElement = function (nums) {
	let count = 0;
	let candidate = null;

	for (let num of nums) {
		if (count === 0) {
			candidate = num;
		}
		count += (candidate === num) ? 1 : -1;
	}

	return candidate;
};
// console.log(majorityElement([2, 2, 1, 1, 1, 2, 2, 2]));
// console.log(majorityElement([3, 2, 3]));
/////////////////////////////////////////////



// 172. Factorial Trailing Zeroes
var trailingZeroes = function (n) {

	let number = 0
	let factorial = BigInt(1)

	if (n < 2) {
		return 0
	}

	for (let i = 1; i <= n; i++) {
		factorial *= BigInt(i)
	}

	factorial = factorial.toString()

	for (let i = factorial.length - 1; i >= 0; i--) {

		if (factorial[i] == 0) {
			number++
		} else {
			break
		}
	}

	return number
};
// console.log(trailingZeroes(30));
// console.log(trailingZeroes(10));
// console.log(trailingZeroes(7));
/////////////////////////////////////////////



// var merge = function (nums1, m, nums2, n) {
// 	nums1.length = m
// 	nums2.length = n
// 	nums1 = [...nums1, ...nums2]
// 	nums1.sort((a, b) => a - b)
// };

// var nums1 = [1, 2, 3, 0, 0, 0]
// var nums2 = [2, 5, 6]
// var m = 3
// var n = 3
// console.log(merge(nums1, m, nums2, n));
/////////////////////////////////////////////


// 1. Two Sum
var twoSum = function (nums, target) {
	obj = {}
	let count = 0

	for (let i = 0; i < nums.length; i++) {
		count = target - nums[i]

		if (count in obj) {
			return [obj[count], i]
		}
		obj[nums[i]] = i
	}
};
// console.log(twoSum([2, 7, 11, 15], 9));

// 53. Maximum Subarray
var maxSubArray = function (nums) {

	let test = []

	for (let i = 0; i < nums.length; i++) {
		let result = nums[i]

		for (let k = i + 1; k < nums.length; k++) {

			result += nums[k]
		}
		test.push(result)
	}

	if (nums.length) {
		maxSubArray(nums.length - 1)
	}

	return test
};
// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// 27. Remove Element
var removeElement = function (nums, val) {

	for (let i = 0; i < nums.length; i++) {

		if (val === nums[i]) {
			count++
			nums.splice(i, 1)
			i--
		}
	}
	return nums.length
};
// console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));

// 26. Remove Duplicates from Sorted Array
var removeDuplicates = function (nums) {
	for (let i = 0; i < nums.length; i++) {

		if (nums[i] === nums[i + 1]) {
			nums.splice(i, 1)
			i--
		}
	}
	console.log(nums);
	return nums.length

	// nums = nums.filter((elem, index, arr) => elem !== arr[index + 1])
	// return nums
};
// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

// 80. Remove Duplicates from Sorted Array II
var removeDuplicates2 = function (nums) {
	let count = 0
	let j = 1

	for (let i = 1; i < nums.length; i++) {

		if (nums[i] === nums[i - 1]) {
			count++
		} else {
			count = 1
		}

		if (count <= 2) {
			nums[j] = nums[i]
			j++
		}
	}
	nums.length = j
	return nums.length
}
// console.log(removeDuplicates2([0, 0, 0, 0, 1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 4]));
// РЕШЕНИЕ №2
// var removeDuplicates2 = function (nums) {
// 	let obj = {}

// 	for (let i = 0; i < nums.length; i++) {

// 		if (nums[i] in obj) {
// 			obj[nums[i]]++
// 		} else {
// 			obj[nums[i]] = 1
// 		}
// 	}

// 	let objKeys = Object.keys(obj)

// 	objKeys.forEach(elem => {

// 		if (obj[elem] > 2) {

// 			let elemIndex = nums.indexOf(Number(elem))
// 			nums.splice(elemIndex, obj[elem] - 2)
// 		}
// 	})

// 	return nums.length
// }
// console.log(removeDuplicates2([0, 0, 1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 4]));
// console.log(removeDuplicates2([1, 1, 1, 1]));


//169. Majority Element
//Мажоритарный элемент - это элемент, занимающий более половины размера массива. 
//Это означает, что мажоритарный элемент встречается чаще, 
// чем все остальные элементы вместе взятые. То есть, если вы подсчитаете, 
// сколько раз появляется мажоритарный элемент, и вычтете количество вхождений 
// всех остальных элементов, вы получите положительное число.
var majorityElement = function (nums) {

	let count = 0
	let majorityElement = null

	nums.forEach(elem => {
		if (count === 0) {
			majorityElement = elem
		}

		count += (elem === majorityElement) ? 1 : -1
	})
	return majorityElement
};
// console.log(majorityElement([2, 2, 1, 1, 1, 2, 2, 5, 5, 5, 5, 1, 1, 1, 2, 2, 2, 2, 5, 5, 5, 5, 5, 5]));


// 189. Rotate Array
var rotate = function (nums, k) {
	let minusK = nums.length - k % nums.length
	let t = nums.splice(minusK)
	nums.unshift(...t)

	return nums
};
// console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
// console.log(rotate([-1, -100, 3, 99], 2));
// console.log(rotate([1, 2], 5));
// console.log(rotate([1, 2, 3, 4, 5, 6, 7, 8], 3));


//121. Best Time to Buy and Sell Stock
var maxProfit = function (prices) {

	let minPrice = Infinity;
	let maxProfit = 0;
	let profit = 0

	for (let i = 0; i < prices.length; i++) {

		if (prices[i] < minPrice) {
			minPrice = prices[i];
		} else {
			profit = prices[i] - minPrice;

			if (profit > maxProfit) {
				maxProfit = profit;
			}
		}
	}

	return maxProfit;
};
// console.log(maxProfit([7, 1, 5, 3, 6, 4]));
// console.log(maxProfit([7, 6, 4, 3, 1]));
// console.log(maxProfit([2, 4, 1]));


// 122. Best Time to Buy and Sell Stock II
var maxProfit = function (prices) {

};

function findSolution(target) {
	function find(current, history) {
		if (current == target) {
			return history;
		} else if (current > target) {
			return null;
		} else {
			console.log(current);
			return find(current + 5, `(${history} + 5)`) ||
				find(current * 3, `(${history} * З)`);
		}
	}
	return find(1, "1");
}
// console.log(findSolution(244));
// 11 ~(((1 * З) + 5) * З)
// (((((((((1 + 5) + 5) + 5) + 5) + 5) * З) * З) + 5) + 5) - 0.063


// 455. Assign Cookies
var findContentChildren = function (g, s) {

	let sortedG = g.sort((a, b) => a - b)
	let sortedS = s.sort((a, b) => a - b)
	let currentG = 0
	let currentS = 0

	while (currentS < s.length && currentG < g.length) {

		if (sortedS[currentS] >= sortedG[currentG]) {
			currentG++
		}
		currentS++
	}
	return currentG
};
// console.log(findContentChildren([1, 2, 3], [1, 1]));


//136. Single Number
var singleNumber = function (nums) {
	// let obj = {}

	// nums.forEach(num => {

	// 	if (!obj.hasOwnProperty(num)) {
	// 		obj[num] = 1
	// 	}
	// 	else {
	// 		obj[num]++
	// 	}
	// })

	// let c = Object.entries(obj)
	// for (let i = 0; i < c.length; i++) {

	// 	if (c[i][1] === 1) {
	// 		return +c[i][0]
	// 	}
	// }

	// Решение через XOR - a ^ b - побитовое исключающее ИЛИ (XOR)
	// Ставит 1 на бит результата, для которого только один из 
	// соответствующих битов операндов равен 1 (но не оба).
	let result = 0

	for (let i of nums) {
		result ^= i
		// console.log(i.toString(2));
	}


	return result
};
// console.log(singleNumber([4, 1, 2, 1, 2]));



// 268. Missing Number
var missingNumber = function (nums) {
	let numsSort = nums.sort((a, b) => a - b)

	let current = 0

	for (let i = 0; i < numsSort.length; i++) {
		if (!numsSort.includes(current)) {
			return current
		}

		current++
	}

	return current

	// через XOR - разобрать
	// var res = nums.length

	// for (var i = 0; i < nums.length; i++) {
	// 	res ^= i
	// 	res ^= nums[i]
	// }

	// return res
};
// console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
// НАЙТИ НА ЛИТКОДЕ И УЗНАТЬ СЛОЖНОСТЬ
