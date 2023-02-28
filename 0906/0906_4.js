let a = 2;
let b = 4;

a += b;
console.log(a); // 6
a -= b;
console.log(a); // 2
a *= b;
console.log(a); // 8
a /= b;
console.log(a); // 2

a = 1;
b = a++;
console.log(a, b); // 2 1
let c = 1;
let d = ++c;
console.log(c, d); // 2 2


a = 1; 
b = 2;
console.log(a < b); // true
console.log(a > b); // false
console.log(a <= b); // true
console.log(a >= b); // false

b = '1';
console.log(a == b); // true
console.log(a != b); // false
console.log(a === b); // false
console.log(a !== b); // true

a = true;
b = false;
console.log(a && b); // false
console.log(a || b); // true
console.log(a? 1:2); // 1
console.log(b?3:2); // 2

function sum(a, b) { 
    return a + b;
}

console.log(sum(10, 20)); // 30

const multiply = (a, b) => {
    return a * b;
};

console.log(multiply(10,20)); // 200