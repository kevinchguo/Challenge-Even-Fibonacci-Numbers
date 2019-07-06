/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
function _sumFibs(maxFibValue) {
  let sum = 0;
  let startNum = 0;
  let increment = 0;
  let fibArray = [0, 1]; //0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89
  //     ^1 ^1 ^2 ^3 ^5  ^8 ^13  ^21  ^34
  // do your work here
  do {
    startNum = fibArray[increment] + fibArray[increment + 1]; // 0 + 1
    fibArray.push(startNum); // push new answer into fibArray
    if (fibArray[increment] % 2 === 0) { //check if fibArray[i] is an even number
      let evenNum = fibArray[increment] //if even number 0 + an even num and keep updating sum
      sum = sum + evenNum;
    }
    increment++ //increment by 1 to loop through the next arr index
    startNum += fibArray[increment] //update the number that its being added by
  } while (fibArray[increment] <= maxFibValue); //stop when the given param equals the highest num in the fib arry
  return sum;
}

// bonus round
function _highestFibonacciNumber(maxFibValue) {
  let highest = 0;
  let startNum = 0;
  let fibArray = [0, 1];

  //define your base case, validate your input

  startNum = 0;
  let increment = 0;
  let fibArray = [0, 1]; //0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89
  //     ^1 ^1 ^2 ^3 ^5  ^8 ^13  ^21  ^34
  // do your work here
  do {
    startNum = fibArray[increment] + fibArray[increment + 1] // 0 + 1
    fibArray.push(startNum) // push new answer into fibArray
    increment++ //increment by 1 to loop through the next arr index
    startNum += fibArray[increment] //update the number that its being added by
  } while (fibArray[increment] <= maxFibValue); //stop when the given

  //do your work here

  return highest;
};

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs: _sumFibs,
  highestFibonacciNumber: _highestFibonacciNumber
};
