// const coding = ["Js", "Ruby", "Java", "Python", "C++"]

// coding.forEach( function(item){
//     console.log(item);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "Js"
    },
    {
        languageName: "Java",
        languageFileName: "Java"
    },
    {
        languageName: "Python",
        languageFileName: "Py"
    }
]

myCoding.forEach( (item) => {
    // console.log(item.languageName);
} )

// const coding = ["Js", "Ruby", "Java", "Python", "C++"]

// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item
// } )

// console.log(values);

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (eachBook) => eachBook.genre === 'History')

  userBooks = books.filter( (eachBook) => {
    return eachBook.publish >= 1995 && eachBook.genre == "History"
  })

//   console.log(userBooks);

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (num) => {
//     return num + 10
// } )

const newNums = myNumbers
                    .map( (num) => num * 10 )
                    .map( (num) => num + 1 )
                    .filter( (num) => num >= 40 )

// console.log(newNums);

const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function(acu, currval){
    console.log(`acu:${acu} and currval:${currval}`);
    return acu + currval
}, 0)

console.log(myTotal);