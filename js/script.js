// let tasks = [];
// let showCompleted = true;

// const input = document.querySelector('.task-input');
// const addBtn = document.querySelector('.add-btn');
// const taskList = document.querySelector('.task-list');


// const controlsContainer = document.createElement('div');
// controlsContainer.className = "controls";

// const toggleCompletedBtn = document.createElement('button');
// toggleCompletedBtn.className = "toggle-completed";
// toggleCompletedBtn.textContent = "Pokaż ukończone";

// const finishAllBtn = document.createElement('button');
// finishAllBtn.className = "finish-all";
// finishAllBtn.textContent = "Ukończ wszystkie";

// controlsContainer.append(toggleCompletedBtn, finishAllBtn);

// const titleEl = document.querySelector('.card:last-of-type .card__title');
// titleEl.style.display = "flex";
// titleEl.style.alignItems = "center";
// titleEl.appendChild(controlsContainer);

// function createTaskItem(task, index) {
//   const row = document.createElement('li');
//   row.className = 'task-row';

//   const statusBtn = document.createElement('button');
//   statusBtn.className = 'task-status';
//   statusBtn.textContent = task.done ? '✓' : '';

//   statusBtn.onclick = () => {
//     tasks = tasks.map((t, i) =>
//       i === index ? { ...t, done: !t.done } : t
//     );
//     render();
//   };

//   const textEl = document.createElement('span');
//   textEl.className = 'task-text';
//   textEl.textContent = task.text;

//   if (task.done) textEl.classList.add('done');

//   const deleteBtn = document.createElement('button');
//   deleteBtn.className = 'delete-task';
//   deleteBtn.textContent = '🗑';

//   deleteBtn.onclick = () => {
//     tasks = tasks.filter((_, i) => i !== index);
//     render();
//   };

//   row.append(statusBtn, textEl, deleteBtn);
//   return row;
// }

// function render() {
//   taskList.innerHTML = '';

//   let visibleTasks = tasks;
//   if (!showCompleted) {
//     visibleTasks = tasks.filter(t => !t.done);
//   }

//   visibleTasks.forEach((task, index) => {
//     const realIndex = tasks.indexOf(task);
//     taskList.appendChild(createTaskItem(task, realIndex));
//   });

//   const allDone = tasks.length > 0 && tasks.every(t => t.done);
//   finishAllBtn.disabled = allDone;

//   toggleCompletedBtn.textContent = showCompleted
//     ? "Ukryj ukończone"
//     : "Pokaż ukończone";
// }

// addBtn.addEventListener('click', () => {
//   const text = input.value.trim();
//   if (!text) return;

//   tasks = [...tasks, { text, done: false }];
//   input.value = '';
//   render();
// });

// toggleCompletedBtn.addEventListener('click', () => {
//   showCompleted = !showCompleted;
//   render();
// });

// finishAllBtn.addEventListener('click', () => {
//   tasks = tasks.map(t => ({ ...t, done: true }));
//   render();
// });

// render();


// KOD Z LEKCJI Z MODUŁU 6 ODCINEK 7



// {
// const tasks = [
 
// ];

// const addNewTask = (newTaskContent) => {
//   tasks.push({
//     content: newTaskContent,
//     done: false,
//   });

//   render();
// };

// const removeTask = (index) => {
//   tasks.splice(index, 1);
//   render();
// }

// const toggleTaskDone = (taskIndex) => {
//   tasks[taskIndex].done = !tasks[taskIndex].done;
//   render();
// }

// const bindEvents = () => {
//   const removeButtons = document.querySelectorAll(".js-remove");

//   removeButtons.forEach((removeButton, index) => {
//     removeButton.addEventListener("click", () => {
//       removeTask(index);
//     });
//   });

//   const toggleDoneButton = document.querySelectorAll(".js-done");

//   toggleDoneButton.forEach((toggleDoneButton, index) => {
//     toggleDoneButton.addEventListener("click", () => {
//       toggleTaskDone(index);
//     });
//   });
// }
 
// const render = () => {
//   let htmlString = "";

//   for (const task of tasks) {
//     htmlString += `
//       <li ${task.done ? 'style="text-decoration: line-through"' : ""}>
//         ${task.content}
//         <button class=" js-done">zrobione?</button>
//         <button class=" js-remove" >usuń</button> 
//       </li>
//     `;
//   }

//   document.querySelector(".task-list").innerHTML = htmlString;

//   bindEvents();

// };

// const init = () => {
//   render();

//   const form = document.querySelector(".task-form");

//   form.onsubmit = (event) => {
//     event.preventDefault();

//     const newTaskContent = document
//       .querySelector(".task-input")
//       .value
//       .trim();

//     if (newTaskContent === "") {
//       return;
//     }

//     addNewTask(newTaskContent);
//     document.querySelector(".task-input").value = "";
//   };
// };

// init();
// }


let tasks = [];
let showCompleted = true;


const form = document.querySelector(".task-form");
const input = document.querySelector(".task-input");
const taskList = document.querySelector(".task-list");


const controls = document.createElement("div");
controls.className = "controls";

const toggleBtn = document.createElement("button");
toggleBtn.className = "toggle-completed";
toggleBtn.textContent = "Ukryj ukończone";

const finishAllBtn = document.createElement("button");
finishAllBtn.className = "finish-all";
finishAllBtn.textContent = "Ukończ wszystkie";

controls.append(toggleBtn, finishAllBtn);

const listTitle = document.querySelector(".card:last-of-type .card__title");
listTitle.style.display = "flex";
listTitle.style.justifyContent = "space-between";
listTitle.style.alignItems = "center";
listTitle.appendChild(controls);


const addNewTask = (content) => {
  tasks = [...tasks, { content, done: false }];
  render();
};

const removeTask = (index) => {
  tasks = tasks.filter((_, i) => i !== index);
  render();
};

const toggleTaskDone = (index) => {
  tasks = tasks.map((task, i) =>
    i === index ? { ...task, done: !task.done } : task
  );
  render();
};

const finishAll = () => {
  tasks = tasks.map(task => ({ ...task, done: true }));
  render();
};


const render = () => {
  let html = "";

  const visibleTasks = showCompleted
    ? tasks
    : tasks.filter(task => !task.done);

  visibleTasks.forEach((task, index) => {
    const realIndex = tasks.indexOf(task);

    html += `
      <li class="task-row">
        <button class="task-status js-done">
          ${task.done ? "✓" : ""}
        </button>

        <span class="task-text ${task.done ? "done" : ""}">
          ${task.content}
        </span>

        <button class="delete-task js-remove"> 🗑 </button>
      </li>
    `;
  });

  taskList.innerHTML = html;

  bindEvents();

  toggleBtn.textContent = showCompleted
    ? "Ukryj ukończone"
    : "Pokaż ukończone";

  finishAllBtn.disabled =
    tasks.length > 0 && tasks.every(task => task.done);
};

const bindEvents = () => {
  document.querySelectorAll(".js-remove").forEach((btn, index) => {
    btn.onclick = () => removeTask(index);
  });

  document.querySelectorAll(".js-done").forEach((btn, index) => {
    btn.onclick = () => toggleTaskDone(index);
  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const value = input.value.trim();
  if (!value) return;

  addNewTask(value);
  input.value = "";
});

toggleBtn.onclick = () => {
  showCompleted = !showCompleted;
  render();
};

finishAllBtn.onclick = finishAll;

render();
