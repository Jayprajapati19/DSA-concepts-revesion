// class User {

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


// // const user1 = new User('Jay', 'Oza', 20);
// // const user2 = new User('Mihir', 'Agath', 22);


// class Student extends User {
//     constructor (firstName, lastName, age, standard){
//         super(firstName, lastName, age)
//         this.standard = standard
//     }

//    study (){
//     console.log("studiing..");
//    }
// }

// class Employee extends User {
//     constructor(firstName, lastName, age, compney){
//         super(firstName,lastName, age)
//         this.compney = compney
//     }

//     work(){
//         console.log();
        
//     }
// }



// const student1 = new Student('Jay', 'Oza', 20, 'BCA');
// const employee1 = new Employee('Mihir', 'Agath', 22, "Google");






// This keyword

// function hi(){
//     console.log(this);
    
// }
// hi()


// const user = {
//     firstName : "Jayy",
//     lastName: "Prajapati",
//     tags:['a', 'b', 'c'],
//     printTags: () => {
//         console.log(this)
//     }
// }



// const body = document.querySelector('body')

// body.addEventListener('click', function(e){
//     console.log(e.target);
//     console.log(e.currentTarget);

//     console.log(this);
// })