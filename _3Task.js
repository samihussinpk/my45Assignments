"use strict";
// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
Object.defineProperty(exports, "__esModule", { value: true });
let personName = "saMi huSsain";
console.log(personName.toLocaleLowerCase);
console.log(personName.toUpperCase);
console.log(personName.split(" ").map(item => item.charAt(0) + item.slice(1).toLowerCase()).join(" "));
