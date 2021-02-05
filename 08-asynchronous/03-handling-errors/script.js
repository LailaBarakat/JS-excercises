/* becode/javascript
 *
 * /10-asynchronous/03-handling-errors/script.js - 10.3: gestion d'erreur
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
})();

/*function CB (error,arrayOfPeople){

}

document.getElementById("run").addEventListener("click",function (){

console.log (window.lib.getPersons(CB))


                                                                  })*/
document.getElementById("run").addEventListener("click",function () {

   window.lib.getPersons((error, people) => {
       if(error){console.error(error.message)
       }else{
           console.log(people)
       }

    })

})