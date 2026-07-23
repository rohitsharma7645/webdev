// let age = prompt("Enter your age:")
// age = Number(age)
// if(age<18){
//     console.log("Teenager")
// }
// else if(age<=20){
//     console.log("Early adult")
// }
// else if(age<=50){
//     console.log("Adult")
// }
// else{
//     console.log("Old")
// }

// let sum = 0;

// for(let i=1;i<=20;i+=2){
//     sum+=i;
// }
// console.log(sum)

//q1
// let salary = 20000;
// let n = 0;

// while(salary<40000){
//     n+=1;
//     salary+=2000;
// }
// console.log(n);


// q2
// let capacity = 500;
// let personWeight = 60;
// let elevatorWeight = 0;
// let n = 0;

// while(elevatorWeight+personWeight<=500){
//     n+=1;
//     elevatorWeight+=personWeight;
//     personWeight+=10;
    
// }
// console.log(`${n} person can enter the elevator`);


// q3
// let battery = 100;
// let x=0;
// let hr = 0;
// while(battery>0){
//     hr+=1;
//     if(hr%2===0){
//         battery-=5;
//         x+=5
//     }
//     else{
//         battery-=15;
//         x+=5
//     }
//     console.log(`baterry: ${battery}`);
// }
// console.log(`Battery will get 0 or below after ${hr}`);
// console.log(`Average battery consumed id ${x/hr}`);


//q4
// let totalSaving = 0;
// let todaySaving = 1;
// let day = 1;
// let n = prompt("Enter the no. of days for saving:")
// n = Number(n);

// for(day=1;day<=5;day++){
//     totalSaving += todaySaving;
//     todaySaving*=2;
// }
// console.log(`Total amount of saving: ${totalSaving}`)
// while(totalSaving<=1000){
//     totalSaving += todaySaving;
//     day++;
//     todaySaving*=2;
// }
// console.log(`${day} minimum day on which total savings exceed ₹1,000`);


//q5
// const price = 30;
// let collectionLimit = 300;
// let collection = 0;
// let passenger = 0;
// let payingPassenger = 0;
// let x = 1;
// while(collection<300){
//     if(x%5!==0){
//         collection+=price;
//         payingPassenger++;
//     }
//     passenger++;
//     x++;
// }
// console.log(`Total no. of passenger ${passenger}`);
// console.log(`Total no. of paid passenger ${payingPassenger}`);