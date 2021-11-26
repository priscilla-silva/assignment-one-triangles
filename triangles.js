//CASE #1

//triangleOne

let base = 10;
let height = 13;

const triangleOneArea = (base * height)/2;

console.log("triangleOne area equals " + triangleOneArea + " cm2");

//triangleTwo
base = 16.5;
height = 20.3;

const triangleTwoArea = (base * height)/2;

console.log("triangleTwo area equals " + triangleTwoArea + " cm2");

//Comparison

if (triangleOneArea > triangleTwoArea) {
    console.log("The triangle with the biggest area is triangleOne")
} else if (triangleOneArea == triangleTwoArea) {
    console.log("Both triangles have the same area")
} else {
    console.log("The triangle with the biggest area is triangleTwo")
}

//-------------------***--------------------------

//CASE #2

//triangleThree

base = 16.5;
height = 20.3;

const triangleThreeArea = (base * height)/2;

console.log("triangleThree area equals " + triangleThreeArea + " cm2");

//triangleFour

base = 20.3;
height = 16.5;

const triangleFourArea = (base * height)/2;

console.log("triangleFour area equals " + triangleFourArea + " cm2");

//Comparison
if (triangleThreeArea > triangleFourArea) {
    console.log("The triangle with the biggest area is triangleThree")
} else if (triangleThreeArea == triangleFourArea) {
    console.log("Both triangles have the same area")
} else {
    console.log("The triangle with the biggest area is triangleFour")
}

//-------------------***--------------------------

//CASE #3

//triangleFive

base = 7.8;
height = 5.6;

const triangleFiveArea = (base * height)/2;

console.log("triangleFive area equals " + triangleFiveArea + " cm2");

//triangleSix

base = 9.3;
height = 12.4;

const triangleSixArea = (base * height)/2;

console.log("triangleSix area equals " + triangleSixArea + " cm2");

//Comparison

if (triangleFiveArea > triangleSixArea) {
    console.log("The triangle with the biggest area is triangleFive")
} else if (triangleFiveArea == triangleSixArea) {
    console.log("Both triangles have the same area")
} else {
    console.log("The triangle with the biggest area is triangleSix")
}