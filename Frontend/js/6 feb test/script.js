// 1.
// const countDivisor = (n) =>{
// 	if(n==0){
// 		return 0;
// 	}
// 	let c = 0;
// 	for(let i=1;i<=n;i++){
// 		if(n%i===0){
// 			c++;
// 		}
// 	}
// 	return c;
// }
// console.log(countDivisor(12));


function fibonacci(n){
	if(n<=1){
		return n;
	}
	else{
		return fibonacci(n-1)+fibonacci(n-2);
	}
}	
console.log(fibonacci());


// 5.
// let rem = 0;
// let sum = 0;

// function isSumPrime(num){
//     const n = num;
//     while(num!=0){
// 	rem=num%10;
// 	num=Math.floor(num/10);
// 	sum+=rem;
//     }
//     console.log(sum)
//     for(let i=2;i<=n/2;i++){
// 	if(sum%i==0)
// 		return "Sum of digit is not prime";
// 	else
// 		return "Sum of digit is prime";
//     }

// }
// console.log(isSumPrime(812))


// let num = prompt("Enter the num");
// let oddSum = 0;
// let evenSum = 0;
// function difference(num) {
//     console.log(num.length)
//     for (let i = 0; i < num.length; i++) {
//         let digit = Number(num[i]);
//         // console.log(typeof (num[i]))
//         if (i % 2 == 0) {
//             evenSum += digit;
//         }
//         else {
//             oddSum += digit;
//         }
//     }
//     console.log(num);
//     console.log(evenSum)
//     console.log(oddSum)
//     console.log(evenSum - oddSum)
// }
// difference("1254")


