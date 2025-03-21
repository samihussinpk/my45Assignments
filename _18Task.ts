// 18. Seeing the World: Think of at least five places in the world you’d like to visit.

// • Store the locations in a array. Make sure the array is not in alphabetical order.(aphabetical order ka mtlb hai k pehly a wala name ay phr b wla phr c wala)

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its
// order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.




// Store the locations in a array. Make sure the array is not in alphabetical order.
let favouritePlacesLocations: string[] =["Brazil","Australia","China","Egypt","Denmark"];

// Print your array in its original order.
console.log(favouritePlacesLocations);

//copy of an array to use later
let copiedArray = [...favouritePlacesLocations];

// Print your array in alphabetical order without modifying the actual list.
console.log(favouritePlacesLocations.sort());

// Show that your array is still in its original order by printing it.
console.log(copiedArray);

// Print your array in reverse alphabetical order without changing the order of the original list.
console.log(favouritePlacesLocations.sort().reverse());

// Show that your array is still in its original order by printing it.
console.log(copiedArray);

// Reverse the order of your list. Print the array to show that its
// // order has changed.
console.log(favouritePlacesLocations.reverse());

// Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log(favouritePlacesLocations.reverse());

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
let sortedArray = ["Brazil","Australia","China","Egypt","Denmark"];
console.log(sortedArray.sort());

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log(sortedArray.reverse());
