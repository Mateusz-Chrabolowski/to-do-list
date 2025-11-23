const tasks = [];

const input = document.querySelector('.task-input');
const addBtn = document.querySelector('.add-btn');
const taskList = document.querySelector('.task-list');

const render = () => {
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const row = document.createElement('li');
    row.className = 'task-row';

    const status = document.createElement('button');
    status.className = 'task-status';
    status.textContent = task.done ? '✅' : '';

    const text = document.createElement('span');
    text.className = 'task-text';
    text.textContent = task.text;

    if (task.done) text.classList.add('done');
   
    status.onclick = () => {
      task.done = !task.done;
      render();
    };

    const del = document.createElement('button');
    del.className = 'delete-task';
    del.textContent = '❌';

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

  tasks.push({ text: value, done: false });
  input.value = '';
  render();
});
