.length property on an array will return num of elements in the array. For example, array below contains two elements
[1,[2,3]]
//2 elements, number 1 and array [2,3]

Write function that returns total number of non-nested items in a nested array. 

getLength([1, [2, 3]]) ➞ 3
getLength([1, [2, [3, 4]]]) ➞ 4
getLength([1, [2, [3, [4, [5, 6]]]]]) ➞ 6
getLength([1, [2], 1, [2], 1]) ➞ 5