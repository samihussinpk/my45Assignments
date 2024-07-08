// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
// a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
// of your program.





let guestList: string[]=["Noman","arsalan","jawaid","ghufran"]

let cannotAttend: string ="Noman"

let newGuest: string ="Junaid"
guestList[guestList.indexOf(cannotAttend)]=newGuest
console.log(guestList);

//guestList.map((items)=>console.log(`Hello ${items} you are  being invited for dinner`))

console.log("Fortunately, we have a bigger table");
//to add at the beginnig
guestList.unshift("Fahad")
console.log(guestList);


//to add in the middle
let middleGuest: string ="sufiyan"
let middleIndex = guestList.length/2
guestList.splice(middleIndex,0,middleGuest)
console.log(guestList);


//to add at the end
guestList.push("khizar")

console.log(guestList);

guestList.map((items)=>console.log(`Hello ${items} you are being invited for dinner`));

console.log("Sorry for this inconvinience but due to lack of space, i can just invite only two people for dinner ");

//is ki jaga hum while loop bhi istamal kr skty hn

// // last element is being removed(Khizar)
// let remove1 =guestList.pop()
// console.log(`${remove1}, I am sorry i cannot invite you for dinner due to lack of space`);

// //second last element is being removed(ghufran)
// let remove2 = guestList.pop()
// console.log(`${remove2}, I am sorry.I cannot invite you for dinner due to lack of space`);

// //third last element is being removed(jawaid)
// let remove3 = guestList.pop()
// console.log(`${remove3}, I am sorry.I cannot invite you for dinner due to lack of space`);

// //fourth last element is being removed(Arsalan)
// let remove4 = guestList.pop()
// console.log(`${remove4}, I am sorry.I cannot invite you for dinner due to lack of space`);

// //sixth last element is being removed(sufiyan)
// let remove5 = guestList.pop()
// console.log(`${remove5}, I am sorry.I cannot invite you for dinner due to lack of space`);
// is pory ki jaga


// while loop
while(guestList.length>2){
    let removeGuests = guestList.pop()
    console.log(`\n${removeGuests}, I am sorry. I can't invite you for dinnner due to lack of space `);
}

guestList.map((item)=> console.log(`\n ${item}, you are still invited to dinner`))

guestList.pop()
guestList.pop()

console.log(guestList);

