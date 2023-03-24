function reverseString(str) {
    let reverse = "";
    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        reverse = element + reverse;
    }
    return reverse;
}

const statement = "Hello Aline bhai brother.";
const result = reverseString(statement);
console.log(result);