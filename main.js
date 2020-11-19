console.log("Hello, world!");

let myFirstBool = true;

let myFakeBool = "true";

console.log(myFirstBool);

console.log(myFakeBool);

console.log(typeof(myFirstBool));

// Single equation sign ASSIGNS value to a variable. Doesn't work as equality sign.

//For example, individual data cannot be assigned to another data
//console.log(1=1);


//Double equation sign tests equality, the output when checking will be a boolean

console.log(1==1);

// Triple equasion sign compared both value AND data type

console.log(1 == "1");

// versus

console.log(1 === "1");

let myBool = true;

console.log("myBool", myBool);

//Exclamation mark denotes opposite statement

let myBoolFalse = false;
let myBoolTrue = true;

console.log("myBoolFalse", myBoolFalse, "!myBoolFalse", !myBoolFalse);
console.log("myBoolTrue", myBoolTrue, "!myBoolTrue", !myBoolTrue);


// 0 is false, 1 is true

// Circuit operators

console.log(true&&true);
console.log(true&&false);
console.log(false&&true);
console.log(false&&false);

// Less than, greater than, + equal

console.log('1>2', 1 > 2);

console.log('1<2', 1 < 2);

console.log('1<1', 1 < 1);

console.log("1<=1", 1<=1);

console.log("1>=1", 1>=1);

console.log('1!=1', 1!=1);

console.log('1!=2', 1!=2);


// IF ELSE CONDITIONS

let pass = 123;

let answer = prompt("What's the password?")

// Code block: code bench between two curly braces

if (pass === answer) {
    alert("Welcome home!");
} else {
    alert("Wrong password!");
}

//If statements is a logical control flow. If the condition in the first if statement is true, it continues to execute the code in that block.
//If the condition is not true, it moves on to else.