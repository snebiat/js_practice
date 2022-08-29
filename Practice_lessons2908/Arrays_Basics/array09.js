'use strict';

/**
Complete the function sumGrades such that it returns the sum of all the grades
it receives as a parameter.

/**
 * @param {number[]} grades
 */
let sum;
function sumGrades(grades) {
    sum=0;
    for (let i =0; i<grades.length;i++)
    {
        sum += grades[i];
    }
return(sum);
}

// Sample usage - do not modify
console.log(sumGrades([15, 5, 10])); // 30
console.log(sumGrades([12, 10, 13, 19])); // 54
