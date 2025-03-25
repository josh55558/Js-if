console.log(3<5);
console.log(typeof true);
console.log(typeof "false");

console.log(5=="5.00")
console.log(5=="5.00")

if (30>=16) {
    console.log("you can drive")
} else {
    console.log("you can not drive")
}

const age = 15

if (age>=16) {
    console.log("you can drive")
} else if (age>=14) {
    console.log("Almost there")
}else{
    console.log("you can not drive");
}

const time = 13
if (time < 12) {
    console.log("good morning")
}else if (time === 12) {
    console.log("noon")
}else{
    console.log("good afternoon")
}

let weather = prompt("How's the weather")

if (weather == "rain") {
    console.log("Grab your umbrella")
} else {
    console.log("Wear sunglasses")
}

function checkAge(){
    const age = parseInt(document.querySelector("#ageInput").value)
    const message = age >= 16 ? "you can drive" : "you  can not drive";
    document.querySelector("#driveMessage").textContent = message;
}

function greetUser() {
    const time = parseInt(document.querySelector("#"))
}