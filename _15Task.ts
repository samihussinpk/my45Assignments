let guestList: string[] = ["Noman","arsalan","jawaid","ghufran"];

let cannotAttend: string = "Noman";
console.log(`${cannotAttend} can't make dinner.`);

let newGuest:string ="Junaid";
guestList[guestList.indexOf(cannotAttend)]=newGuest;
console.log(guestList);

guestList.map((items)=>console.log(`Hello,${items} Yor are being invited for dinner`))
