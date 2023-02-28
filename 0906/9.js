let array = [52,273,32,64,72];

console.log('---forEach() 메소드 ---');
array.forEach((item, index) => { // 모든 요소에 주어진 명령을 실행하여 리턴
    console.log(`- ${index}번째 요소는 ${item}입니다.`);
});
/* 
---forEach() 메소드 ---
- 0번째 요소는 52입니다.
- 1번째 요소는 273입니다.
- 2번째 요소는 32입니다.
- 3번째 요소는 64입니다.
- 4번째 요소는 72입니다.
*/

console.log();
console.log('--- map() 메소드 ---');
let outputA = array.map((item, index) => { // 모든 요소에 주어진 명령을 실행하여 리턴
    return item * item;
});
console.log(outputA);
/* 
--- map() 메소드 ---
[ 2704, 74529, 1024, 4096, 5184 ]
*/


console.log();
console.log('--- filter() 메소드 ---');
let outputB = array.filter((item, index) => { // 조건을 만족하는 요소를 리턴
    return item % 2 == 0;
});
console.log(outputB);
/* 
--- filter() 메소드 ---
[ 52, 32, 64, 72 ]
*/