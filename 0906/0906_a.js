// 익명 함수가 선언적 함수를 덮어씀

// func = function() {console.log('첫 번째 함수');};
// function func() {console.log('두 번째 함수');}

// func(); // 첫 번째 함수

// ---------------------------------------------------------------

// 같은 방식으로 생성한 함수는 마지막 생성이 이전의 생성을 덮어씀

// func = function() {console.log('첫 번째 함수');};
// func = function(){console.log('두 번째 함수');}

// func(); // 두 번째 함수


function func() {console.log('첫 번째 함수');};
function func() {console.log('두 번째 함수');}

func(); // 두 번째 함수