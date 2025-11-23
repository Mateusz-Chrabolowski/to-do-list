const tasks = [];

const input = document.querySelector('.task-input');
const addBtn = document.querySelector('.add-btn');
const taskList = document.querySelector('.task-list');

const render = () => {
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const row = document.createElement('li');
    row.className = 'task-row';

    const status = document.createElement('div');
    status.className = 'task-status';

    const text = document.createElement('span');
    text.className = 'task-text';
    text.textContent = task;

    const del = document.createElement('button');
    del.className = 'delete-task';
    del.textContent = '🗑️';

    del.onclick = () => {
      tasks.splice(index, 1);
      render();
    };

    row.appendChild(status);
    row.appendChild(text);
    row.appendChild(del);

    taskList.appendChild(row);
  });
};

addBtn.addEventListener('click', () => {
  const value = input.value.trim();
  if (!value) return;

  tasks.push(value);
  input.value = '';
  render();
});
