/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    document.getElementById('pass-one').onkeyup= function(e){
        let passLength = this.value.length

        let regex = /[0-9].*[0-9]/

        if(passLength <= "8" && regex.test (this.value)){
            document.getElementById("validity").innerText = "ok"

        }
    }

})();
