// Initialize the array of numbers
let numbers = [5, 3, 8, 1, 2];

// Function to add a number to the array
function addNumber(array, number) {
    array.push(number);
}

// Function to remove the first occurrence of a number from the array
function removeNumber(array, number) {
    const index = array.indexOf(number);
    if (index !== -1) {
        array.splice(index, 1);
    }
}

// Function to sort the numbers in ascending order
function sortNumbers(array) {
    return array.slice().sort((a, b) => a - b);
}

// Function to calculate the sum of the numbers in the array
function calculateSum(array) {
    return array.reduce((acc, cur) => acc + cur, 0);
}

// Function to calculate the average of the numbers in the array
function calculateAverage(array) {
    return calculateSum(array) / array.length;
}

// Demonstration of functions
console.log("Original array:", numbers);

addNumber(numbers, 4);
console.log("After adding 4:", numbers);

removeNumber(numbers, 3);
console.log("After removing 3:", numbers);

const sortedNumbers = sortNumbers(numbers);
console.log("Sorted array:", sortedNumbers);

const sumOfNumbers = calculateSum(numbers);
console.log("Sum of numbers:", sumOfNumbers);

const averageOfNumbers = calculateAverage(numbers);
console.log("Average of numbers:", averageOfNumbers);
