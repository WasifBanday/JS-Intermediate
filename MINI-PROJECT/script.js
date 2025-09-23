// const addbtn = document.getElementById('add-btn');
// const todoinput = document.getElementById('todo-input');
// const todoitemscontiner = document.getElementById('todo-items-container');

// addbtn.addEventListener('click', () => { // eik btn k upar listen karo
//     const value = todoinput.value; // Jo b user ne type ia uski value ko lo 
//     const li = document.createElement('li'); // eik naya <li> element banao
//     li.innerText = value; // uske andrr eis value ko daldo
//     todoitemscontiner.appendChild(li); // aur hamarey container k andrr append kardo (dekhado)
//     todoinput.value = ''; // aur todoinput ki value ko khali kardo

// });


const addbtn = document.getElementById('add-btn');
const todoinput = document.getElementById('todo-input');
const todoitemscontiner = document.getElementById('todo-items-container');

addbtn.addEventListener('click', () => {
    const value = todoinput.value;
    const li = document.createElement('li');
    li.innerText = value;
    const delBtn = document.createElement('button');
    delBtn.innerHTML = 'X';
    li.appendChild(delBtn)
    todoitemscontiner.appendChild(li);
    todoinput.value = '';

});