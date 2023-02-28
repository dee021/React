// var는 재선언이 가능하지만 let과 const는 재선언이 불가능
// var와 let은 값 변경(재할당)이 가능하지만 const는 값 변경이 불가능

// var a = 'test';
// var a = 'test2';
// console.log(a); // test2
// a = 'test3';
// console.log(a); // test3

let a = 'test'; 
a = 'test2';
console.log(a); // test2
a = 'test3';
console.log(a); // test3

// let a = 'test'; 
// let a = 'test2'; // error
// console.log(a); 

// const a = 'test';
// const a = 'test2'; // err
// a = 'test3'; // err
// console.log(a);