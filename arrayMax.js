// এখানে এ্যারের মধ্যে সব চেয়ে বড়/ছোট সংখ্যাটি বের কবে দিবে এটা

const marks = [12, 55, 88, 77, 66, 11, 22, 55, 54, 66, 88, 44, 10, 18];
let max = marks[0];
for (let i = 0; i < marks.length; i++) {
    const element = marks[i];
    if (element > max) {
        max = element;
    }
}
console.log("Hight marks is a:", max);