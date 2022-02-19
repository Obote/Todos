const addTodo = document.getElementById('addTodo');
const todos = document.getElementById('todos');
export default class ToDoList {
  constructor(description, index, completed = false) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }

  displaytdlist() {
    this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    if (todos.querySelectorAll('li')) {
      Array.from(todos.querySelectorAll('li')).forEach((task) => {
        todos.removeChild(task);
      });
    }
    this.index = 0;
    this.tasks.forEach((task) => {
      // Create li tag
      const li = document.createElement('li');
      li.className = 'task';
      this.index += 1;
      task.index = this.index;
      li.setAttribute('id', `${this.index}`);

      // Create Checkbox
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.className = 'checkbox';

      // Create Task Description
      const inputText = document.createElement('input');
      inputText.setAttribute('type', 'text');
      inputText.className = 'description';
      inputText.value = task.description;
      inputText.addEventListener('focus', () => {
        li.classList.toggle('description-focus');
      });
      inputText.addEventListener('blur', () => {
        li.classList.toggle('description-focus');
      });
      inputText.addEventListener('change', () => {
        this.modifyTask(inputText);
      });

      // Create Delete Button
      const delIcon = new Image();
      delIcon.src = deleteIcon;
      delIcon.setAttribute('id', 'deleteTask');
      delIcon.classList = 'deleteTask';
      delIcon.setAttribute('alt', 'delete-icon');
      delIcon.addEventListener('click', () => {
        this.removeTask(task.index);
      });

      // Append everything
      li.appendChild(checkbox);
      li.appendChild(inputText);
      li.appendChild(delIcon);
      todos.appendChild(li);
    });
  }

  addTask() {
    this.tasks.push(new ToDoList(this.description = addTodo.value));
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    this.displaytdlist();
    addTodo.value = '';
  }

  removeTask(n) {
    this.tasks.forEach((e, i, lib) => {
      if (e.index === n) {
        lib.splice(i, 1);
      }
    });
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    this.displaytdlist();
  }

  modifyTask(taskInput) {
    const taskChanged = taskInput.parentElement;
    const taskList = taskChanged.parentElement.children;

    for (let i = 0; i < taskList.length; i += 1) {
      if (taskList[i] === taskChanged) {
        this.tasks[i].description = taskInput.value;
      }
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  }
}