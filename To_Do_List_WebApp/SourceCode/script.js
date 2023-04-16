// Developer's Name : Rishab . H

let docTitle = document.title ;

window.addEventListener("blur", () => {
    document.title = "Thanks For Visiting - Rishab" ;
}) ;

window.addEventListener("focus", () => {
    document.title = docTitle ;
}) ;

let addToDoButton = document.getElementById('addItem') ;
let toDoContainer = document.getElementById('ToDoContainer') ;
let inputField = document.getElementById('inputField') ;

addToDoButton.addEventListener("click", function ()
    {
        var paragraph = document.createElement('p') ;
        paragraph.classList.add('paragraph-styling') ;
        paragraph.innerText = inputField.value ;
        toDoContainer.appendChild(paragraph) ;
        inputField.value = "" ;

        paragraph.addEventListener("click", function() 
        {
            paragraph.style.textDecoration = "line-through" ;
        }) ;

        paragraph.addEventListener("dblclick", function() 
        {
            toDoContainer.removeChild(paragraph) ;
        }) ;

    }
 ) ;