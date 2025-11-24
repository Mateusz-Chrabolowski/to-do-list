
const tasks = [];

const input = document.querySelector('.task-input');
const addBtn = document.querySelector('.add-btn');
const taskList = document.querySelector('.task-list');


function createTaskItem(task, index) {
  const row = document.createElement('li');
  row.className = 'task-row';

  const statusBtn = document.createElement('button');
  statusBtn.className = 'task-status';
  statusBtn.textContent = task.done ? '✓' : '';

  statusBtn.onclick = () => {
    task.done = !task.done;
    render();
  };

  const textEl = document.createElement('span');
  textEl.className = 'task-text';
  textEl.textContent = task.text;

  if (task.done) {
    textEl.classList.add('done');
  }

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-task';
  deleteBtn.textContent = '🗑';

  deleteBtn.onclick = () => {
    tasks.splice(index, 1);
    render();
  };

  row.append(statusBtn, textEl, deleteBtn);
  return row;
}

function render() {
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const item = createTaskItem(task, index);
    taskList.appendChild(item);
  });
}

addBtn.addEventListener('click', () => {
  const text = input.value.trim();
  if (!text) return;

  tasks.push({ text, done: false });
  input.value = '';

  render();
});
