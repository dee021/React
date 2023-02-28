let arr1 = [1,2,3,4,5];

let arr2 = ['h', 'e', 'l', 'l', 'o'];

let arr3 = [1, 'h', 2, 'i'];

let arr4 = [true, 1, undefined, false, 'h', 2, null, 'i'];

console.log(arr1[0]); // 1
console.log(arr2[1]); // e
console.log(arr3[2]); // 2
console.log(arr4[3]); // false

let obj1 = {a:'apple', b:'banana', c:'carrot'};
let obj2 = {a:1, b:2, c:3};
let obj3 = {a:'hello', b:100, c:[1,2,3,4]};
let obj4 = {a:{a1:1, a2:2}, b:{b1:3, b2:4}, c:{c1:5, c2:6}};
console.log(obj1['a']); // apple
console.log(obj2.a); // 1
console.log(obj3['c']); // [ 1, 2, 3, 4 ]
console.log(obj4.c.c2); // 6