// JS의 3가지 함수 생성 방법

// 익명함수 : 이름을 붙이지 않은 형태로 사용하고, 함수를 변수로 받아 실행
let fun = function () {  // 변수의 이름으로 function 구현
    console.log('함수의 첫 번째 줄');
    console.log('함수의 두 번째 줄');
};

fun(); // 변수명으로 함수 구현
console.log(fun); // 변수 자체를 출력

// 선언적 함수
function func(){
    console.log('함수의 첫 번째 줄');
    console.log('함수의 두 번째 줄'); 
}

func(); // 함수 구현
console.log(func); // 함수 자체(내용) 출력

// 화살표 함수
let fun1 = () => {
    console.log('함수의 첫 번째 줄');
    console.log('함수의 두 번째 줄'); 
};

fun1();// 함수 구현
console.log(fun1); // 함수 자체(내용) 출력