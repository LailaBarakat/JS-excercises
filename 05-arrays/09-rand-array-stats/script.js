/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    //display the numbers from the list into the table
function display (table){
    for(let i=0; i<table.length; i++){
        document.getElementById("n-"+(i+1)).innerText=table[i]
    }

}

function smallest (table){
    let smallest = Math.min.apply(Math, table)
        document.getElementById("min").innerText= smallest
}

function biggest (table){
    let max = Math.max.apply(Math, table)
    document.getElementById("max").innerText= max
}

function sum (table){
    let sum = table.reduce(function (a,b) {
       return  a + b}, 0)
    document.getElementById("sum").innerText= sum
}

function avr (table){
    let avr = table.reduce((a,b) => a + b, 0) / table.length
    document.getElementById("average").innerText = avr
}

document.getElementById("run").addEventListener("click", function (){

    // create a list
    let list = []

     for(let i=0; i<10; i++){                                      // loop 10 times
         let x = Math.floor(Math.random() * 100) + 1            // random integer from 1 to 100
         list.push(x)                                             // add to list/ Array
     }
     display (list)
     smallest (list)
     biggest (list)
     sum (list)
     avr (list)


})

})();
