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
const objectFour = {5: "a", 6: "b"}

// const objectThree = {objectOne, objectTwo}
// const objectThree = Object.assign({}, objectOne, objectTwo, objectFour)

const objectThree = {...objectOne, ...objectTwo, ...objectFour}

// console.log(objectThree);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "y@gmail.com"
    },
    {
        id: 3,
        email: "z@gmail.com"
    }
]

users[1].email

// console.log(ordheekUser);
// console.log(Object.keys(ordheekUser));
// console.log(Object.values(ordheekUser));
// console.log(Object.entries(ordheekUser));
// console.log(ordheekUser.hasOwnProperty("isLoggedIn"));

const course = {
    courseName: "Js in Hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
// console.log(instructor);

// {
//     "name": "Ashik",
//     "courseName": "Js in Hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]

