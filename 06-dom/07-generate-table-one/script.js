/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    //create a table
    let table = document.createElement("TABLE")       // <table></table>

    //append the table to Id "target"
    document.getElementById("target").append(table)



    let row
    for(let i = 0; i<10; i++){                              //loop 10 times
        let cell = document.createElement("td")   //create a cell  <td></td>
        row = document.createElement("tr")       //create a row <tr></tr>
        row.append(cell)                                //append cell to row <tr><td></td></tr>
        table.append(row)                              //append row (with cell) to table <table><tr><td></td></tr></table>


    }


})();
