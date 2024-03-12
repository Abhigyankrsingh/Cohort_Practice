// let FirsName = "Abhigyan";

// let age = 20;

// let isMarried = false;

// console.log("This person name is " + FirsName + " and his age is " + age);

// if(isMarried == true){
//     console.log("This person is married");
// } else {
//     console.log("This person is not married");
// }


// let answer = 0;

// for(let i =0; i<5;i++){
    
//     answer = answer + i;
// }

// console.log(answer);

// const age = [23,12,44,22,27,39];



// for(let i =0; i<age.length;i++){

//     if(age[i] % 2 == 0){
//         console.log(age[i]);
//     } 
// }

// const PersonName = ["Hari", "Abhi", "Priya"];
// const GenderName = ["Male", "Male", "Female"];


// for(let i =0; i< GenderName.length; i++){
//      if(GenderName[i] == "Male"){
//         console.log(PersonName[i]);
//      }
// }

// const user1 = {
//     FirstName: "Abhi",
//     age: "18"
// }

// const user2 = {
//     FirstName:"Hari",
//     age : "20"
// }


// const user3 = {
//     FirstName: "Priya",
//     age: "21"
// }


// const AllUsers = [{

//     FirstName: "Abhi",
//     Gender: "Male"
// }, {
//     FirstName: "Har",
//     Gender: "Male"
// }, {

//     FirstName: "Priya",
//     Gender: "Female"
// }

// ]

// for(let i =0 ; i<AllUsers.length;i++){
//     if(AllUsers[i]["Gender"] == "Male"){
//         console.log(AllUsers[i]["FirstName"]);
//     }
// }

// function sum(num1, num2, fntocall){

//     let value = num1 + num2;

//     fntocall(value);
// }


// function Diplayres(Data){

//     console.log("The result value of sum is " + Data );
// }


// console.log(sum(1,2,Diplayres));

// function getlength(str){
//     console.log("Original String :", str);
//     console.log("Length:", str.length);
// }

// getlength("Hello World");

//  str.indexOf(target);
// str.lastIndexOf(target);


// function getSlice(str, start, end){

//     console.log("Original String:", str);

//     console.log("Original Slice:", str.slice(start, end));

// }

// getSlice("Hello World", 0, 5);

// function cutIT(str, startIndex, endIndex){
//     let newStr = "";

//     for(let i =0; i<str.length; i++){
//         if( i>=startIndex && i <endIndex) {
//             newStr = newStr + str[i];
//         }
//     }

//     return newStr;
// }

// const value = "Abhigyan Singh";

// let ans2 = value.slice(2,5);
// console.log(ans2);

// console.log(cutIT(value,2,5));

// const str = " Hello World";

// console.log(str.replace(str, "world", "javascript"))


const value = "hi my name is Abhigyan"

const words = value.split(" ");

const words1 = value.split("h");
console.log(words);
console.log(words1);
 