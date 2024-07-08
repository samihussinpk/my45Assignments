"use strict";
// 44. Sandwiches: Write a function that accepts a array of items a person wants
// on a sandwich. The function should have one parameter that collects as many
// items as the function call provides, and it should print a summary of the sandwich
// that is being ordered. Call the function three times, using a different number
// of arguments each time.
Object.defineProperty(exports, "__esModule", { value: true });
function make_sandwitch(...items) {
    console.log(`Making a sandwich with: ${items.join(' ,')}.`);
}
make_sandwitch("ham", "cheese");
make_sandwitch("lettuce", "tomato", "ketchup");
make_sandwitch("avocado", "sprouts", "mustard", "mayo");
