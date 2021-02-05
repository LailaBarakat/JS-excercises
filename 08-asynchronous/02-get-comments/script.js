/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    //window.lib.getComments(articleId, callback)

    /*function CB (error, arrayOfArticles){
        //console.log(error)
        //console.log(arrayOfArticles)
        arrayOfArticles.forEach(function (article){
            window.lib.getComments(article.id, CB2)
        })
    }

    function CB2 (error, arrayOfComments){
    console.log(arrayOfComments)

    }

   document.getElementById("run").addEventListener("click",function () {

       window.lib.getPosts(CB)

   });*/

    document.getElementById("run").addEventListener("click",function () {

        window.lib.getPosts((error, articles) => {                               //getPosts will call anonymous function that expects two parameters (error, articles)

            articles.forEach((article) => {                                     //go over each article and do the following
                window.lib.getComments(article.id, (error, comments) => {      //getComments will call another anonymous function that expects two parameters (errors, comments)
                                                                                  //getComments must receive an article id and a callback as parameters

                    console.log(error, comments)
                   /* let Att = article.createAttribute("comments")
                    Att.value = comments
                    console.log(Att)*/

                    article.comments = comments

                })
                console.log("art:", article)

            });


        })
    })

})();
