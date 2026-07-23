//q1

// let arr = [85,97,44,37,76,60];
// let sum = 0;
// let n = arr.length;

// for (let el of arr){
//     sum += el;
// }
// console.log("Average = ",sum/n);

//q2

// let arr = [250,645,300,900,50];

// for(let i=0;i<arr.length;i++){
//     arr[i] -= arr[i]/10;
// }
// for(let el of arr){
//     console.log(`Price after discount = ${el}`);
// }


// Array methods   Notes:- some methods changes in original array 

// let arr = [85,94,92,45,28];
// let arr2 = [250,41,54,741];
// let arr3 = [241,510,68,32,54]
// arr.push(74);  //add the el at the end of arr
// arr.pop()   //delete the el from the end
// console.log(arr.toString());  //convert the arr into string
// // let newArr = arr.concat(arr2, arr3);   add two or more arrays
// // console.log(newArr);

// arr2.unshift(11);   //add el at first index
// console.log(arr2);
// arr3.shift();       //remove el from the first idx
// console.log(arr3);

// console.log(arr.slice(1,4));    //doesn't change original arr

// // splice method:- this method can remove, replace and insert multiple el at any index, it changes original arr

// let array = [245,842,414,764,354,952,142.806]

// // let newArr = array.splice(2,1,245);     // arr.splice(startidx, no. of el to remove, inserted elelments)
// array.splice(1,0,12,13,14);    // here only inserted the el(12,13,14) from idx 1 and didn't deleted any el
// array.splice(1,2);      // here we deleted 2 el from idx 1
// console.log(array);


// q3

let companies = ["Bloomerg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

companies.shift();
companies.splice(1,1,"Ola");
companies.push("Amazon");
console.log(companies.toSorted());
console.log(companies.toString());