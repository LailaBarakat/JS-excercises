/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    function pad(num, size) {
        num = num.toString();
        while (num.length < size) num = "0" + num;
        return num;
    }

    function display (){

        document.getElementById("target").innerText = "+" + P1 + pad (p2, 2) + pad (p3, 2) + pad (p4, 2)
   }


    P1 = document.getElementById("part-one").innerText

    document.getElementById("part-one").addEventListener("click", function (){


        P1 = parseInt(P1);
        P1++;

        if (P1 > this.getAttribute("data-max")){
            P1 = this.getAttribute("data-min")
        }

        console.log(P1);

       // document.getElementById("target").innerText = "+" + P1

        display()

    });

    p2 = document.getElementById("part-two").innerText

    document.getElementById("part-two").addEventListener("click", function (){

        p2 = parseInt(p2);
        p2++;

        if (p2 > this.getAttribute("data-max")){
            p2 = this.getAttribute( "data-min")
        }

        // document.getElementById("target").innerText = pad (p2, 2);

        display()

    })

    p3 = document.getElementById("part-three").innerText

    document.getElementById("part-three").addEventListener("click", function (){

        p3 = parseInt(p3);
        p3++;

        if (p3 > this.getAttribute("data-max")){
            p3 = this.getAttribute( "data-min")
        }

        // document.getElementById("target").innerText = pad (p3, 2);

        display()

    })

    p4 = document.getElementById("part-four").innerText

    document.getElementById("part-four").addEventListener("click", function (){

        p4 = parseInt(p4);
        p4++;

        if (p4 > this.getAttribute("data-max")){
            p4 = this.getAttribute( "data-min")
        }

        // document.getElementById("target").innerText = pad (p4, 2);

        display()

    })


})();
