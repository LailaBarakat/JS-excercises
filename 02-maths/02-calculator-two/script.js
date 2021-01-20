/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value


    var performOperation = function(shawerma) {

        let op1=parseInt(document.getElementById("op-one").value);
        console.log(op1)
        let op2=parseInt(document.getElementById("op-two").value);
        console.log(op2)

        // perform the operation
        switch (shawerma){
            case "addition":
                alert(op1+op2)
                break;

            case "substraction":
                alert(op1-op2)
                break;

            case "multiplication":
                alert(op1*op2)
                break;

            case "division":
                alert(op1/op2)
                break;
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach(function($btn) {
        $btn.addEventListener("click", function() {
            performOperation($btn.id);
        });
    });
})();
