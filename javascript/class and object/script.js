// const obj1 = {               // we can also use a function inside an obj
//     name: "Rohit Sharma",       
//     marks: 87,
//     getMarks: function(){           //  also can be write    getMarks(){ block of code},
//         console.log("MArks =0",this.marks)
//     },
// }

// // prototype - it is a default obj already present inside a obj with some methods and properties.like if we create an array we can use push(), ppo() methods bcz it is already present as a prototype.
//             //   We can also create our own prototype of for a object.

// const obj2 = {
//     name: "Rahul",
// }
// obj2.__proto__ = obj1;       // now obj2 can also use the state,functions and methods of obj1. This is always used for obj. If obj & prototype have same mthd then object's mthd will be used like name here.


// // Class:- Act as a Blueprint for obj. It has its own functions

// class car {
//     constructor(){
//         console.log("hii");
//     }
//     display(){
//         console.log("Hello")
//     }
//     setBrand(brand){
//         this.brand = brand;
//     }
// }

// let thar = new car();   // object created

// thar.setBrand("Mahindra");

// class student{
//     constructor(name, roll){
//         this.name = name;
//         this.roll = roll;
//     }
//     show(){
//         console.log("name:",this.name, "\nRoll:", this.roll);
//     }
// }

// let s1 = new student("Raj",101);


// inheritance

// class person{
//     constructor(){
//         console.log("Parent's constructor");
//     }
//     eat(){
//         console.log("A person eat");
//     }
//     work(){
//         console.log("A person works");
//     }
// }

// class teacher extends person{
//     constructor(){
//         super();                                // without super() we cannot create constructor in child class. super() must be use anywhere  
//         console.log("Child's constructor");     // (start, middle or end) inside child class's constructor
//     }
//     work(){
//         console.log("A teacher teaches us");        //overriding
//     }
// }

// let t1 = new teacher();


// Q1
// let data = "Website info"
// class user{
//     constructor(name, email){
//         this.name = name;
//         this.email = email;
//     }
//     viewData(){
//         console.log(data);
//     }
// }
// let u1 = new user("Ram","xyz@gamil.com");

// class admin extends user{
//     constructor(name, email){
//         super(name, email);
//     }
//     editData(){
//         data = "New values";
//     }
// }

// let a1 = new admin("admin", "email");