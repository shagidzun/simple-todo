const todoList = [];
const addButton = document.querySelector('.add');
const clearBtn = document.querySelector('.clear');
const output = document.querySelector('.output');
const todoInput = document.querySelector('.todoInput');
const todoDate = document.querySelector('.todo-date');

renderList();
setMinDate();

function addTodo() {
  if (todoInput.value) {
    todoList.push({
      name: todoInput.value,
      date: todoDate.value
    });
    todoInput.value = '';
    todoDate.value = '';
    console.log(todoList);
    renderList();
  }
};

function clearTodoList() {
  todoList.length = 0;
  output.innerHTML = '';
  console.log(todoList);
};

function renderList() {
  output.innerHTML = '';

  todoList.forEach((todo, i) => {
    const todoItem = document.createElement('div');
    const todoDate = document.createElement('div');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deleteTodoItem(i));
    todoItem.textContent = `${todo.name}`;
    todoDate.textContent = `${todo.date}`;
    output.appendChild(todoItem);
    output.appendChild(todoDate);
    output.appendChild(deleteButton);
  })
};

function deleteTodoItem(i) {
  todoList.splice(i, 1);
  renderList();
};

function setMinDate() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const day = currentDate.getDate().toString().padStart(2, '0');
  const minDate = `${year}-${month}-${day}`;
  todoDate.setAttribute('min', minDate);
}

addButton.addEventListener('click', addTodo);
todoInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addTodo();
  }
});

clearBtn.addEventListener('click', clearTodoList);