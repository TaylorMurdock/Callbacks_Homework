// Section 2 Combining Datatypes
// Combine objects, arrays, and functions

// Create an object, called crayonBox, that has a property that is an array. The array should have the names of some crayons. Log one of the elements of that array.
const crayonBox = {
  colors: ["red", "blue", "green", "yellow"],
};

console.log(crayonBox.colors[1]); // logs "blue"

// Create an object bottle that has a property that is an object: cap. cap can have properties like material: 'metal' or 'plastic', color: blue or white etc. Log one of the properties of that inner object.

const bottle = {
  cap: {
    material: "metal",
    color: "blue",
  },
};

console.log(bottle.cap.material); // logs "metal"

// Create an array called receipt that has at least one object in it. The inner objects should be items that have a name and a price. Log one of the properties of that inner object.

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

// Create an array called apartmentBuilding that has an array as one of its elements, the inner array should be the names of the tenants. Log one of the elements of the inner array.

const apartmentBuilding = [
  ["Taylor", "Sloane", "Aaron"],
  "122 La Mancha",
  "Asheville, NC",
  "USA",
];

console.log(apartmentBuilding[0][1]); // logs 'Sloane'
