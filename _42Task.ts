// 42. Great Magicians: Start with a copy of your program from Exercise 41.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.


let magicianNames : string [] = ["John","rocky","zonar","tofio","gogoi"]
function make_great(magicianNames: string[]){
    for(let i=0; i < magicianNames.length; i++){
        console.log(magicianNames[i] + " the great");    
    }
}
  
make_great(magicianNames)