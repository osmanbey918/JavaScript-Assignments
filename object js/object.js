/*
//task 1 :: object creation 
const emptyObject = {};
const person = {
    name : "developer",
    age : 18,
    profession : "Full Stack Developer"
};
*/



/*
//task 2 :: access, modify, adding and print the properties and values of object
const person = {
    name : "developer",
    age : 18,
    profession : "Full Stack Developer"
};
console.log('Name-->', person.name, 'Age-->', person.age, 'Profession-->', person.profession);//display object values
person.name = "Designer";// modifying object values
person.isMarried = false;//adding new property in object
console.log(person.name);//accessing modify value
console.log(person.isMarried);//accessing new values
*/


/*
//task 3 :: object Method
function object(personOb) {
    const person = {
        name : "developer",
        age : 18,
        profession : "Full Stack Developer",
        run : function() {                          // assigning a funtion to variable
            console.log("He run very Fast ");
         }
        };
        person.run();// calling funtion in object
}
object(); //calling main function
*/

/*
// task 4 :: iterating over objects
function object(personL) {
    const person = {
        name: "developer",
        age: 18,
        profession: "Full Stack Developer",
    };
    for (let property in person) {
        console.log(`${property}: ${person[property]}`)
    }
    console.log("\nTask 2:");
    for (let key in person) {
      // Example action: converting property names to uppercase
      console.log(key.toUpperCase()," : ", person[key]);
    }
}
object();
*/


/*
//task 5 :: compare two objects have same property and check both objects are equal
function compareObjects(obj1, obj2) {
    const obj1keys = Object.keys(obj1)
    const obj2keys = Object.keys(obj2)
    if(obj1keys.length !== obj2keys.length){
        return false;
    }

    for (let keys in obj1){
        if(obj1[keys] !== obj2[keys]) {
            return false;
        }
    }
    return true;
    
}

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { a: 1, b: 2, c: 3 };
const obj3 = { a: 1, b: 2, c: 4 };

console.log(compareObjects(obj1, obj2)); // Output: true
console.log(compareObjects(obj1, obj3)); // Output: false

// part 2 :: checking ewuality in memory.
console.log("\npart 2 checking equality")
function areObjectsSame(obj1, obj2) {
    return obj1 === obj2;
}

const objA = { x: 1, y: 2 };
const objB = objA; // objB refers to the same object as objA
const objC = { x: 1, y: 2 };
// remember object only equal when they are  use same memory location
console.log(areObjectsSame(objA, objB)); // Output: true
console.log(areObjectsSame(objA, objC)); // Output: false
*/



/*
// task 6 :: create an object that contain another object at its properties and then access and modify the properties of nested object

function nestedObject(nestObject) {
    nestObject.favorite.fruits = "Coconut"; //accessing and modifying properties of nested object
    nestObject.favorite.vegetables = "LadyFinger";//accessing and modifying properties of nested object
    return "Modified fruits : " + nestObject.favorite.fruits + "\nModified vegetables : " + nestObject.favorite.vegetables; //accessing and returning 
    
}
const person = {name: "developer", age: 18, profession: "Full Stack Developer", favorite : {fruits: "Mango", vegetables : "Potato"}};
console.log(nestedObject(person));//output:Modified fruits : Coconut
                                 //output :Modified vegetables : LadyFinger
*/



/*
// task 7 :: Create a prototype object and use it to create multiple instances of objects.
// Add a method to the prototype object and observe its effect on the instances.
// Define a prototype object
var PersonPrototype = {
    // A method to greet
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};

// Create instances using Object.create() and link them to the prototype
var person1 = Object.create(PersonPrototype);
person1.name = "Alice";

var person2 = Object.create(PersonPrototype);
person2.name = "Bob";

// Call the greet method on instances
person1.greet(); // Output: Hello, my name is Alice
person2.greet(); // Output: Hello, my name is Bob

// Adding a new method to the prototype object
PersonPrototype.introduce = function() {
    console.log("I am " + this.name + " and I'm " + this.age + " years old.");
};

// Adding properties to instances
person1.age = 30;
person2.age = 25;

// Call the new method on instances
person1.introduce(); // Output: I am Alice and I'm 30 years old.
person2.introduce(); // Output: I am Bob and I'm 25 years old.
*/



/*
//Task 8: Object Serialization
// Define an object
var myObject = {
    name: "John",
    age: 30,
    city: "New York"
};

console.log("object:", myObject);
// Convert object to JSON string
var jsonString = JSON.stringify(myObject);
console.log("JSON string:", jsonString);

// Parse JSON string back to an object
var parsedObject = JSON.parse(jsonString);
console.log("Parsed object:", parsedObject);
*/




// Task 9 :: Object Destructuring
// Use object destructuring to extract specific properties from an object.
