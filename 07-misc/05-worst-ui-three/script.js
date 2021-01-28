/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    function generateRandomInteger(min, max) {
        return Math.floor(min + Math.random()*(max + 1 - min))
    }

    function pad(num, size) {
        num = num.toString();
        while (num.length < size) num = "0" + num;
        return num;
    }

    function display(){
        document.getElementById("target").innerText = "+" + p1 + pad (p2, 2) + pad (p3, 2) + pad (p4, 2)

    }

    //part-one
    let p1 = document.getElementById("part-one").value
    document.getElementById("fix-part-one").addEventListener("click", function (){

        let min1 = parseInt(document.getElementById("part-one").getAttribute("data-min"));
        let max1 = parseInt(document.getElementById("part-one").getAttribute("data-max"));

        p1 = generateRandomInteger(min1,max1)

        //document.getElementById("target").innerText = "+" + p1
        display()

    })

    //part-two
    let p2 = document.getElementById("part-two").value
    document.getElementById("fix-part-two").addEventListener("click", function (){

        let min2 = parseInt(document.getElementById("part-two").getAttribute("data-min"));
        let max2 = parseInt(document.getElementById("part-two").getAttribute("data-max"));

        p2 = generateRandomInteger(min2,max2)

        //document.getElementById("target").innerText = pad (p2, 2)
        display()

    })

    //part-three
    let p3 = document.getElementById("part-three").value
    document.getElementById("fix-part-three").addEventListener("click", function (){

        let min3 = parseInt(document.getElementById("part-three").getAttribute("data-min"));
        let max3 = parseInt(document.getElementById("part-three").getAttribute("data-max"));

        p3 = generateRandomInteger(min3,max3)
        //document.getElementById("target").innerText = pad (p3, 2)
        display()

    })

    //part-four
    let p4 = document.getElementById("part-four").value
    document.getElementById("fix-part-four").addEventListener("click", function (){

        let min4 = parseInt(document.getElementById("part-four").getAttribute("data-min"));
        let max4 = parseInt(document.getElementById("part-four").getAttribute("data-max"));

        p4 = generateRandomInteger(min4,max4)
        //document.getElementById("target").innerText = pad (p4, 2)
        display()

    })



})();
