/* becode/javascript
 *
 * /07-misc/01
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    let text = document.querySelector('#target')
    text.innerHTML = text.textContent.replace (/\S/g, "<span class='letter'>$&</span>");

    console.log(text.innerHTML)


    let list = document.querySelectorAll(".letter")
    console.log(list)

    counter = 0

    for (i=0; i<list.length; i++){

        switch (counter){
            case 0 : case 8:
                list[i].style.fontSize = "10px";
                break;
            case 1 : case 7:
                list[i].style.fontSize = "15px";
                break;
            case 2 : case 6:
                list[i].style.fontSize = "20px";
                break;
            case 3 : case 5:
                list[i].style.fontSize = "25px";
                break;
            case 4 :
                list[i].style.fontSize = "30px";
                break;
        }
        counter ++
        if (counter > 8){
            counter = 0
        }
    }









})();
