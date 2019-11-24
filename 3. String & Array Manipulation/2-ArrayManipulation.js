/*
  *
* using array methods, increase the value of the last item of the array
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/

const my_first_array = [50, 20, 12];

const increaseValueOfLastItem = function (array) {
  // Get the value of the last item and increase one
  const lastItemValue = array.pop() + 1;
  // Remove the last item of the array
  array.push(lastItemValue);
  // Add in the newly increased number into array

  return array;
};

console.log(increaseValueOfLastItem(my_first_array));