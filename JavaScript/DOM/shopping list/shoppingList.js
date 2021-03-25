const memo = document.querySelector('ul');
const add = document.querySelector('.add');
const deleteBtn = document.querySelector('.delete');

add.addEventListener('click', (e) => {
  const list = document.createElement('li');
  const value = document.querySelector('input').value;

  list.innerHTML = `
    <span>${value}</span>
    <button class="delete">remove</button>
  `;

  memo.appendChild(list);
});

deleteBtn.addEventListener('click', (e) => {
  memo.removeChild(list);
  console.log(a);
});
