function numOfVowel(str){
    let count=0;
    let newStr = str.toLowerCase();
    for(let char of newStr){
        if(char=='a'|| char=='e'|| char=='i'|| char=='o'|| char=='u'){
            count++;
        }
    }
    
    return count;
}
console.log(numOfVowel("Rohit"));

