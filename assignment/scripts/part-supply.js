console.log('****** Part Supply *******');
// ***** REQUIRED FEATURES *********************************************
// For each question, be sure to use console.log statements to ensure that
// your code does what you expect!

// 1. Create a variable called 'partsNeeded' with a value of the number 40.
console.log('1. Create partsNeeded:');
//PSUEDO CODE--create a variable called 'partNeeded' and assign it to the number 40

let partsNeeded=40;
console.log(partsNeeded);

// 2. Create a variable called 'supplyChanges' whose value is an array containing
//    the following numbers: 3, 5, -6, 0, 7, 11.
//PSUEDO CODE--create a variable called 'supplyChanges' and assign it to an array[].

console.log('2. Create supplyChanges:');
let supplyChanges=[3,5,-6,0,7,11];
console.log(supplyChanges);

// 3. Create a variable called 'secondItem' and assign it the value of the second
//    item in the 'supplyChanges' array.
//PSUEDO CODE--create a variable called 'secondItem' & assign it to the the supplyChanges 
//array index point [1] to access the second value of the supplyChanges array.

console.log('3. Access the second value of supplyChanges:');
let secondItem= supplyChanges[1];
console.log('Second item:',secondItem);


// 4. The last value in the 'supplyChanges' array was added by mistake.
//    Remove it from the array and store it inside a new variable called 'removedItem'.
//PSUEDO CODE-- create a variable named removedItem you can both assign 
// it to the last item in 'supplyChange' and removed the last item in 'supplyChanges'
//using the method .pop()

console.log('4. Remove the last value from supplyChanges:');
let removedItem=supplyChanges.pop();
console.log('removedItem',removedItem);

// 5. A delivery of 25 more parts arrived. Add the value 25 to the end of the array
//PSUEDO CODE--Need to add the element 25 to the array supplyChanges. Use .push() method
console.log('5. Add the value 25 into supplyChanges.');
supplyChanges.push(25);
console.log(supplyChanges);

// 6. Create three new variables named 'positives', 'negatives', and
//    'zeroes' whose values are empty arrays. Then, write a for loop
//    that loops through the 'supplyChanges' array. For each iteration of
//    the loop:
//      - If the value is a positive number, push it into the 'positives' array.
//      - If the value is a negative number, push it into the 'negatives' array.
//      - If the value is a zero, push it into the 'zeroes' array.
//PSUEDO CODE--1.Create your new variables with empty list. Create an iteration
//start point (iteration) for the loop. And create different conditions
// to assign different values that are in the supplyChanges to the 3 different variables 
//empty list.
console.log('6. Looping through supplyChanges to populate arrays with positive, negative, and zero values:');

let positives=[];
let negatives=[];
let zeroes=[];
for (let i=0; i<supplyChanges.length;i++) {
  if (supplyChanges[i]>0){
    positives.push(supplyChanges[i]);
  } else if (supplyChanges[i]<0){
    negatives.push(supplyChanges[i]);
  } else{
    zeroes.push(supplyChanges[i]);
  }
}
console.log('Positives:', positives);
console.log('Negative:', negatives);
console.log('Zeroes:', zeroes)



// ***** STRETCH GOALS *********************************************
// 7. Rewrite the 'for' loop from #6 as a 'for...of' loop. Instead of 'positives',
//    'negatives', and 'zeroes', create three new arrays named 'stretchPositives',
//    'stretchNegatives', and 'stretchZeroes'. 

//PSUEDO CODE -- creating 3 new empty arrays. then using for... of loop to
//simply reassign #6 arrays.
console.log('7. Looping through supplyChanges to populate more arrays with positive, negative, and zero values:');

let stretchPositives= [];
let stretchNegatives= [];
let stretchZeroes= [];
for (let value of supplyChanges) {
  if(value>0) {
    stretchPositives.push(value);
  } else if (value<0) {
    stretchNegatives.push(value);
  } else {
    stretchZeroes.push(value);
  }
}
console.log('stretchPositives', stretchPositives);
console.log('stretchNegatives', stretchNegatives);
console.log('stretchZeroes', stretchZeroes);

// 8. Create a variable called 'totalParts' and assign it a value of 0.
//    Then, write a loop that adds each value of the 'supplyChanges'
//    array to the 'totalParts' variable.

//PSUEDO CODE -- assigning the value 0 to totalParts variable. have it so 
//each value of supplyChanges is added to total parts using a for of loop and 
//+= operator.
console.log('8. Looping through supplyChanges to calculate the sum:');
let totalParts=0;
for (let value of supplyChanges){
  totalParts+= value;
}
console.log('totalParts',totalParts);

// 9. We have a large stash of parts in our warehouse that we 
//    need to box up and get ready for shipment. There are 572
//    parts in total, and each box holds 7 parts.
//    Create two variables:
//      1. 'parts': Set its value to 572
//      2. 'boxesFilled': Set its value to 0
//    Use a 'while' loop to keep adding parts to boxes UNTIL
//    no more boxes can be filled. When the loop is finished,
//    the value of 'parts' should reflect how many parts are
//    "left over," and the value of 'boxesFilled' should reflect
//    how many boxes were filled.
//PSUEDO CODE -- Need to create variables & assign values. create a while loop that
//initilazes parts to boxes filled with the condition that 7 are added
// to a box filled and 7 is removed from the parts untill there is no 
//more that can be removed. and stating how many boxes are filled
//7 can be in a filled box. 
console.log('9. Filling boxes with a "while" loop');
let parts=572;
let boxesFilled=0;
while (parts>=7) {
  parts-=7;
  boxesFilled+=1;
}
console.log(`The Parts stil remaining: ${parts}`);
console.log(`The boxes that are filled: ${boxesFilled}`);

// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    partsNeeded: typeof partsNeeded !== 'undefined' ? partsNeeded : undefined,
    supplyChanges: typeof supplyChanges !== 'undefined' ? supplyChanges : undefined,
    secondItem: typeof secondItem !== 'undefined' ? secondItem : undefined,
    removedItem: typeof removedItem !== 'undefined' ? removedItem : undefined,
    positives: typeof positives !== 'undefined' ? positives : undefined,
    negatives: typeof negatives !== 'undefined' ? negatives : undefined,
    zeroes: typeof zeroes !== 'undefined' ? zeroes : undefined,
    stretchPositives: typeof stretchPositives !== 'undefined' ? stretchPositives : undefined,
    stretchNegatives: typeof stretchNegatives !== 'undefined' ? stretchNegatives : undefined,
    stretchZeroes: typeof stretchZeroes !== 'undefined' ? stretchZeroes : undefined,
    totalParts: typeof totalParts !== 'undefined' ? totalParts : undefined,
    parts: typeof parts !== 'undefined' ? parts : undefined,
    boxesFilled: typeof boxesFilled !== 'undefined' ? boxesFilled : undefined,
  }
} catch (e) {
  // Do nothing
}
