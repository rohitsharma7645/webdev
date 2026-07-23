// Strings method     NOTE:- Any method does not change the original string, it makes a new copy of that string
//  let str = "Rahul Kumar";
//  console.log(str.toUpperCase());    //convert all letters into capital letters
//  console.log(str.toLowerCase());    //convert all letters into small letters
 
//  let str2 = "  I am   a  good boy     ";
//  console.log(str2.trim());  //removes the spae from stsrting and ending

//  console.log(str.slice(3,8));  //returns a part of the string
 
//  console.log(str.concat(str2)); // add 1st string with another
//  console.log(str+str2); // another method of concating

//  console.log(str.replace("a","o"));     //replace first found char with another
//  console.log(str.replaceAll("a","o"));  // replace all particular character
 
//  console.log(str.charAt(6));    //Returns the character at particular index

//  console.log(str.length);


let name = prompt("Enter your name:");
let Name = name.replaceAll(" ","_");
let userName = "@" + Name.toLowerCase() + name.length;
console.log(userName);
