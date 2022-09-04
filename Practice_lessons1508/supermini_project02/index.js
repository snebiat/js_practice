/** @param {string} fname */
function getNumberOfChars(fname) {
  // return the number of characters in: name
  return fname.length;
}

/** @param {string} fname */
function getLower(fname) {
  // return name all in lower case (example: "ABC" becomes "abc")
  return fname.toLowerCase();
}

/** @param {string} fname */
function getUpper(fname) {
  // return name all in upper case (example: "abc" becomes "ABC")
  return fname.toUpperCase();
}

/* Do not touch below this line  */

let answer1 = document.querySelector("#answer1");
let answer2 = document.querySelector("#answer2");
let answer3 = document.querySelector("#answer3");

let name = document.querySelector("#your-name");

name.addEventListener("keyup", () => {
  answer1.textContent = getNumberOfChars(name.value);
  answer2.textContent = getLower(name.value);
  answer3.textContent = getUpper(name.value);
});
