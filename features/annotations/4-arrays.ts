// Typed Arrays -> Arrays where each element is some consistent type of value

const carMakers = ['ford', 'toyota', 'chevy'];
const carMakers2: string[] = [];

const dates = [new Date(), new Date()];

const carsByMake = [['f150'], ['corolla'], ['camaro']];
const carsByMake2: string[][] = [];

/*

Why Typed Arrays?
-TS can do type inference when extracting values from an array
-TS can prevent us from adding incompatible values to the array
-We can get help with 'map', 'forEach', 'reduce' functions
-Flexible - arrays can still contain multiple different types

*/

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100);

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDate: (Date | string)[] = [];
importantDate.push('2030-10-10');
importantDate.push(new Date());

/*

Where to use typed arrays?
-Any time we need to represent a collection of records with some arbitrary sort order

*/
