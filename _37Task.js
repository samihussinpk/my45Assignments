"use strict";
// 37. Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different
// message.
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt(size = "large", message = "I love typeScript") {
    console.log(`Kindly make a ${size} T-shirt with the message ${message} printed on it.`);
}
make_shirt(); //default large and message
make_shirt("medium"); // default message, medium size
make_shirt("small", "Dive into coding"); //Custom message, small size
