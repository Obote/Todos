import './style.css';

const myToDo = document.getElementById('todos');

const todoList = [{
  description: 'wash the dishes',
  completed: false,
  index: 1,
}, {
  description: 'complete to Do list project',
  completed: true,
  index: 2,
},
{
  description: 'serve food',
  completed: true,
  index: 2,
},
];

const addContent = () => {
  for (let i = 0; i < todoList.length; i += 1) {
    const todoItem = document.createElement('li');
    todoItem.innerHTML = `
      <div>
      <input type="checkbox" id="todo" name="todo">
      <label for="todo">${todoList[i].description}</label>
      <i class="fas fa-ellipsis-v"></i>
      </div>
      `;
    todoItem.classList.add('todo');
    myToDo.appendChild(todoItem);
  }
};
addContent();