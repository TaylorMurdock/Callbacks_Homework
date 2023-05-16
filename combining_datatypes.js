// Section 2 Combining Datatypes
// Combine objects, arrays, and functions

// Create an object, called crayonBox, that has a property that is an array. The array should have the names of some crayons. Log one of the elements of that array.
{
  const crayonBox = {
    colors: ["red", "blue", "green", "yellow"],
  };

  console.log(crayonBox.colors[1]); // logs "blue"
}
// Create an object bottle that has a property that is an object: cap. cap can have properties like material: 'metal' or 'plastic', color: blue or white etc. Log one of the properties of that inner object.
{
  const bottle = {
    cap: {
      material: "metal",
      color: "blue",
    },
  };

  console.log(bottle.cap.material); // logs "metal"
}
// Create an array called receipt that has at least one object in it. The inner objects should be items that have a name and a price. Log one of the properties of that inner object.
{
  const receipt = [
    {
      name: "apple",
      price: 1.99,
    },
    {
      name: "banana",
      price: 0.99,
    },
  ];

  console.log(receipt[0].price); // logs 1.99
}
// Create an array called apartmentBuilding that has an array as one of its elements, the inner array should be the names of the tenants. Log one of the elements of the inner array.
{
  const apartmentBuilding = [
    ["Taylor", "Sloane", "Aaron"],
    "122 La Mancha",
    "Asheville, NC",
    "USA",
  ];

  console.log(apartmentBuilding[0][1]); // logs 'Sloane'
}
// Combine objects, arrays, and functions more than one level deep

// Create a function knit that returns an object that has the following kinds of properties item: scarf, size : 6ft etc. Log a value of that object (hint: call the function and then call a property on the return value).
{
  function knit() {
    return {
      item: "scarf",
      size: "6ft",
      colors: ["red", "green", "blue"],
      dimensions: {
        width: "10 inches",
        length: "6 feet",
      },
      description: function () {
        return `This ${this.item} is ${
          this.size
        } long and has colors ${this.colors.join(", ")}. It measures ${
          this.dimensions.width
        } wide by ${this.dimensions.length} long.`;
      },
    };
  }

  const myScarf = knit();
  console.log(myScarf.description());
}
// Create a function crayonSelector that returns an object that has an array (you can reuse your crayonBox object). Log one of the elements of that array.
{
  const crayonBox = {
    colors: ["red", "blue", "green", "yellow"],
  };

  function crayonSelector() {
    return {
      crayonBox: crayonBox.colors,
    };
  }

  const selectedCrayons = crayonSelector();
  console.log(selectedCrayons.crayonBox[2]); // logs 'green'
}
// Create a function powerButton that returns a function called options - options should console.log a simple message like select a song. Call that inner function
{
  function powerButton() {
    return function options() {
      console.log("Select a song.");
    };
  }

  const innerFunction = powerButton();
  innerFunction();
}
// Model a Vending Machine Model a vending machine
// a vending machine is an object
// it has an array of snacks (make 3 snacks)
// snacks are objects that have a name and a price
// a vending machine has a function vend that allows user to enter the array position (a number) of the snack and then that snack will be returned
// Be able to call vendingMachine.vend() with a valid integer to return a snack
{
  // Define the Snack class
  class Snack {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  }

  // Define the VendingMachine class
  class VendingMachine {
    constructor() {
      this.snacks = [
        new Snack("Chips", 1.5),
        new Snack("Candy", 1),
        new Snack("Soda", 2),
      ];
    }

    vend(position) {
      if (position >= 0 && position < this.snacks.length) {
        return this.snacks[position];
      } else {
        return "Invalid position. Please select a valid position.";
      }
    }
  }

  // Create an instance of the VendingMachine class
  const vendingMachine = new VendingMachine();

  // Call the vend() method with a valid position
  const selectedSnack = vendingMachine.vend(1);
  console.log(selectedSnack); // Output: Snack { name: 'Candy', price: 1 }

  // Call the vend() method with an invalid position
  const invalidSnack = vendingMachine.vend(5);
  console.log(invalidSnack); // Output: Invalid position. Please select a valid position.
}
{
  // Callbacks
  // Make a function add that takes two arguments (numbers) and sums them together
  function add(num1, num2) {
    return num1 + num2;
  }
  // Make a function subtract that takes two arguments (numbers) and subtracts them
  function subtract(num1, num2) {
    return num1 - num2;
  }
  // Make a function multiply that takes two arguments and multiplies them
  function multiply(num1, num2) {
    return num1 * num2;
  }
  // Make a function divide that takes two arguments and divides them
  function divide(num1, num2) {
    return num1 / num2;
  }
  // Make a function calculate that takes three arguments. Assume the two arguments are a number ie num1, num2 and a function called operates (a callback).
  // Make it so that when calculate is invoked, the callback "operates" on the numbers and returns the value.
  function calculate(num1, num2, operates) {
    return operates(num1, num2);
  }
  // Call calculate 4 times, each time using one of the operation functions you wrote
  // Calling calculate with add operation
  const sum = calculate(5, 3, add);
  console.log(sum); // Output: 8

  // Calling calculate with subtract operation
  const difference = calculate(10, 4, subtract);
  console.log(difference); // Output: 6

  // Calling calculate with multiply operation
  const product = calculate(2, 6, multiply);
  console.log(product); // Output: 12

  // Calling calculate with divide operation
  const quotient = calculate(20, 5, divide);
  console.log(quotient); // Output: 4
}
// Function definition placement

// Clean up this code, so that it works and has function definitions in the correct place

// bar();
// const bar = () => {
//     console.log('bar here');
// }
// foo();

// const foo = () => {
//     console.log('foo here');
// }

const bar = () => {
  console.log("bar here");
};

const foo = () => {
  console.log("foo here");
};

bar();
foo();

{
  // Error reading

  // What is meant by the error(s) this produces?

  // foo();

  // const foo ()=>{
  //     console.log('hi');
  // }

  // error occurs because there is a syntax mistake in the function definition of "foo". The correct code is below
  const foo = () => {
    console.log("hi");
  };

  foo();
}

// Section 3 Array Methods with Callbacks
// A few array methods use callbacks. For example .map - .map takes each element of an array and does something to it and returns a new arrays.

// But what should it do? Multiply everything by 5? Capitalize everything? If .map had a hard-coded thing it always did with an array, it wouldn't be very flexible.

// By allowing a callback to determine what happens to each array element we get a lot of flexibility and we can do some really powerful things.
// The first question is for the numbers array. The second question is for the words array.
// You don't have to write an answer to the thought questions.

// Every
// Determine if every number is greater than or equal to 0
// determine if every word shorter than 8 characters
{
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
  const result = nums.every((num) => num >= 0);
  console.log(result); // Output: false
}
{
  const panagram = [
    "The",
    "quick",
    "brown",
    "fox",
    "jumps",
    "over",
    "the",
    "lazy",
    "dog",
  ];
  const result = panagram.every((word) => word.length < 8);
  console.log(result); // Output: true
}
// Filter
// filter the array for numbers less than 4
// filter words that have an even length
{
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
  const filteredNums = nums.filter((num) => num < 4);
  console.log(filteredNums); // Output: [1, 2, 3, 0]
}
{
  const panagram = [
    "The",
    "quick",
    "brown",
    "fox",
    "jumps",
    "over",
    "the",
    "lazy",
    "dog",
  ];
  const filteredWords = panagram.filter((word) => word.length % 2 === 0);
  console.log(filteredWords); // Output: ['over', 'lazy']
}
// Find
// Find the first value divisible by 5
// find the first word that is longer than 5 characters
{
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
  const foundNum = nums.find((num) => num % 5 === 0);
  console.log(foundNum); // Output: 5
}
{
  const panagram = [
    "The",
    "quick",
    "brown",
    "fox",
    "jumps",
    "over",
    "the",
    "lazy",
    "dog",
  ];
  const foundWord = panagram.find((word) => word.length > 5);
  console.log(foundWord); // Output: 'quick'
}
// Find Index
// find the index of the first number that is divisible by 3
// find the index of the first word that is less than 2 characters long
{
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
  const indexDivisibleBy3 = nums.findIndex((num) => num % 3 === 0);
  console.log(indexDivisibleBy3); // Output: 2
}
{
  const panagram = [
    "The",
    "quick",
    "brown",
    "fox",
    "jumps",
    "over",
    "the",
    "lazy",
    "dog",
  ];
  const indexLessThan2Chars = panagram.findIndex((word) => word.length < 2);
  console.log(indexLessThan2Chars); // Output: -1 (not found)
}
// For Each
// console.log each value of the nums array multiplied by 3
// console.log each word with an exclamation point at the end of it
{
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
  nums.forEach((num) => console.log(num * 3));
}
{
  const panagram = [
    "The",
    "quick",
    "brown",
    "fox",
    "jumps",
    "over",
    "the",
    "lazy",
    "dog",
  ];
  panagram.forEach((word) => console.log(word + "!"));
}
// Thought Questions
// What happened to the original array?
// The original array remains unchanged. The forEach() method does not modify the original array.
// Can you store the values from a forEach method in a new array?
// No, the forEach() method does not return a new array. It is used for performing actions on each element of an array but does not produce a new array.

// Map
// make a new array of each number multiplied by 100
// make a new array of all the words in all uppercase
{
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
  const multipliedBy100 = nums.map((num) => num * 100);
  console.log(multipliedBy100); // Output: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 0]
}
{
  const panagram = [
    "The",
    "quick",
    "brown",
    "fox",
    "jumps",
    "over",
    "the",
    "lazy",
    "dog",
  ];
  const uppercaseWords = panagram.map((word) => word.toUpperCase());
  console.log(uppercaseWords); // Output: ['THE', 'QUICK', 'BROWN', 'FOX', 'JUMPS', 'OVER', 'THE', 'LAZY', 'DOG']
}
// Thought Questions
// What happened to the original array?
// The original array remains unchanged. The map() method creates a new array with the modified values while leaving the original array intact.
// Can you store the values from a map method in a new array?
// Some
// Yes, the values returned by the map() method can be stored in a new array, as demonstrated in the examples above.

// Find out if some numbers are divisible by 7
// Find out if some words have the letter a in them
{
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
  const divisibleBy7 = nums.some((num) => num % 7 === 0);
  console.log(divisibleBy7); // Output: true (since 7 is divisible by 7)
}
{
  const panagram = [
    "The",
    "quick",
    "brown",
    "fox",
    "jumps",
    "over",
    "the",
    "lazy",
    "dog",
  ];
  const hasLetterA = panagram.some((word) => word.includes("a"));
  console.log(hasLetterA); // Output: true (since 'lazy' and 'dog' have the letter 'a')
}
