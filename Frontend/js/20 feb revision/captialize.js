function capitalizeFistLetter(str){
    let newStr = str[0].toUpperCase() + str.slice(1,)
    return newStr;
}
console.log(capitalizeFistLetter("hello"))