//Question 1

// const n = prompt("Enter the number:");
// if (n%5===0){
//     console.log(n,"is divisible by 5.")
// }
// else{
//     console.log(n,"is not divisible by 5.")
// }

//Question 2

const marks = prompt("Enter the marks:");
let grade;
if (marks>=100)
    console.log("Invalid marks!");
else if (marks>=90)
     grade = "A";
else if (marks>=80 && marks <90)
     grade = "B";
else if (marks>=70 && marks<80)
     grade = "C";
else if (marks>=60 && marks <70)
     grade = "D";

else
     grade = "F";

console.log("Grade:",grade);