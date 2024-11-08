// Select DOM elements
const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');

// Add a new todo item
function addTodo() {
  const todoText = todoInput.value.trim();
  
  if (todoText !== '') {
    const todoItem = document.createElement('li');
    
    // Task text
    const taskText = document.createElement('span');
    taskText.innerText = todoText;
    taskText.addEventListener('click', () => {
      taskText.classList.toggle('completed');
    });
    
    // Delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.style.color = 'red';
    deleteButton.addEventListener('click', () => {
      todoItem.remove();
    });
    
    // Append elements
    todoItem.appendChild(taskText);
    todoItem.appendChild(deleteButton);
    todoList.appendChild(todoItem);
    
    // Clear input
    todoInput.value = '';
  }
}

// Add button click event
addButton.addEventListener('click', addTodo);

// Enable pressing Enter to add a task
todoInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addTodo();
  }
});
