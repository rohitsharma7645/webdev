// Q1. Salary Increment Variation

// let salary = 15000;
// let year = 0;

// while(salary<45000){
//     year++;
//     salary+=3000;
//     console.log(year);   
// }
// console.log(`salary will become ₹45,000 or more after ${year}`);
// console.log(`Salary at the will be ${salary}`);

// Q2. Water Tank Filling


// let capacity = 1000;
// let currentVol = 0;
// let toAdd = 40;
// let time = 0;

// while(currentVol+toAdd<=1000){
//     time++;
//     currentVol+=toAdd;
//     toAdd+=20;
// }
// console.log(time);
// console.log(currentVol)



// let battery = 100;
// let hr = 1;
// while(battery>0){
//     if(hr%2==0){
//         hr++;
//         battery-=12;

//     }
//     else{
//         hr++;
//         battery-=8;

//     }
//     console.log(battery)
// }
// console.log(hr)


// Q4. Step Count Challenge


// let steps = 1000;
// let day = 1;
// let n = 10;

// for(let i=1;i<n;i++){ 
//     steps+=500;
//     day++;
// }
// console.log(steps)

// while(steps+500<=20000){
//     steps+=500;
//     day++;
// }
// console.log(`Exceed after ${day+1}`)

// let amount = 5000
// let month = 0;
// function interest() {
//     if (amount < 10000) {
//         amount += amount * 3 / 100;
//     }
//     else if (amount < 20000) {
//         amount += amount * 5 / 100;
//     }
//     else {
//         amount += amount * 7 / 100
//     }
// }
// while (amount + 1000 <= 30000) {
//     month++;
//     amount += 1000;
//     if (month % 6 == 0) {
//         interest();
//         amount -= 2000;
//     }
//     else{
//         interest();
//     }
// }
// console.log(month);
// console.log(amount);

let vol = 0;
let volAdd = 50
let min = 0;

while(vol+volAdd<=1500){
    min++;
    vol+=volAdd;
    volAdd+=15;
    if(min%5==0){
        vol-=100;
    }
    console.log(vol)
}
console.log(min+1)