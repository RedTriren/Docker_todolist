document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const list = document.getElementById('todo-list');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const text = input.value.trim();
        if (text !== '') {
            addTodoItem(text);
            input.value = '';
        }
    });

    function addTodoItem(text) {
        const li = document.createElement('li');
        li.textContent = text;
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '삭제';
        deleteButton.addEventListener('click', () => {list.removeChild(li);});

        li.appendChild(deleteButton);
        list.appendChild(li);
    }
});