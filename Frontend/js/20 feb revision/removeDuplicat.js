function removeDuplicate(str) {
    str+=" ";
    let newStr = "";
    let isMatch = true;
    for (let i = 0; i < str.length; i++) {
        isMatch=true;
        for (let j = i-1; j >= 0; j--) {
            if (i == j) {
                continue;
            }
            else if (str[i] == str[j]) {
                isMatch = false;
                break;
            }
        }
        if (isMatch) {
            newStr += str[i];
            
        }

    }

    return newStr;
}
console.log(removeDuplicate("asdpple"))