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

// console.log(otherArray);
// console.log("B ", myArray);

const anotherArray = myArray.splice(1, 3)
// console.log(anotherArray);

const marvelHeros = ["Thor", "IronMan", "SpiderMan"]
const dcHeros = ["Superman", "Flash", "Batman"]

// marvelHeros.push(dcHeros)

// console.log(marvelHeros);



// const allHeros = marvelHeros.concat(dcHeros)

// console.log(allHeros);

const allNewHeros = [...marvelHeros, ...dcHeros]

// console.log(allNewHeros);

const anotherNewArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const realArray = anotherNewArray.flat(Infinity)

// console.log(realArray);

// console.log(Array.isArray("Ashik"));

// console.log(Array.from("Ashik"));

// console.log(Array.from({name: "Ashik"}))

let scoreOne = 100
let scoreTwo = 200
let scoreThree = 300

// console.log(Array.of(scoreOne, scoreTwo, scoreThree));

const mySymbol = Symbol("keyOne")

const jsUser = {
    name: "Ashik",
    "full name": "Ashikur Rahman",
    age: 18,
    [mySymbol]: "mykeyOne",
    location: "Cumilla",
    email: "md.ashikur.upwork@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser["email"]);
// console.log(jsUser[mySymbol]);

// myAnotherArray = ["H", "i"]

jsUser.email = "ashik@chatgpt.com"

// Object.freeze(jsUser)

jsUser.email = "ashik.microsoft.com"

// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello Js User");
}

jsUser.greetingTwo = function(){
    console.log(`Helo Js User, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
