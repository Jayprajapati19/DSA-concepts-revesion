// class CreateUser {
//     constructor(firstName,lastName, age ) {
//         this.firstName = firstName
//         this.lastName = lastName
//         this.age = age
//     }

//     static run = 'running'

//     static {
//         console.log(this);
//         this.hi = 'hello'
//         this.getFullName = function(){
//             return this.firstName + ' ' +  this.lastName
//             }
//     }
//     getBirthYear() {    
//     return new Date().getFullYear() - this.age
//     }
// }


// const user1 = new CreateUser('Jay', 'Oza', 20);
// const user2 = new CreateUser('Mihir', 'Agath', 22);




// const user = {
//     firstName: "Jay",
//     lastName: "Prajapati",
//     get fullName(){
//         return `${this.firstName} ${this.lastName}`
//     },
//     set fullName (value){
//         const splitted = value.split(' ')
//         console.log(splitted);
//         this.firstName = splitted[0]
//         this.lastName = splitted[1]
//     }
// }



// console.log(user.fullName);

// console.log(user.fullName());

