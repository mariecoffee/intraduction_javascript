var myString = "Bienvenue Clément";
var position = myString.indexOf("Clément");
console.log (position);

/* je vais remplacer dans la string "salut Clément" le mot Clément 
par le mot Flavie. */

var myNewString = myString.replace("Clément","Flavie");
console.log(myNewString);

var string1 = "salut";
var string2 = "Clément";
var string3 = string1+" "+string2;
console.log(string3);