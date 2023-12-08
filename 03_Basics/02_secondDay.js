function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    userName: "Ashik",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.userName}, price is ${anyObject.price}`)
}

// handleObject(user)

// handleObject({
//     userName: "Sam",
//     price: 399
// })

// const myArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myArray));
// console.log(returnSecondValue([200, 400, 500, 1000]))

// var c = 300

let a = 300

if(true){
    let a = 10
    const b = 20
    // console.log("Inner:", a);
}


// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const userName = "Ashik"

    function two(){
        const website = "Youtube"
        console.log(userName);
    }
    // console.log(website);

    two()
}

// one()

if(true){
    const userName = "Ashik"
    if(userName === "Ashik"){
        const website = " Youtube"
        // console.log(userName + website);
    }
    // console.log(website);
}

// console.log(userName);

// console.log(addOne(5));

function addOne(num){
    return num + 1
}

// addTwo(5)

// const addTwo = function(num){
//     return num + 2
// }

const firstUser = {
    userName: "Ashik",
    price: 999,
    welcomeMessage: function(){
        // console.log(`${this.userName}, Welcome to website`);
        // console.log(this);
    }
}

// firstUser.welcomeMessage()

// firstUser.userName = "Sam"

// firstUser.welcomeMessage()

// console.log(this);

// function chai(){
//     let userName = "Ashik"
//     console.log(this.userName);
// }

// chai()

// const chai = function(){
//     let userName = "Ashik"
//     console.log(this.userName);
// }

const chai = () => {
    let userName = "Ashik"
    console.log(this);
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({userName: "Ashik"})

console.log(addTwo(3, 4))

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach(() => {})