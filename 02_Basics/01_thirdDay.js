const myArray = [0, 1, 2, 3, 4, 5]

const myHeros = ["Hz. Mohammad(s)", "The Sahabi"]

const mySecondArray = new Array(1, 2, 3, 4)

// console.log(mySecondArray[0])

// console.log(myArray[1]);

// myArray.push(6)
// myArray.push(7)

// myArray.pop()

// myArray.unshift(9)
myArray.shift()

// console.log(myArray.includes(9));
// console.log(myArray.indexOf(9));


const newArray = myArray.join()

// console.log(newArray);
// console.log(myArray);

// console.log("A ", myArray);

const otherArray = myArray.slice(1, 3)

console.log(otherArray);
console.log("B ", myArray);

const anotherArray = myArray.splice(1, 3)
console.log(anotherArray);