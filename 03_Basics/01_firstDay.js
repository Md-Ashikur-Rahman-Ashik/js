function sayMyName(){
    console.log("A");
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("K");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // console.log("Ashik");
    // return result
    return number1 + number2
    
}

const result = addTwoNumbers(3, 5)

// console.log("Result:", result);

function loginUserMessage(username = "Sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Ashik"))
console.log(loginUserMessage("Ashik"));