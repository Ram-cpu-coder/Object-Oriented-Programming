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

const person = {
    name :"Ram",
    bio: ()=>{
        return `Hey this is ${person.name}.`
    },

};

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


console.log(person.name);

console.log(person.bio());

