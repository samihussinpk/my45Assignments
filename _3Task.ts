// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName: string = "saMi huSsain"

console.log(personName.toLocaleLowerCase);

console.log(personName.toUpperCase);

console.log(personName.split(" ").map(item => item.charAt(0)+ item.slice(1).toLowerCase()).join(" "));


