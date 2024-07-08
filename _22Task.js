"use strict";
// 22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
Object.defineProperty(exports, "__esModule", { value: true });
//          0      1    2          3          4
let arr = ["sami", 21, "student", 3120685543, "Hyderabad"];
console.log("let's produce an index error here.");
console.log(arr[5] + '\n');
console.log("let's correct the error here");
console.log(arr[4]);
