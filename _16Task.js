"use strict";
// More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.
Object.defineProperty(exports, "__esModule", { value: true });
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
// bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
let guestList = ["Noman", "arsalan", "jawaid", "ghufran"];
let cannotAttend = "Noman";
let newGuest = "Junaid";
guestList[guestList.indexOf(cannotAttend)] = newGuest;
console.log(guestList);
//guestList.map((items)=>console.log(`Hello ${items} you are  being invited for dinner`))
console.log("Fortunately, we have a bigger table");
//to add at the beginnig
guestList.unshift("Fahad");
console.log(guestList);
//to add in the middle
let middleGuest = "sufiyan";
let middleIndex = guestList.length / 2;
guestList.splice(middleIndex, 0, middleGuest);
console.log(guestList);
//to add at the end
guestList.push("khizar");
console.log(guestList);
guestList.map((items) => console.log(`Hello ${items} you are being invited for dinner`));
