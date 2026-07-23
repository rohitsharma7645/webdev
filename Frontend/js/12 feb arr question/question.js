// let arr = [1,2,3,4,5];
// let arr1 = [];

// for(let i=0;i<arr.length;i++){
//     arr1.unshift(arr[i])
// }
// console.log(arr1);


// const findEvenIdx = (array) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 0) {
//             return i+1;
//         }
//         else if(i==arr.length-1){
//             return "Not found";
//         }
//     }
    
// }
// let arr = [15, 9, 5, 16];
// console.log(findEvenIdx(arr));


const oddEven = (arr) =>{
    let odd = [];
    let even = [];
    for(let val of arr){
        if(val%2==0){
            even.push(val);
        }
        else{
            odd.push(val);
        }
    }
    console.log(odd);
    console.log(even);
}

let arr = [1,2,3,4,5,6];

oddEven(arr);

