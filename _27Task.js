"use strict";
// 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
Object.defineProperty(exports, "__esModule", { value: true });
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
//1st version
let alien_color = "green";
if (alien_color === "green") {
    console.log("Congratulations! you have earned 5 coins");
}
else if (alien_color === "red") {
    console.log("Congratulations! you have earned 10 points ");
}
else {
    console.log("Congratulations! you have earned 15 points");
}
//2nd version
alien_color = "red";
if (alien_color === "green") {
    console.log("Congratulations! you have earned 5 coins");
}
else if (alien_color === "red") {
    console.log("Congratulations! you have earned 10 points ");
}
else {
    console.log("Congratulations! you have earned 15 points");
}
//3rd version
alien_color = "yellow";
if (alien_color === "green") {
    console.log("Congratulations! you have earned 5 points");
}
else if (alien_color === "red") {
    console.log("Congratulations! you have earned 10 points ");
}
else {
    console.log("Congratulations! you have earned 15 points");
}
