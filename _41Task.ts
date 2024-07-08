// 41. Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.

let magicianNames : string [] = ["John","rocky","zonar","tofio","gogoi"] 

function show_magicians(magicianNames: string[]){
    magicianNames.forEach(magicians=> {
        console.log(magicians);
        
    })
}
show_magicians(magicianNames)