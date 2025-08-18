let myName = "ankur"; // premitive data type
// stores in stack make evertime a copy of that varibale

let mySecondName = myName;
mySecondName = "Lakhan";
// console.log(myName);
// console.log(mySecondName);

let userOne = {
    email:"ankurporwal@gmai.com",
    age: 23,
    name: "ankur"
} // it is a non-premitive data type value stores in heap memory also it only share reference to others and changing from any refernce variable the original value will be changed 

let userTwo = userOne;

userTwo.name = "Lakhan";

console.log(userOne);
console.log(userTwo);

