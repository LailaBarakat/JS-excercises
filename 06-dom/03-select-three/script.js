/* becode/javascript
 *
 * /06-dom/03-select-three/script.js - 6.3: sélection multiple par sélecteur css
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code

    let array = document.getElementsByClassName("target")
    //array.forEach (function (element) {
        //element.innerText = "owned"

    let element

        for (let element of array){
            element.innerText = "owned"
        }

})();
