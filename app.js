// Change current year to 2023 as soon as it is 12am
const changeYearTo2023 = () => {
    let currentDate = new Date();
    currentDate.setFullYear(2023);
    // console.log(currentDate); //log the date to console

  }
  
  const checkCurrentTime = () => {
    let currentDate = new Date();
    if (currentDate.getHours() === 0 && currentDate.getMinutes() === 0 && currentDate.getSeconds() === 0) {
      changeYearTo2023();
    }
  }
  checkCurrentTime();

// How to destructure an array of strings
let names = ["david", "john", "zion", "michelle"];
// omitting the second value and still maintaining the index order
let [userA,, userC, userD] = names;
console.log(userC);

let a = 5;
let b = 6;
[a,b] = [b,a];
console.log(b);

// HOW TO SPLIT A STRING INTO AN ARRAY
// .split(" ")  there should be a space there

let message = "My name is david bilson ogunjimi korede tijesunimi".split(' ');
let [p,q,, ...y] = message;
console.log(y);

// array.push()
let data = [2,4,6,8,10];
data.push(6,7,8,9); // adds elements to the array at the end
data.pop(); //removes the last element of an array
data.shift(); //removes the first element of an array
data.unshift(99); //inserts element at the start of an array 
data.splice(3); //removes all element from an array from that index number
console.log(data);


// loop over an array using the forEach loop
let myStudents = ["Michelle", "Renee", "Zion", "Joshua"];
myStudents.map(n => {
    console.log(n)
})

const persons = [
    {
        firstName : "Josh",
        lastName : "Malcom"
    },
    {
        firstName : "David",
        lastName : "Bilson"
    },
    {
        firstName : "Champion",
        lastName : "X"
    }
];
myStudents.forEach((n, i, myStudents) => {
    console.log(n, i, myStudents);
})
console.log(myStudents);


// map over an array and return an element with the required results
// const newNames = persons.map((names) => { return `<p class="names">${names.firstName}  ${names.lastName}</p>`});
// let personContainer = document.getElementById("persons");
// personContainer.innerHTML = newNames.join("");

// THIS IS AN ARTICLE FOR MEDIUM
// WRITE IN MICROSOFT WORD AND PUBLISH

let angryUsers = ["Chioma", "Sandra", "Eunice"];
angryUsers.push("Ada"); //adds element to the end of the array
console.log(angryUsers.push("Ada")); //this method appends a new element to the end of the array and returns the length of the array
angryUsers.pop();//removes the last element at the end of the array
console.log(angryUsers);
angryUsers.shift()//removes data from beginning of the array
angryUsers.unshift("Paulina");
angryUsers.unshift("BabelJS");
angryUsers.splice(2,1);//removes all the element starting from the index number, adding a second value such as (2, 1) will remove the index element only, the second value is the numbr of elements you want to remove from the array
angryUsers.splice(2,2, "Logan", "Ozarks"); //third value and further gets added to the array
console.log(angryUsers);
// END OF MEDIUM ARTICLE


// Constructor function to create object in JavaScript
function Robot(name, technology) {
    this.name = name;
    this.technology = technology;
    this.work = function(){
        console.log("Robots built with programming")
    }
}
let robot1 = new Robot('Andy', "Rust");
let robot2 = new Robot('Siri', "Python & Java ");
robot2.technology = "Blockchain";
robot1.work();
console.log(robot2);

// creating arrays and fetching elements in javascript
let arrayValue = [5,7,8]; //an array of numbers
arrayValue.push(46);
console.log(arrayValue[3]);

// different types of data in arrray
let arrayNames = ["David", "Josh", "Kyrat"];
arrayNames[3] = "Ankara Messi"; //adds the new value to the fourth order
arrayNames[0] = "Bilson"; //changes the value of the first element from david to bilson
console.log(arrayNames);

// calling functions from an array
let testArrayFunc = ["Array Function", 1, function(){console.log("this is a function within an array")}];
console.log(testArrayFunc);
// Call the function
testArrayFunc[2]();


// for of loop in arrays
let legitArray = [];
legitArray[0] = 5;
legitArray[99] = 9;

for(let n of legitArray) {
    console.log(n);
}

// MAPPING IN JAVASCRIPT
// map is a collection of key and value pairs

let map = new Map()
map.set("David", "React")
map.set("Hope", "Javascript")
map.set("Ademide", "Forex Trading")
map.set("John", "Digital Marketing")

console.log(map.get("Ademide")); //checks for the second value of the set
console.log(map.has("Ademide")); //checks if the value is present in all the  set
console.log(map.keys());//returns the first index of each set

for(let [x,y] of map) {
    console.log(x, ":", y)
}


//FUNCTIONS IN JAVASCRIPT
function sayHello() {
    console.log("hello world")
}
sayHello()

//  arithmetic operators in Javascript
// + addition 
// - subtraction
// % remainder
let num = 5;
num += 4;
num++ // pre-increment
++num // post-increment
const increment = () => {
    num++;
};
increment();
console.log(num);

let devOps = 8;
let xy = ++devOps //preIncrement
// let xy = devOps++ //postIncrement - devOps get assigned first before increment
console.log(devOps, xy);

// RAISE TO POWER - finding the square of a number in javascript
let sqr = 6;
let result = Math.pow(sqr, 2);
// alternative for finding square root of the above
let resultz = sqr ** 3
console.log(result, resultz);

// RELATIONAL OPERATORS IN JAVASCRIPT
let compare = 7 >= 7;
console.log(compare);


// LOGICAL OPERATORS IN JAVASCRIPT
let w = 7, e = 9, r = 3;
let checkResult = w > e || e > r;
let checkResultAgain = w > e && e > r;
console.log(checkResult, checkResultAgain);

// Conditional statements in JS

let m = 1;
let n = 4;

let output = m > n ? console.log("Acceptable") : console.log("Not acceptable");
output = m > n;

if(output) {
     console.log("I'm so sorry!")
} else {
    console.log("You are a valid JS dev")
}

// Ternary operators in JS

let pol = 6;
let rezultz;


let nomt = 6;


// SWITCH STATEMENT IN JS
// sWITCH STATEMENT IS USED INSTEAD OF else if () 
let day = "Friday";
switch(day) {
    case 'Monday' : console.log("Be at 5th floor, WDC") ;
    break;
    case 'Tuesday' : console.log("Be at Beacon Centre, Kuola") ;
    break;
    case 'Wednesday' : console.log("React conference in Japan") ;
    break;
    case 'Thursday' : console.log("API confederation meeting, Alabama") ;
    break;
    case 'Friday' : console.log("Microsoft Azure space on twitter");
    default: console.log("Hey, you have tried! REST!")
}
if (day == "Monday") {
    console.log("You should be at the train station!");
} else if (day == "Tuesday") {
    console.log("You should be at McDonalds");
} else {
    console.log("listen to THE_BLAZE - sparks and ashes");
};

let mun1 = 6;
let mun2 = 9;
let outlet = mun1 + mun2;

console.log(`The addition of ${mun1} and ${mun2} is ` + outlet);

console.log("My name is \nDavid Bilson") // how to print the part of a string on a new line
console.log(`You can print on a new line if you are using back tic`);

// LOOPS IN JAVASCRIPT
// While loop in Javascript
let yearsInLove = 2;
while (yearsInLove <= 4) {
    console.log("My heart got stolen, unfortunately, if it gets broken, i'm done trying!");
    yearsInLove++;
}
console.log(yearsInLove);

// DO WHILE LOOP - - do this while the condition is true
// do {
//     console.log("orrbi i'm using a do while")
// } while (conditionIsMet);

// FOR LOOP IS THE BEST LOOP IN LIFE
for (let g = 1; g <= 10; g++){
    console.log("David, you will work as a software engineer in the USA")
}

for (let w = 1; w < 10; w++) {
    console.log("Blockchain dev using nextjs, solidity and etherjs")
}

// OBJECTS IN JAVASCRIPT
// Object Literal
let alienate = {
    name: "David",
    stack: "HTML. CSS. JS. REACT, TAILWIND, SASS, TECHNICAL WRITING, "
} //empty object
console.log(alienate);

// COMPLEX OBJECTS IN JAVASCRIPT

let simpleAlien = {
    name: "David",
    tech: "JavaScript",
    laptop : {
        nvidia: true,
        RAM: 4,
        brand: "HP"
    }
}

delete simpleAlien.laptop;
console.log(simpleAlien.laptop); //the question mark checks if the object exists
console.log(simpleAlien.tech); //the question mark checks if the object exists

let laptop = {
    cpu: "i9",
    ram: 16,
    brand: "acer",
    boot: function() {
        console.log("welcome user")
    }
}
laptop.boot();
// we are learning sass tonight motherfuckerz 

// DATA TYPES IN JAVASCRIPT
let userName = "Jemma \"Bilson\" "; // string
let phone = "09070678576"; // numbwe

// for in loop
 
let forObjects =  {
    name: "Hot Chocolate",
    tech: "Ruby on rails"
}
for (let key in forObjects) {
    console.log(key, forObjects[key]);
}

// function return and passing

function calc(a,b) {
    return a + b
}
console.log(calc(5,10));

// function expression

let adderall = function (doseA, doseB) {
    return "Adderall homicidal dose is " + doseA + " and " + doseB;
}
let homicidalDose = adderall(15,94);
console.log(homicidalDose);

// Arrow functions in javascript

let killBill = (a, b) => a * b

console.log(killBill(5,5));


// this key word in javscript
// this represents the current object 
  let pop = {
    cpu: "i9",
    getConfig: function() {
        console.log(this.cpu)
    }
}
pop.getConfig()