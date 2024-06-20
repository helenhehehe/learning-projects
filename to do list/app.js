/* FUNCTIONLITY LIST:
1. ADD TODOS
2. DELETE TODOS
3. SEARCH
*/

const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

//ADD TODOS: take todo and append new html to innerHTML
const generateTemplate = (todo) => {

    const html =`
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${todo}</span>
                <i class="far fa-trash-alt delete"></i>
            </li>
    `;

    list.innerHTML += html;

};

//ADD TODOS: listen for 'submit', add input (generateTemplate) to form
addForm.addEventListener('submit', e=> {
    e.preventDefault();

    const todo = addForm.add.value.trim(); //.trim() removes white space before and after

    if(todo.length){
    generateTemplate(todo);
    addForm.reset(); //clears the typing bar
    }
    else {
        alert('please type something before entering');
    };

});

//DELETE TODOS
list.addEventListener('click', e => {
    
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    };
});

//SEARCH
const filterTodos = (term) => {

    Array.from(list.children) //turn into array: Array.from(list.children)
    .filter((todo) => !todo.textContent.includes(term))
    .forEach((todo) => todo.classList.add('filtered'))

    Array.from(list.children) //turn into array: Array.from(list.children)
    .filter((todo) => todo.textContent.includes(term))
    .forEach((todo) => todo.classList.remove('filtered')) 
    
};

search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
    //search.reset(); not working
});
