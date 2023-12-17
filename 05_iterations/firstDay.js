for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best number");
    }
    // console.log(element);
    
}

// console.log(element);

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer Loop: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner Loop: ${j} and Outer Loop: ${i}`);
        // console.log(i + "*" + j + " = " + i*j)
    }
    
}

// let myArray = ["Flash", "Batman", "Superman"]
// console.log(myArray.length);

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
    // console.log(element);
// }

// for (let i = 0; i <= 20; i++) {
//     if (i == 5) {
//         console.log("Detected 5");
//         break
//     }
//     console.log(`Value of i is: ${i}`);
    
// }
// for (let i = 0; i <= 20; i++) {
//     if (i == 5) {
//         console.log("Detected 5");
//         continue
//     }
//     console.log(`Value of i is: ${i}`);
    
// }

let index = 0

// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index = index + 2
// }

// let myArray = ["Flash", "Batman", "Superman"]
// let i = 0

// while (i < myArray.length) {
//     console.log(`Value is ${myArray[i]}`);
//     i = i + 1
// }

// let score = 11

// do {
//     console.log(`Score is ${score}`);
//     score++
// } while (score <= 10);

// const myArray = [1, 2, 3, 4, 5]

// for (const num of myArray) {
//     console.log(num);    
// }

// const greetings = "Hello World!"

// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);    
// }

const map = new Map()
map.set("BD", "Bangladesh")
map.set("USA", "United States Of America")
map.set("PS", "Palestine")
map.set("PS", "Palestine")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ":-", value);
}

// const myObject = {
//     gameOne: "NFS",
//     gameTwo: "Spiderman"
// }

// for (const [key, value] of myObject) {
//     console.log(key, ":-", value);
// }

const myObject = {
    js: "Javascript",
    cpp: "C++",
    rb: "Ruby",
    swift: "Swift By Apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    
}