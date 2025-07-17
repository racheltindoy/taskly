const input = document.querySelector('input');
const addBtn = document.querySelector('#add');
const list = document.querySelector('#list ul');




addBtn.addEventListener('click', () => {
	let item = document.createElement("li");
	item.textContent = input.value;
	list.appendChild(item);
	input.value = '';
});