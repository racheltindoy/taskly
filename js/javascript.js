const input = document.querySelector('#input_text');
const addBtn = document.querySelector('#add');
const list = document.querySelector('#list ul');


addBtn.addEventListener('click', () => {
	let li = document.createElement('li');
	let checkBox = document.createElement('input');
	checkBox.type = 'checkbox';
	checkBox.classList = 'checkBox';
	let liText = document.createTextNode(input.value);

	
	li.appendChild(checkBox);
	li.appendChild(liText);

	list.appendChild(li);
	input.value = '';
});