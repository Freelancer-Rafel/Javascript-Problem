/// এখানে এ্যারের মধ্যে বেশি থাকলে তা বাদ দিয়ে বাকি এ্যারের নাম্বার গুলো দিবে

const name = [1, 2, 5, 5, 5, 8,4, 6, 3,5, 8, 4, 6, 8, 4, 2, 1, 2, 5];
let uniqueName = [];
for (let i = 0; i < name.length; i++) {
    const element = name[i];
    const index = uniqueName.indexOf(element);
    if (index == -1) {
        uniqueName.push(element);
    }
}

console.log(uniqueName);


