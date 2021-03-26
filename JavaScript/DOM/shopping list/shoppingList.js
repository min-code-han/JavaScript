const items = document.querySelector('.items');
const input = document.querySelector('.footer_input');
const addBtn = document.querySelector('.footer_button');

function onAdd() {
  // 1. 사용자가 입력한 txt 받아오기.
  const text = input.value;
  if (text === '') {
    input.focus();
    return;
  }

  // 2. 새로운 아이템 만들기. (txt + 삭제버튼)
  const item = createItem(text);

  // 3. items 컨테이너 안에 새로만든 아이템 추가하기.
  items.appendChild(item);

  // 4. 새로추가된 아이템으로 스크롤 이동
  item.scrollIntoView({ block: 'center' });

  // 5. input 초기화 하기.
  input.value = '';
  input.focus();
}

function createItem(text) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item_row');

  const item = document.createElement('div');
  item.setAttribute('class', 'item');

  const name = document.createElement('span');
  name.setAttribute('class', 'item_name');
  name.innerText = text;
  console.log(text);

  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('class', 'item_delete');
  deleteBtn.innerHTML = '<i class="far fa-trash-alt"></i>';
  deleteBtn.addEventListener('click', () => {
    items.removeChild(itemRow);
  });

  const itemDivider = document.createElement('div');
  itemDivider.setAttribute('class', 'item_divider');

  item.appendChild(name);
  item.appendChild(deleteBtn);

  itemRow.appendChild(item);
  itemRow.appendChild(itemDivider);
  return itemRow;
}

addBtn.addEventListener('click', () => {
  onAdd();
});

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    onAdd();
  }
  el;
});
