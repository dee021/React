// 익명함수는 최상위 객체 혹은 외부 객체를 가져다가 표현하는 자기 자신
(function () {
    console.log(this);
})(); // global 형태로 function 내부가 가리키는 function은 global function.


/* 
<ref *1> Object [global] {
  global: [Circular *1],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  performance: Performance {
    nodeTiming: PerformanceNodeTiming {
      name: 'node',
      entryType: 'node',
      startTime: 0,
      duration: 75.04570000059903,
      nodeStart: 0.33080000057816505,
      v8Start: 3.67090000025928,
      bootstrapComplete: 59.9297000002116,
      environment: 27.73950000014156,
      loopStart: -1,
      loopExit: -1,
      idleTime: 0
    },
    timeOrigin: 1664655015238.752
  },
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  }
}
*/