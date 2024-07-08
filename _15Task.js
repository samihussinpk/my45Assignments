"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let guestList = ["Noman", "arsalan", "jawaid", "ghufran"];
let cannotAttend = "Noman";
console.log(`${cannotAttend} can't make dinner.`);
let newGuest = "Junaid";
guestList[guestList.indexOf(cannotAttend)] = newGuest;
console.log(guestList);
guestList.map((items) => console.log(`Hello,${items} Yor are being invited for dinner`));
