console.log("Its working!");


// OOP
// object > properties, method


// "this" is the keyword that takes the variable value from its parent and it is always needed to be know which is the parent object

// const person = {
//     name :"Ram",
//     bio: ()=>{
//         return `Hey this is ${this.name}.`
//     },

// };

//here "this" is referring to the bio function as parent obj but bio has nothing declared in variable name
//that's why it doesnot work

// const person = {
//     name :"Ram",
//     bio: ()=>{
//         return `Hey this is ${person.name}.`
//     },

// };

//"this" didnot work in above case, so object name is used instead of  "this"

// const person = {
//     name :"Ram",
//     bio(){
//         console.log(this);

//         return `Hey this is ${this.name}.`
//     },

// };

//here "this" is the keyword that access the object where its executor exists
//"bio" is the function not the variable in this case that's why "this" is referring to object person
//you can see the console inside the bio function, this is clearly showing the parent object 


// console.log(person.name);

// console.log(person.bio());



// ===============================================

// const person = ()=>{ 
//     return{
//         name: "Ram",
//         address: "Sydney",
//         bio: () => {
//             return `Hey, this is ${person.name} from ${person.address}`;
//         }
//     }
// }



// const person = ()=>{ 
//     return{
//         name: "Ram",
//         address: "Sydney",
//         bio(){
//             return `Hey, this is ${this.name} from ${this.address}`;
//         }
//     }
// }



//it is done to make multiple objects effectively faster

// const person = (a,b)=>{ 
//     return{
//         name: a,
//         address: b,
//         bio(){
//             return `Hey, this is ${this.name} from ${this.address}`;
//         }
//     }
// }



// const val = person("Ram", "Sydney");
// console.log(val);
// console.log(val.bio); 
// console.log(val.bio());

// const val2 = person("Shyam", "Melbourne");
// console.log(val2.bio());




// ================================CLass======
///class based OOP
// the name of the class should always start with uppercase
//the variables should be started with "this."
// to make the use of the class , we have to instanteous using "new" keyword

// we can create the obj inside the constructor
//then only we can run the value

// class Person {

//     constructor() {
//         this.name = "Ram"
//         this.address = "Sydney"

//     }

//     bio() {
//         return "this is my info";
//     }
// }


// class Person {

//     constructor(name, add) {
//         this.name = name;
//         this.address = add;

//     }

//     bio() {
//         return "this is my info";
//     }
// }


// class Person {

//         constructor(name, add) {
//             this.name = name;
//             this.address = add;

//         }

//         bio() {
//             return "this is my info";
//         }

//         upperCase(){
//             this.name = this.name.toUpperCase();
//         }
//     }



// class Person {

//     constructor(name, add) {
//         this.name = name;
//         this.address = add;

//     }

//     bio() {
//         return "this is my info";
//     }
// }



// class Person {

//     #secret;
//     constructor(name, add) {
//         this.name = name;
//         this.address = add;
//         this.#secret = "sdfjlks";
//     }

//     bio() {
//         return `Hi, this is ${this.name} from ${this.address} and the secret is ${this.#secret}`;
//     }
// }

// const ramInfo = new Person("Ram", "Sydney");

// ramInfo.phone = 832493;  ///overriding the new property

// // ramInfo.upperCase();
// console.log(ramInfo);

// console.log(ramInfo.name);
// console.log(ramInfo.secret);// this wont be accessed by the instantaneious object as it is secret and it cannot be manipulated as well.


// =========================================
//Encapsulation 
// bundling the data and restricting access


//Abstraction
// hiding the complex implementation details of an object and exposing only the essential features or interactions


//Inheritence 
// it is to inherit the properties from the parent element by the child element


// const ram = {
//     name: "Ram",
//     dob: "23/3/1200",
//     pet: "dog",
//     degree: "BIT",
// }


// //parent class

// class parentClass{
//     constructor({name, dob}){
//         this.name = name;
//         this.dob = dob;
//     }
// }

//inheriting the parentClass in Class Human
// class Human extends parentClass{
//     constructor({pet, degree, ...rest}){
//        super(rest);
//         this.pet = pet;
//         this.degree = degree;
//     }

   
//     bio(){
//         return `this is ${this.name} who was born in ${this.dob} has the ${this.degree} degree.`;
//     }
// }

// const RamObj = new Human(ram);
// console.log(RamObj.bio());


//inheriting the class parentClass to class Animal

// class Animal extends parentClass{
//     constructor({owner, ...rest}){
//         super(rest);
//         this.owner = owner;
//     }

//     bio(){
//         return `this is ${this.name} was born in ${this.dob}, the owner is ${this.owner}`;
//     }
// }

// const cat = {
//     name: "Tommy",
//     dob: "234-34-343",
//     owner: "Shamy",
// }
// const myCat = new Animal(cat);
// console.log(myCat.bio());


//Polymorphism 

// this is to multiply the 

//Destructuring 

// const ram = {
//     name: "Ram",
//     dob: "23/3/1200",
//     pet: "dog",
//     degree: "BIT",
// }
// console.log(ram);
// console.log(ram.name);
// console.log(ram["name"]);

// const {partner, name, dob}  = ram;

// console.log(partner, name, dob);

// const bio = (ram) =>{
    // return `this is ${ram.name} born in ${ram.dob}`;
// }

// ===========OR=====================

// const bio = (ram) =>{
//     const {name, dob} =ram;
//     return `this is ${name} born in ${dob}`;
// }


// ===========OR=====================

// const bio = ({name, dob}) =>{
//     return `this is ${name} born in ${dob}`;
// }

// console.log(bio(ram));





// ===========DEFAULT=====================
// const bio = ({name, dob = "N/A"}) =>{
//     return `this is ${name} born in ${dob}`;
// }

// console.log(bio(ram));



// ===========REST=====================
// const ram = {
//     name: "Ram",
//     dob: "23/3/1200",
//     pet: "dog",
//     degree: "BIT",
    
// }
// console.log(ram); //just giving the output of the obj ram

// const newRam = ram; // this is the shallow copy
// ram.name ="Shyam"; //overriding the value of property name of the object called "ram"

// console.log(newRam); //here the overriding still can be seen 

// const {partner, ...rest} = ram; /// using the rest method to destructure the object and also overriding the partner property


// console.log({partner, ...rest});


//in case of destructuring two objects

// const career = {
//     job: " developer",
//     title: "Designer",
// }

// const newRam = {ram, career}; 

//to spread all of the property 

// const newRam = {...ram, ...career}; 

// console.log(newRam);

// ===================================================

// Write a JavaScript program to create a class called "Person" with properties for name, age and country. Include a method to display the person's details. Create two instances of the 'Person' class and display their details.


// class Person{
//     constructor(name, age, country){
//         this.name = name;
//         this.age = age;
//         this.country = country;
//     }
//     bio(){
//         return `This is ${this.name} aged ${this.age} from ${this.country}.`;
//     }
// }
// const Person1 = new Person("Shyam", 23, "Sydney");
// const Person2 = new Person("Ram", 23, "Nepal");
// console.log(Person1.bio());
// console.log(Person2.bio());

// ===================================================
// Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area and perimeter.

// class Rectangle{
//     constructor(width, height){
//         this.width = width;
//         this.height = height;
//     }
//     area(){
//         return `The area of the rectangle is ${this.width * this.height}`;
//     }
//     perimeter(){
//         return `The perimeter of the rectangle is ${2*(this.width + this.height)}`
//     }
// }

// const rectangle1 = new Rectangle(2, 2);
// const rectangle2 = new Rectangle(5,3);

// console.log(rectangle1.area());
// console.log(rectangle1.perimeter());

// console.log(rectangle2.area());
// console.log(rectangle2.perimeter());

// ===================================================
// Write a JavaScript program that creates a class called 'Vehicle' with properties for make, model, and year. Include a method to display vehicle details. Create a subclass called 'Car' that inherits from the 'Vehicle' class and includes an additional property for the number of doors. Override the display method to include the number of doors.

// class Vehicle{
//     constructor(make, model, year){
//         this.make = make;
//         this.model = model;
//         this.year = year;
//     }

//     diplayVehicleDetails(){
//         return `${this.make}, ${this.model}, ${this.year}`;
//     }
// }

// const newVehicle = new Vehicle("Truck", "sdfk", 3454);
// console.log(newVehicle.diplayVehicleDetails());

// //destructing 
// const {...rest} = Vehicle;

// // child class inheriting the properties of the parent class

// class Car extends Vehicle{
//     constructor(make, model, year, noOfDoors){
//         super(make, model, year);
//         this.noOfDoors = noOfDoors; 
//     }
    
//     diplayCarDetails(){
//         return `${this.make}, ${this.model}, ${this.year}, ${this.noOfDoors}`;
//     }
// }

// const car1 = new Car("Audi", "hg", 2022, 4);
// console.log(car1.diplayCarDetails());


// // ===================================================
// // Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area. Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area calculation method. Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for the 'Triangle' class.

// class Shape{
//     constructor(length, width){
//         this.length = length;
//          this.width = width;
//     }

//     area(){
//        return `Area: ${Math.PI * this.length**2 }`;
//     }
// }

// const Shape1 = new Shape(2, 2);
// console.log(Shape1.area());


// class Circle extends Shape{
//     constructor(length, expo){
//         super(length);
//         this.expo = expo;
//     }
//     area(){
//         return `Area: ${Math.PI * Math.pow(this.length, this.expo)}`;
//      }
// }
// const Circle1 = new Circle(4, 2)
// console.log(Circle1.area());


// class Triangle extends Shape{
//     constructor(length, width){
//         super(length, width);
//     }
//     area(){
//         return `Area: ${1/2 * this.length * this.width}`
//     }
// }

// const Triangle1 = new Triangle(2, 3);
// console.log(Triangle1.area());


// ===================================================
// Write a JavaScript program that creates a class called BankAccount with properties for account number, account holder name, and balance. Include methods to deposit, withdraw, and transfer money between accounts. Create multiple instances of the BankAccount class and perform operations such as depositing, withdrawing, and transferring money.

class BankAccount {
    constructor(accNumber, accHolderName, balance){
        this.accNumber = accNumber;
        this.accHolderName = accHolderName;
        this.balance = balance;
    }

    deposit(amount){
        if(amount > 0){
            this.balance += amount;
            console.log(`You deposited $${amount} in Account Number ${this.accNumber} under the name of ${this.accHolderName} and your current balance is $${this.balance}.`);
        }else{
            console.log("The amount must be positive."); 
        }
     
    }

    withdraw(amount){
        if(amount > 0 && this.balance >= amount){
            this.balance -= amount;
            console.log(`You have withdrawn $${amount} from Account number ${this.accNumber} with name ${this.accHolderName} and your current balance is $${this.balance}.`);
        }else if(amount > 0 && this.balance < amount){
            console.log(`Sorry, you don't have enough balance!!!`);
            
        }else{
            console.log(`Please enter the positive number!!!`);
            
        }
    }

    transfer(amount, targetAccount){
        if(amount > 0 && this.balance >= amount){
            this.balance -= amount;
            targetAccount.balance += amount;

            console.log(`Successful! You have transferred $${amount} from Account Number ${this.accNumber} to Account Number ${targetAccount.accNumber} and your current balance is $${this.balance}.`);  
        }else if(this.balance < amount){
            console.log(`Sorry! you don't have enough balance.`);
            
        }else{
            console.log(`Please enter the positive number.`);
            
        }
    }

    displayBalance(){
        return `Your Current balance is $${this.balance}.`; 
    }
}

const ram = new BankAccount(231423, "Ram", 0);
const shyam = new BankAccount(1324234, "Shyam", 200);
const Kripa = new BankAccount(234567, "Kripa", 0);


Kripa.deposit(100);
Kripa.withdraw(5);
Kripa.transfer(50, ram);

console.log(Kripa.displayBalance());

Kripa.deposit(200);

// ram.deposit(200);
// // ram.withdraw(100);
// ram.transfer(100, shyam);
// console.log(ram.displayBalance());
// console.log(shyam.displayBalance());
// shyam.deposit(400);
// shyam.withdraw(400);


// ===================================================

// Write a JavaScript program that creates a class called University with properties for university name and departments. Include methods to add a department, remove a department, and display all departments. Create an instance of the University class and add and remove departments.

class University{
    constructor(name, department){
        this.name = name;
        this.department = department;
    }
    displayDepartment(){
        return `The name of the university is ${this.name} and it has the following departments: ${this.department}`
    }
    addDepartment(department){

    }
}

const university1 = new University("ABC", "Science");
console.log(university1.displayDepartment());

// ===================================================
// Write a JavaScript program that creates a class called Product with properties for product ID, name, and price. Include a method to calculate the total price by multiplying the price by the quantity. Create a subclass called PersonalCareProduct that inherits from the Product class and adds an additional property for the warranty period. Override the total price calculation method to include the warranty period. Create an instance of the PersonalCareProduct class and calculate its total price.
// Write a JavaScript program that creates a class called 'Animal' with properties for species and sound. Include a method to make the animal's sound. Create a subclass called 'Dog' that inherits from the 'Animal' class and adds an additional property for color. Override the make sound method to include the dog's color. Create an instance of the 'Dog' class and make it make its sound.
