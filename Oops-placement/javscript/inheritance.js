class Student {
  // Static Property
  static college = "GEC Patan";

  // Private Field (Encapsulation)
  #password;

  // Constructor
  constructor(id = 0, name = "Unknown", password = "123") {
    this.id = id;
    this.name = name;
    this.#password = password;

    console.log("Constructor Called");
  }

  // Method
  display() {
    console.log("ID :", this.id);
    console.log("Name :", this.name);
    console.log("College :", Student.college);
    console.log("------------------");
  }

  // Getter
  get password() {
    return this.#password;
  }

  // Setter
  set password(newPassword) {
    this.#password = newPassword;
  }

  // Object as Argument
  compare(student) {
    if (this.id === student.id) console.log("Both IDs are same");
    else console.log("IDs are different");
  }

  // Returning Object
  getObject() {
    return this;
  }

  // Static Method
  static showCollege() {
    console.log("College :", Student.college);
  }

  // Nested Class
  static Inner = class {
    show() {
      console.log("Nested Class Executed");
    }
  };
}

// =========================
// OBJECT CREATION
// =========================

console.log("===== OBJECTS =====");

const s1 = new Student();

const s2 = new Student(101, "Mihir", "abc123");

s1.display();
s2.display();

// =========================
// GETTER & SETTER
// =========================

console.log("===== GETTER SETTER =====");

console.log(s2.password);

s2.password = "newpass";

console.log(s2.password);

// =========================
// STATIC METHOD
// =========================

console.log("===== STATIC METHOD =====");

Student.showCollege();

// =========================
// OBJECT AS ARGUMENT
// =========================

console.log("===== OBJECT ARGUMENT =====");

const s3 = new Student(101, "Rohan");

s2.compare(s3);

// =========================
// RETURN OBJECT
// =========================

console.log("===== RETURN OBJECT =====");

const obj = s2.getObject();

obj.display();

// =========================
// ARRAY OF OBJECTS
// =========================

console.log("===== ARRAY OF OBJECTS =====");

const students = [
  new Student(201, "Jay"),
  new Student(202, "Krunal"),
  new Student(203, "Parth"),
];

students.forEach((student) => {
  student.display();
});

// =========================
// ANONYMOUS OBJECT
// =========================

console.log("===== ANONYMOUS OBJECT =====");

new Student(301, "Anonymous").display();

// =========================
// NESTED CLASS
// =========================

console.log("===== NESTED CLASS =====");

const innerObj = new Student.Inner();

innerObj.show();

// inheritance is the process of creating a new class from an existing class
// in this example we are creating a new class electricCar from the existing class car and we are adding a new method charging() to the electricCar class
// the electricCar class is inheriting the properties and methods of the car class and we can use the start() and stop() methods of the car class in the electricCar class
// inheritance is achieved by using the extends keyword in JavaScript and we can also use the super keyword to call the constructor of the parent class and to access the properties and methods of the parent class in the child class
//using super() we can call the constructor of the parent class and we can also use super.methodName() to call the method of the parent class in the child class

//prototype inheritance is a feature in JavaScript that allows objects to inherit properties and methods from other objects. In JavaScript, every object has a prototype, which is another object that it inherits properties and methods from. When we try to access a property or method on an object, JavaScript first looks for it on the object itself, and if it doesn't find it, it looks for it on the object's prototype, and so on up the prototype chain until it finds the property or method or reaches the end of the chain. This allows us to create new objects that inherit properties and methods from existing objects without having to create a new class or use the extends keyword.
// in this example we are creating a new object electricCar that inherits properties and methods from the car object using prototype inheritance. We are adding a new method charging() to the electricCar object and we can use the start() and stop() methods of the car object in the electricCar object.
// prototype inheritance is achieved by using the Object.create() method in JavaScript and we can also use the __proto__ property to set the prototype of an object to another object. However, it is recommended to use Object.create() method for creating objects with a specific prototype instead of using __proto__ property as it is not supported in all browsers and it can lead to performance issues.
