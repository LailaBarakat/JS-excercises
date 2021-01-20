/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {

        // your code here
        let numbers=document.getElementById('numbers').value; // "2, 4, 14, .."

        // convert string to list of strings (split())
        let numberArray=numbers.split(', ')  // ["2", "4", "14", ..]

        // and convert each to a Number (map(Number))
        numberArray = numberArray.map(Number); // [2, 4, 14, ...]

        // sort the array not alphabetically, but numerically by adding that compare function
        numberArray.sort(function(a, b) {
            return a - b;
        })

        alert(numberArray);
    });

})();
