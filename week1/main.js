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


// const value = "hi my name is Abhigyan"

// const words = value.split(" ");

// const words1 = value.split("h");
// const words2 = value.split(",");
// console.log(words);
// console.log(words1);
// console.log(words2);

// const value = "  Abhigyan  Kumar Singh   "

// console.log(value.trim())

// console.log(value.toUpperCase())

// console.log(value.toLowerCase())

// console.log(parseInt("42"));

// console.log(parseInt("42px"));

// console.log(parseInt("3.14"));





// const initialArray = [1,2,3];

// function pri(str){

//     console.log(str);
// }

// initialArray.forEach(pri);


// function log1 (str){
//   console.log("Hello World1");
// }


// function log2(str){
//     console.log("Hello World2");
// }


// function callfunction(fn){
//     fn();
// }


// callfunction(log1);



// const initialArray = [1,2,3]



// function pri(str){

//  console.log( str + " It is a String");

// }


// initialArray.forEach(pri);

//  const dog = {
//     Firstname : "oggie",
//     legCounts: 4,
//     speaks: "bhow bhow"
//  };

//  const cat = {
//     Firstname: "Puss",
//     legCounts: 4,
//     speaks: " Mewow"
//  };

// function printStr(animal) {
//     console.log("Animal " + animal["Firstname"]+ " " + animal["speaks"]);
// }

// printStr(dog);



// class Animal {

//     constructor(name, legCount, speaks) {
//         this.name = name;
//         this.legCount = legCount;
//         this.speaksloud = speaks;
//     }
//     speaks(){
//         console.log("hi there" + this.speaksloud);
//     }
// }

// let dog1 =  {
//     name: "dog",
//     legCount : 4,
//     speaks: "bow bow"
// }

// let dog = new Animal("dog", 4, "bow bow");


// dog.speaks();


// const currentDate = new Date();

// console.log("time in millisecond", currentDate.getTime());

  
// const users = '{"name": "Abhi", "age": 21, "gender": "male"}'

// const user = JSON.parse(users)

// console.log(user["gender"]);


// const user = {
//     name: "Abhi",
//     gender: "male"
// }

// const final = JSON.stringify(user)

// console.log(final);


// let ans = 0;

// for(let i =1; i<50; i++){
//     ans = ans + i;
// }

// console.log(ans);


// function findSum(n){

//     let ans = 0;

//     for(let i =0 ; i< n; i++){
//         ans +=i;
//     }
//    return ans;
// }

// function findSumtill100(){
//     console.log( findSum(100));
// }

// setTimeout(findSumtill100,1000)

// console.log("Hello World");

// const fs = require("fs");

// fs.readFile("a.txt","utf-8", function(err, data){


//     console.log(data);
// })

// console.log("Hi");


// function square(n){
//     return n *n;
// }

// function cube(n){
//     return n *n*n;
// }


// function sumOfSquare(a, b, fn){
//     const val1 = fn(a);
//     const val2 = fn(b);
   
//     return val1 + val2;
// }


// function sumOfcubes(a,b,fn){
//     const val1 = fn(a);
//     const val2 = fn(b);
//     return val1 + val2;
// }




//UGLY CODE

const fs = require('fs');

function readthe(cb){

    fs.readFile("a.txt", "utf-8", function(err,data){

        cb(data);
    });


}

function onDone(data){
    console.log(data)
}

readthe(onDone)