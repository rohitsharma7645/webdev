//  API(Application Programming Interface):-

// It provides an interface for fetching(sending/recieving) resources
// It uses Request and Response object.

// fetch() method is used to fetch a resource(data), it returns a promise

// Syntax:- let promise = fetch(url, [option])      // options means request to that include GET, POST, DELETE, PATCH....etc.

// Request:-
    // 1. GET - Request to receive the data
    // 2. POST - Request to give the data
    // 3. DELETE - Request to delete the data
    // 4. PATCH - Request to change in data

const URL = "https://meowfacts.herokuapp.com/";

// let promise = fetch(URL);    // if we not give options takes GET by default
// console.log(promise);

// const getFacts = async () =>{
//     console.log("Getting Data...")
//     let response = await fetch(URL);            // promise given by fetch api is generally called response
//     console.log(response)           // JSON format
    // console.log(response.status)
// }
// getFacts();


// FORMAT:-
//      1. AJAX - Asynchronous JS & XML(XML format used previous)
//      2. JSON - JS Object Notation(Latest format and most of the apis give response in JSON format)

// To understand JSON format we use json method i.e json() 

// json() method:- It returns second promise and used to access usable data. It takes JSON as input and give JS object as output 

// let btn = document.querySelector(".btn");
// let para = document.querySelector(".factPara");

// const getFacts = async () =>{
//     // console.log("Getting Data...")
//     let response = await fetch(URL);            // promise given by fetch api is generally called response
//     // console.log(response)
//     let fact = await response.json();
//     // console.log(fact);       // Returns usable data in the form of array
//     // console.log(fact.data);
//     para.innerText = fact.data;
    
// }
// btn.addEventListener("click", getFacts);


// HTTP(Hyper Text Transfer Protocol) verbs or request methods:-

    // Request:-
    // 1. GET - Request to receive the data
    // 2. POST - Request to give the data
    // 3. DELETE - Request to delete the data
    // 4. PATCH - Request to change in data

// Response Status code:-
    // 1. Informational response - 100-199
    // 2. Successfully response - 200-300      // status:200 (successful)
    // 3. Redirection message - 300-400
    // 4. Client error response - 400-500      // error 404 
    // 5. Server error response - 500-600