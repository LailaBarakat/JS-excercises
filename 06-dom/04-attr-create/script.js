/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    let Img = document.getElementById("source").getAttribute("data-image")
    newImg = new Image()
    newImg.src = Img
    document.getElementById("target").append(newImg)


    //remove original img
    let parent = document.querySelector(".material")
    let child = document.querySelector("#source")
    parent.removeChild(child)






})();
