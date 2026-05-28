// function CreateUser(firstName, lastName, age) {
//     const user = {
//         firstName,
//         lastName,
//         age,
//         // getBirthYear: CreateUser.commonMethods.getBirthYear

//     }
    
//     return user
// }



// CreateUser.commonMethods = {
// getBirthYear(){    
//     return new Date().getFullYear() - this.age
// }
// };



function CreateUser(firstName, lastName, age) {
   this.firstName = firstName
   this.lastName = lastName
   this.age = age
}


CreateUser.prototype.getBirthYear = function() {    
    return new Date().getFullYear() - this.age
}

CreateUser.prototype.getFullName = function() {    
    return this.firstName + ' ' +  this.lastName
}


const user1 = new CreateUser('Jay', 'Oza', 20);
const user2 = new CreateUser('Mihir', 'Agath', 22);


console.log("J a y P r a j a p a t i");
