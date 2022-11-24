/*
This project needs to

1. Add user entry to list
2. Delete any item from list
3. Clear all items from list 


The how:

1. create template for new items
2. add user input to template
3. add new template to list

Function that takes user entry and appends to list
addnew  = {

}

*/

const sub = document.querySelector("#submit");
const list = document.querySelector("#list");
let input = document.querySelector("#input").value;
let items = document.querySelectorAll(".list-item"); 


const itemTemp = (item)=>{
    let newItem = 
    `<li class="list-item">
        ${item} <span class="delete"> X </span>
    </li>
    `;
    list.innerHTML += newItem
}

sub.addEventListener('click', itemTemp(input));


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

*/