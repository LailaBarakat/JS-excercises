/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    let x = Math.floor(Math.random() * 100) + 1;

    let guess

    counter = 1;

    do {

        guess = prompt("Guess the number");

        if (guess < x) {
            alert("Higher");
            counter ++


        } else if (guess > x) {
            alert("Lower");
            counter ++


        } else {
            alert("That's it! you needed " + counter + " guesses");

        }
    } while (guess != x);
})();
