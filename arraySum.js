/// এখানে এ্যারের মধ্যে সব সংখ্যার যোগফল দেখাবে

function getArraySum(number) {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        const element = number[i];
        sum = sum + element;
    }
    return sum;
}

const number = [12, 55, 88, 99, 55, 44, 22, 11, 44, 11, 66, 20, 22, 01, 33, 858, 77, 99];
const result = getArraySum(number);
console.log(result);