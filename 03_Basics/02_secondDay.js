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

const myArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myArray));
console.log(returnSecondValue([200, 400, 500, 1000]))