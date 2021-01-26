/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    let table = document.createElement("TABLE")
    document.getElementById("target").append(table)

    for(i=1; i<=10 ; i++){
        let row = document.createElement("tr")
        for(x=1; x<=10; x++){
        let cell = document.createElement("td")
            cell.innerText=i*x
        row.append(cell)
        table.append(row)
    }}
})();
