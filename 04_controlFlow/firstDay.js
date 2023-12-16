// const isUserLoggedIn = true
// const temperature = 41

// if ( temperature === 41){
//     console.log("Less than 50");
// }

// else {
//     console.log("Temperature is greater than 50")
// }

// const score = 200

// if ( score > 100 ){
//     let power = "Fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);

// const balance = 1000

// // if ( balance > 500 ) console.log("Test"),
// // console.log("secondTest");

// if ( balance < 500 ){
//     console.log("Less than 500");
// } else if ( balance < 750 ){
//     console.log("Less than 750");
// } else if ( balance < 900 ){
//     console.log("Less than 900");
// } else {
//     console.log("Less than 1200")
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if ( userLoggedIn && debitCard && 2 == 3 ){
    console.log("Allowed to buy course");
}

// if (loggedInFromGoogle || loggedInFromEmail){
//     console.log("User Logged In");
// }

// const month = "Mar"

// switch (month) {
//     case "Jan":
//         console.log("January");
//         break;
//     case "Feb":
//         console.log("February");
//         break;
//     case "Mar":
//         console.log("March");
//         break;
//     case "Apr":
//         console.log("April");
//         break;

//     default:
//         console.log("Default case match");
//         break;
// }

// const userEmail = []

// if (userEmail){
//     console.log("Got User Email");
// } else {
//     console.log("Don't have user email");
// }

// if (userEmail.length == 0){
//     console.log("Array is empty");
// }

const emptyObject = {}

// if ((Object.keys(emptyObject)).length == 0){
//     console.log("Empty Object");
// }

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15

// console.log(val1);

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("More than 80"): console.log("Less than 80");