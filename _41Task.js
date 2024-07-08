"use strict";
// 41. Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.
Object.defineProperty(exports, "__esModule", { value: true });
let magicianNames = ["John", "rocky", "zonar", "tofio", "gogoi"];
function show_magicians(magicianNames) {
    magicianNames.forEach(magicians => {
        console.log(magicians);
    });
}
show_magicians(magicianNames);
