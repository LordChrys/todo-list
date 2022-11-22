/*
1. Enter new item
2. User clicks button to submit new item
3. New item gets added to list
4. Delete any item
5. Reset from 0


The how:
Function/Event listener to add new item to list

    - List item template
    - 

*/

const sub = document.querySelector("submit");
const list = document.querySelector("list");
let input = document.querySelector("input").value;
let items = document.querySelectorAll("list-item"); 



const addToList = newItem =>{
    let html = `
    <li class="list-item">
        ${newItem} <span class="delete"> X </span>
    </li>
    `
    list.innerHTML += html;
}

sub.addEventListener('submit', addToList());



/*
Issues:

Submit, not click for this button

*/