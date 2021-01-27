/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    let txt = document.getElementById("target").innerText.split((""));
    console.log(txt);
    element = document.getElementById("target"); //div
    element.innerText = "";
    let i = 0;
    let rand = Math.round(Math.random() * 10);
    setInterval(function (){
        if (i<txt.length){
            element.innerText=element.innerText + txt[i];
            i++
        }else {
            clearInterval();
        }
    },rand*200);


})();
