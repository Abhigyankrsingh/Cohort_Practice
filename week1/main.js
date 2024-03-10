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


const AllUsers = [{

    FirstName: "Abhi",
    Gender: "Male"

}, {
    FirstName: "Priya",
    Gender: "Female"
}, {
    FirstName: "Harkirat",
    Gender: "Male"
}
]

for(let i =0; i<AllUsers.length; i++){

    if(AllUsers[i]["Gender"] == "Male"){
        console.log(AllUsers[i]["FirstName"]);
    }
}
