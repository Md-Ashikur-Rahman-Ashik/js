// const ordheekUser = new Object()
const ordheekUser = {}

ordheekUser.id = "123abc"
ordheekUser.name = "Sammy"
ordheekUser.isLoggedIn = false

// console.log(ordheekUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Ashikur",
            lastName: "Rahman"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);

const objectOne = {1: "a", 2: "b"}
const objectTwo = {3: "a", 4: "b"}

const objectThree = {objectOne, objectTwo}

console.log(objectThree);