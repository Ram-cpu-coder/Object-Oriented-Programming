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



class Person {

    #secret;
    constructor(name, add) {
        this.name = name;
        this.address = add;
        this.#secret = "sdfjlks";
    }

    bio() {
        return `Hi, this is ${this.name} from ${this.address} and the secret is ${this.#secret}`;
    }
}

const ramInfo = new Person("Ram", "Sydney");

ramInfo.phone = 832493;  ///overriding the new property

// ramInfo.upperCase();
console.log(ramInfo);

console.log(ramInfo.name);
console.log(ramInfo.secret);// this wont be accessed by the instantaneious object as it is secret and it cannot be manipulated as well.

