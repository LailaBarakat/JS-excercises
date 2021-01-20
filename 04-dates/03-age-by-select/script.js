/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById("run").addEventListener("click", function() {
       let A = document.getElementById('dob-day').value;
       let B = document.getElementById('dob-month').value;
       let C = document.getElementById('dob-year').value;

       let newDate = new Date(C, B, A);

        console.log(calculate_age(newDate));
        alert(calculate_age(newDate));
        ;

    });

    function calculate_age(dob) {
        let diff_ms = Date.now() - dob.getTime();
        let age_dt = new Date(diff_ms);

        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }

})();
