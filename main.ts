//🚀 Day 26 Challenge: Start Coding! 🚀

/*Question 76: Function Parameters and Return Values: 
Create a function that takes two numbers as parameters, adds them together,
and returns the result. Show how you can call this function and log the result.*/

function addNumbers(num1: number, num2: number): number {
return num1 + num2;
}

// Calling the function and logging the result
const result: number = addNumbers(5, 3);
console.log("The result of adding 5 and 3 is:", result);

/*Question 77: Default Parameters: Write a function that greets a user.
It should take the user's name as a parameter and say hello. 
If no name is given, it should greet an anonymous user. */

function greetUser(name: string = "anonymous"): void {
console.log(`Hello, ${name}!`);
}

// Calling the function with a name
greetUser("John");

// Calling the function without a name (uses default parameter)
greetUser();

/*Question 78: Function Expressions vs. Function Declarations: Compare function expressions
and declarations by creating one of each that performs the same task, such as squaring a number.*/

// Function Expression
const squareNumberExpression = function(num) {
    return num * num;
};

// Calling the function
console.log(squareNumberExpression(5)); // Output: 25
