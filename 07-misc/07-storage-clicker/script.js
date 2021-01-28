/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    counter = 0;

    document.getElementById("increment").addEventListener("click", function () {
        counter++;

        document.getElementById("target").innerText = counter;

        localStorage.setItem("count", counter + "");
    });

    counter = localStorage.getItem("count");

    document.getElementById("target").innerText = counter;


})();
