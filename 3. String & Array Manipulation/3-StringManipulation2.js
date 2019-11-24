
/*
  *
* Use string methods split(), slice(), toLowerCase() and toUpperCase() 
* and array methods join()
*  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
*  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/

const name = "mR AlbERt eINstEiN";

function nameFormatter(oldName) {
  /* 
    Split the string by space
    Slice the first character and make it uppercase
    Slice the reset of the characters and make it lowercase
    Join the splitted array with space to get the final result
    Final result should be "Albert Einstein"                
    */

  const splitted_array = oldName.split(" ");
  const modified_array = splitted_array.map(x => wordFormatter(x))
  return modified_array.join(" ");
}

function wordFormatter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

console.log(nameFormatter(name));