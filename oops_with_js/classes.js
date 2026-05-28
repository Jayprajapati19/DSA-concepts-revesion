class CreateUser {
    #age
    constructor(firstName,lastName, age ) {
        this.firstName = firstName
        this.lastName = lastName
        this.#age = age
    }

    #hi = "hello"  

    getBirthYear() {    
    return new Date().getFullYear() - this.#age
    }
    getFullName() {    
    return this.firstName + ' ' +  this.lastName
    }
}


const user1 = new CreateUser('Jay', 'Oza', 20);
const user2 = new CreateUser('Mihir', 'Agath', 22);
