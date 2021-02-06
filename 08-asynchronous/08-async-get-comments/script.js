/* becode/javascript
 *
 * /10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    document.getElementById("run").addEventListener("click", function (){
        async function GetArticles(){
            let articlesPromise = window.lib.getPosts()
            let articles = await articlesPromise
            for (let article of articles){
                let commentsPromise = window.lib.getComments(article.id)
                let comment = await commentsPromise
                article.comments = comment
                console.log(article)
            }
        }

        GetArticles()
    })
})();
