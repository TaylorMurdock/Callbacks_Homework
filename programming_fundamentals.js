// Section 1: Programming Fundamentals
// Read this article on programming principles, focus on the following nine:
// Answer
// Write a ~1 sentence summary for each one
// did below

// Which ones surprise you (if any)?
// write code for the maintainer surprises me. makes sense on wy that is good practice but would not have thought of that without this source

// Which one is currently giving you the most struggle?
// personally i would say they Separation of concerns

// DRY (dont repeat yourself)
// best thing to do in coding is to avoid repeating

// KISS ((Keep it simple, stupid!))
// keep things simple because it will be better for you and others to read back on later

// Avoid creating a YAGNI (You aren’t going to need it)
// dont add something you dont need YET

// Do the simplest thing that could possibly work
// keeping it simple keeps us in the simplicity of design mode

// Don't make me think
// write your code so others and yourself can read it with no work

// Write code for the maintainer
// whatever code you write, write it like you are going to maintain it in the future

// Single responsibility principle
// a function or class should only perform a single well defined task

// Avoid premature optimization
//only make your code better once its done AND runs. then go back and add the polish

// Separation of concerns
// things should be separated depending on what they are doing and hat they are doing to

// Commenting Code
// Comment each line of this code and describe what it is doing. Feel free to run this code and add console.logs to help you figure it out:

const f = (l) => {
  //creating a function with the parameters of limit
  let es = 0, // creates the variables es, p, c, n along with their value (line 48-51)
    p = 0,
    c = 1,
    n = 0;
  while (c <= l) {
    // creating a while loop that runs up to 1
    n = c + p; // adds the current with the previous which equals to n
    [c, p] = [n, c]; //changes c to what p was and changes n to  c
    es += c % 2 === 0 ? c : 0; // if c is even then add it to es
  }
  return es; // returns the sum of even numbers up to 1
};

console.log(f(55)); // calls the function with the parameter of 55

const f2 = (limit) => {
  let evenSum = 0;
  let previous = 0;
  let current = 1;
  while (current <= limit) {
    let next = current + previous;
    previous = current;
    current = next;
    if (current % 2 === 0) {
      evenSum += current;
    }
  }
  return evenSum;
};

console.log(f2(55));

// Answer with comments:

// In keeping with one of our programming principals (write code for the maintainer): What would have been a more semantic name for this function (hint: this is a problem we had for either lab or hw and is considered a classic ) - are there any other variable names or things that would make this code easier to read and understand?

// const findFibonacciSequence= (limit) => {
// i would have named it this so whoever looks at my code would know exactly what it is doing

// If you started a new job and your project was to expand the functionality of this function by allowing a second argument and then based on that second argument, returning the sum of even or odd numbers, which code would you rather start working with f or f2?

//f2 because i can really tell what is going on with their code anywhere i look so it will be easy to go back and add whatever i need

// Finally, the 'shorter' code style doesn't use semi-colons, except for the fourth line. Remove this semi-colon! Run the code, is this semi-colon necessary?

// removing the semi-colon did not do anything to the output of that function
