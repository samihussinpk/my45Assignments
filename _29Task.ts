// 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
// such as You really like bananas!

let favourite_fruits: string [] = ["Mango","Banana","Guava"]

if(favourite_fruits.includes("Mango")){
    console.log("I really like mangoes");    
}

if(favourite_fruits.includes("Apple")){
    console.log("I really like apples");    
}

if (favourite_fruits.includes("Banana")){
    console.log("I really like bananas");    
}

if (favourite_fruits.includes("Guava")){
    console.log("I really like guavas");    
}

if(favourite_fruits.includes("Strawberry")){
    console.log("I really like strawberries");
}
    