/*
This project needs to

1. Add user entry to list
2. Delete any item from list
3. Clear all items from list 


The how:

1. create template for new items
2. add user input to template
3. add new template to list
4. event listner to submit
5. delete button

Function that takes user entry and appends to list
addnew  = {

}



*/

const sub = document.querySelector("#submit");
const list = document.querySelector("#list");
let input = document.querySelector("#input");
let items = document.querySelectorAll(".list-item");
const del = document.querySelector("#clear");

const addNew = item =>{
    const newItem = `
        <li class="list-item">
            ${item} <span class="delete"> X </span>
        </li>
    `;
    list.innerHTML += newItem;
}

sub.addEventListener('click', e =>{
    e.preventDefault(); 
   addNew(input.value);
   input.value = '';
});

del.addEventListener("click", e =>{
    e.preventDefault(); 
    list.innerHTML = " ";;
});


/*
Issues & Fixes:

Query selectors need to be followed by their proper CSS selectors in the brackets (".classname"), ("#idname")

Submit, not click for this button (Look into it to see difference)

Another way to add new item without creating standard li:
    let newItem = 
    `<li class="list-item">
        ${input} <span class="delete"> X </span>
    </li>
    `;

element.innerHTML is used to change or add something to an HTML document
in this case, "list" is the selected area


Creating the function to add user entry to the list:
Issues:
1. trying to add the function with the event listner 
2. linking the user input to the function. [object MouseEvent] appeared instead of the user input.
3. ALignment is all out of place


Fixes:
1. separate the function and call it in the event listner
2. 

28/11/22
"e.preventDefault" prevents page reload when submitting a form
Previous issue was with the inpout value submission. Had trouble submitting new data after teh first entry was added.

Solution to this was to take the .value from the cached variable and move it to the invoked value.

*/