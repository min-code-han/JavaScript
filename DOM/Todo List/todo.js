const memo = document.querySelector('.task_list');
const input = document.querySelector('.write');
let checked = true;

function onAdd() {
  const text = input.value;
  input.value = '';
  if (text === '') {
    input.focus();
    return;
  }
  const task = createTask(text);

  memo.appendChild(task);
  task.scrollIntoView(task);
}

function createTask(text) {
  const list = document.createElement('li');
  list.setAttribute('class', 'task');

  const task_list = document.createElement('span');
  task_list.setAttribute('class', 'text');
  task_list.innerHTML = text;

  const chkBtn = document.createElement('i');
  chkBtn.innerHTML = '<i class="far fa-check-square chkBtn"></i>';

  const deleteBtn = document.createElement('i');
  deleteBtn.innerHTML = '<i class="fas fa-times deleteBtn"></i>';
  deleteBtn.addEventListener('click', () => {
    memo.removeChild(list);
  });

  list.appendChild(chkBtn);
  list.appendChild(task_list);
  list.appendChild(deleteBtn);

  chkBtn.addEventListener('click', () => {
    checked = !checked;

    {
      checked
        ? (chkBtn.innerHTML = '<i class="far fa-check-square chkBtn"></i>')
        : (chkBtn.innerHTML = '<i class="fas fa-check-square chkBtn"></i>');
    }
  });

  return list;
}

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    onAdd();
  }
});
