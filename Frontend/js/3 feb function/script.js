// 1. Even or Odd
// Write a function isEven(num) that returns "Even" or "Odd".

// function checkEven(num){
//     return num%2?"odd": "even";
// }

// console.log(checkEven(4));

// 2. Maximum of Two Numbers
// Return the larger number without using Math.max().

// function maxNum(a,b){
//     if(a>b){
//         console.log(`${a} is bigger num`)
//     }
//     else if(a<b){
//         console.log(`${b} is bigger num`)
//     }
//     else
//         console.log("Equal")
// }
// maxNum(51,28);

// 3. Maximum of Three Numbers
// Find the largest using only if-else.

// function maxOfThree(a,b,c){
//     if(a>=b && a>c){
//         console.log(`${a} is biggest num`)
//     }
//     else if(b>=a && b>c){
//         console.log(`${b} is biggest num`)
//     }
//     else{
//         console.log(`${c} is the biggest num`)
//     }
// }
// maxOfThree(12,15,18);
// maxOfThree(12,25,18);
// maxOfThree(22,25,22);
// maxOfThree(15,15,15);

// 4. Sum from 1 to N
// Function sumN(n) that returns sum using loop.
// let sum=0;
// function sumN(n){
//     for(let i=0;i<=n;i++)
//         sum+=i;
//     return sum;
// }
// console.log(sumN(5))

// 5. Factorial
// Function factorial(n) using loop.

// let f = 1;
// function fact(n){
//     if(n==0 || n==1){
//         return 1;
//     }
//     else{
//         return n*fact(n-1);
//     }
// }
// console.log(fact(5));

// 6. Reverse a Number
// Input: 1234 → Output: 4321.
// let rem;
// let num=0;
// function reverse(n){
//     while(n!==0){
//         rem = n%10;
//         n = Math.floor(n/10);
//         num = 10*num+rem;
//     }
//     return num;
// }
// console.log(reverse(125));


// 7. Palindrome Number
// Check if number reads same forward/backward.

// let rem;
// let num=0;
// function palindrome(n){
//     const x = n;
//     while(n!==0){
//         rem = n%10;
//         n = Math.floor(n/10);
//         num = 10*num+rem;
        
//     }
//     return num===x?"palindrome":"not palindrome";
// }
// console.log(palindrome(122))


// 8. Prime Number Check
// Return true or false.

// let q =0;
// function isPrime(n){
//     for(let i=2;i*i<=n;i++){
//         if(n%i==0){
//             q++;
//             break;
//         }
//     }
//     if(q==0){
//         console.log("prime");
//     }
//     else
//         console.log("Not prime")
// }

// isPrime(11)

// 9. Count Digits
// Count how many digits in a number.

// let c = 0;
// function count(n){
//     if(n<0){n*= -1}
//     if(n==0){c=1}
//     while(n!==0){
//         n=Math.floor(n/10)
//         c++;
//     }
//     return c;
// }
// console.log(count(-18752))


// 10. FizzBuzz
// From 1 to 50:
// multiple of 3 → Fizz
// multiple of 5 → Buzz
// both → FizzBuzz

// function fizzBuzz(n){
//     if(n%3==0 && n%5==0){
//         return `${n}: FizzBuzz`;
//     }
//     else if(n%3==0){
//         return `${n}: Fizz`;
//     }
//     else if(n%5==0){
//         return `${n}: Buzz`;
//     }
// }
// for(let i=1;i<=50;i++){
//     console.log(fizzBuzz(i));
// }

// 11. Count Vowels
// Function that counts vowels in a string.

// let c=0;
// function countVowels(str){
//     for(let char of str){
//         if(char=='a' || char=='e' || char=='i' || char=='o' || char =='u' ||
//             char=='A' || char=='E' || char=='I' || char=='O' || char =='U'
//         ){
//             c++;
//         }
//     }
//     console.log(c)
// }
// countVowels("Rohit Sharma")


// 12. Reverse a String
// "hello" → "olleh".


// let newStr = "";
// function reverseStr(str){
    
//     for(let i = str.length-1;i>=0;i--){
//         // console.log(str[i])
//         newStr += str[i];
//         console.log(newStr)
//     }
//     // console.log(newStr);
// }
// reverseStr("Hello");


// 13. Capitalize First Letter
// “apple” → "Apple".

// function capitalize(str){
//     let  newStr = str[0].toUpperCase() + str.slice(1)
//     return newStr;
// }
// console.log(capitalize("apple"))


// 14. Character Frequency
// Count how many times each letter appears.
// Example: "aab" → {a:2, b:1}
// let count = {};
// function frequency(str){
//     newStr = str.toLowerCase();
//     for(let char of newStr){
//         count[char] = (count[char] || 0) + 1;            // here when (count[char] || 0) get true it returns count[char] and add with 1;
//     }
//     return count;
// }
// console.log(frequency("Rohit Sharma"));


// 15. Find Longest Word
// From a sentence return longest word.

// let longWord =  "";
// let currStr = "";
// function longestWord(str){
//     for(let char of str){
//         if(char !== " "){
//             currStr += char;
//         }
//         else{
//             if(currStr.length>longWord.length){
//                 longWord = currStr;
//                 currStr="";
//             }
//         }
//     }
//     if(currStr.length>longWord.str){
//                 longWord = currStr;
//             }
//     console.log(longWord);
// }
// longestWord("I am going to players")


// 16. Sum of Digits
// Write a function that returns the sum of digits of a number.
// Example:
// Input: 1234
// Output: 10
// let rem;
// let sum = 0;
// function sumOfDigit(num){
//     while(num!=0){
//         rem = num%10;
//         num = Math.floor(num/10);
//         sum+=rem;
//     }
//     return sum;
// }
// Using Recursion
// function sumOfDigit(num){
//     if(num==0){
//         return 0;
//     }
//     else{
//         return sumOfDigit(Math.floor(num/10))+(num%10)
//     }
// }
// console.log(sumOfDigit(485));

// 17. Product of Digits
// Multiply all digits of a number.
// Example:
// Input: 123
// Output: 6

// let rem;
// let product = 1;
// function productOfDigit(num){
//     while(num!=0){
//         rem = num%10;
//         num = Math.floor(num/10);
//         product*=rem;
//     }
//     return product;
// }
// console.log(productOfDigit(485));


// 18. Check Armstrong Number
// A number is Armstrong if:

// 153 = 1³ + 5³ + 3³
// Return true/false.

// let rem;
// let arm = 0;
// function armstrong(num){
//     const n = num;
//     while(num!=0){
//         rem = num%10;
//         num = Math.floor(num/10);
//         arm+=rem**3
//     }
//     return arm==n?"True":"False";
// }
// console.log(armstrong(153));


// 19. Count Even and Odd Digits
// Return how many even and odd digits exist.
// Example:
// 12345 → even: 2, odd: 3

// let rem;
// let n = 0;
// function countEvenOddDigits(num){
//     while(num!=0){
//         rem = num%10;
//         num = Math.floor(num/10);
//         n++
//     }
//     return n%2?`Odd: ${n}`:`Even: ${n}`;
// }
// console.log(countEvenOddDigits(482455));


// 20. Print Pattern (Loop control)
// Print:
// *
// **
// ***
// ****
// *****

// for(let i=1;i<=5;i++){
//     console.log("*".repeat(i));
// }


// 21. Find GCD (HCF)
// Create function to find greatest common divisor of two numbers using loops.
// Example:
// gcd(12, 18) → 6

// function hcf(a,b){
//     let num=0;
//     if(a>b){
//         for(let i=1;i<=b;i++){
//             if(a%i==0 && b%i==0){
//                 num=i;
//             }
//         }
//     }
//     else{
//         for(let i=1;i<=a;i++){
//             if(a%i==0 && b%i==0){
//                 num=i;
//             }
//         }
//     }
//     return num;
// }
// console.log(hcf(7,13))


// 22. Count Occurrences of a Digit
// Count how many times a digit appears.
// Example:
// num = 1223342, digit = 2
// Output → 3

// function countOccur(num, n){
//     let count=0;
//     while(num!=0){
//         rem = num%10;
//         num = Math.floor(num/10);
//         if(rem==n){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countOccur(121255,5))


// 23. Temperature Converter
// Function:
// "C" → Fahrenheit
// "F" → Celsius
// Use conditions to decide the formula.

// function tempConver(temp,unit){
//     if(unit=="C"){
//         return temp*9/5+32;
//     }
//     else{
//         return (temp-32)*5/9
//     }
// }
// console.log(tempConver(32,"C"))


// .24 Simple Login Attempts
// Function that allows only 3 attempts.
// If the wrong password is wrong 3 times → "Account Locked".

// let n=0;
// let pass =null;
// function attempt(password){
//     while(pass!==password){
//         if(n<3){
//             pass = prompt("Enter password:")
//             n++;
//         }
//         else {
//             if(pass==password)
//                 return;
//             console.log("Account locked")
//             return
//         }
//     }
//     console.log("Welcome");
// }
// attempt("Rohit");


// 25. Number Guessing Game (Console version)
// Generate random number 1–20.
// Keep asking user until they are correct.
// Print:
// Too high
// Too low
// Correct


// function game(){
//     let num = Math.floor(Math.random() * 20);
//     let n = prompt("Enter the num betwenn 1-20:");
//     while(num!=n){
//         if(n>num){
//             n=prompt("Too high, try small:");
//         }
//         else{
//             n=prompt("Too low, try big:")
//         }
//     }
//     console.log("correct");
// }
// game();