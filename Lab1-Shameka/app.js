document.addEventListener("DOMContentLoaded", function () {

//Declare two variables
let num1 = 5;
let num2 = 3;

// Calculate and output the results
console.log("Sum: " + (num1 + num2));
console.log("Difference: " + (num1 - num2));
console.log("Product: " + (num1 * num2));
console.log("Quotient: " + (num1 / num2));

// Declare two variables
num1 = 5;
num2 = 3;

// Calculate and output the results
console.log("Sum: " + (num1 + num2));
console.log("Difference: " + (num1 - num2));
console.log("Product: " + (num1 * num2));
console.log("Quotient: " + (num1 / num2));

// Declare a variable with your name
let name = "Shameka";

// Concatenate the name with the string and display the result using alert
alert(name + " is learning JavaScript!");

let number = 12; // You can change this value to test other cases

// Check if the number is greater than 10
if (number > 10) {
  console.log("The number is greater than 10.");
} else {
  console.log("The number is less than or equal to 10.");
}

// For loop to iterate from 1 to 5
for (let i = 1; i <= 5; i++) {
      alert(i);
    }

// Create an array of fruits
let fruits = ["apple", "banana", "orange"];

// Output the second fruit in the array
console.log(fruits[1]);

// Create an empty array
let numbers = [];

// Use a for loop to push the numbers 1, 3, 5, and 7 into the array
for (let i = 1; i <= 7; i += 2) {
  numbers.push(i);
}

// Output the numbers array
console.log(numbers);

// Define the greet function
function greet(name) {
    console.log("Hello, " + name + "!");
  }
  
  // Call the function with your name as the argument
  greet("Shameka");

  // Define variables
let x = 21;
let y = 6;

// Initialize a results string to store all outputs
let results = "";

// Perform operations and append results to the string
results += `x = y: ${x = y} <br>`;
results += `x += y: ${x += y} <br>`;
results += `x -= y: ${x -= y} <br>`;
results += `x *= y: ${x *= y} <br>`;
results += `x /= y: ${x /= y} <br>`;
results += `x %= y: ${x %= y} <br>`;
results += `x <<= y: ${x <<= y} <br>`;
results += `x >>= y: ${x >>= y} <br>`;
results += `x >>>= y: ${x >>>= y} <br>`;
results += `x &= y: ${x &= y} <br>`;
results += `x ^ = y: ${x ^= y} <br>`;
results += `x |= y: ${x |= y} <br>`;
results += `x **= y: ${x **= y} <br>`;

// Append the results to the HTML element with id="results"
document.getElementById("results").innerHTML = results;

}); // end of DOMContentLoaded
