// 287. Find the Duplicate Number
// https://leetcode.com/problems/find-the-duplicate-number/description/
// Решение через хэш-таблицу
// var findDuplicate = function(nums) {
	// let obj = {}

	// for (let i = 0; i < nums.length; i++) {

	// 	if (nums[i] in obj) {
	// 		return nums[i]
	// 	} else {
	// 		obj[nums[i]] = 1
	// 	}		
	// }
// };


// Решение через алгоритм --- Fast and Slow Pointers ---
// Работает быстрее
var findDuplicate = function(nums) {
	let slow = 0
	let fast = 0

	// находим пересечение быстрого и медленного в цикле
	do {
		slow = nums[slow]
		fast = nums[nums[fast]]
	} while (slow !== fast);

	// добавляем второй медленный указатель в начало списка
	// в итоге медленный и медленный2 пересекутся на входе в цикл
	let slow2 = 0
	while (slow !== slow2) {
		slow = nums[slow]
		slow2 = nums[slow2]
	}

	return slow2
};
// console.log(findDuplicate([1,3,4,2,2]));
// console.log(findDuplicate([3,1,3,4,2]));
// console.log(findDuplicate([3,3,3,3,3]));
////////////////////////////////////////////////////////////////////////////////////////////////


// 142. Linked List Cycle II
// https://leetcode.com/problems/linked-list-cycle-ii/description/
// Решение через алгоритм --- Fast and Slow Pointers ---
var detectCycle = function(head) {
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
        return slow
    }
  }
  return null
};
// console.log(detectCycle([3,2,0,-4])) // 1
// console.log(detectCycle([1,2])) // 0
// console.log(detectCycle([1])) // -1
////////////////////////////////////////////////////////////////////////////////////////////////


// 143. Reorder List
// https://leetcode.com/problems/reorder-list/
// Найдите середину, перемещая быстрые и медленные итераторы.
// Запомните начало правой части и отрежьте левую часть справа.
// Переверните правый список, запомните его новое начало.
// Выполните итерацию левой части от начала и правой части, объединяя узлы правого списка в левый список.
var reorderList = function(head) {

	let slow = head
	let fast = head.next

	while (fast && fast.next) {
		slow = slow.next
		fast = fast.next.next

		// let currentSlow = slow
		// slow.next = fast
	}

	let slow2 = slow.next

	console.log('slow', slow);
	// console.log('fast', fast);
	// console.log('slow2', slow2);
	return '-----------';
};
console.log(reorderList({value: 1, next: { value: 2, next: {value: 3, next: {value: 4, next: null	}}}}))
console.log(reorderList({value: 1, next: { value: 2, next: {value: 3, next: {value: 4, next: {value: 5, next: null}}}}}))
// console.log(reorderList([1,2,3,4])); // [1,4,2,3]
// console.log(reorderList([1,2,3,4,5])); // [1,5,2,4,3]