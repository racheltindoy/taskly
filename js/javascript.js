const taskInput = document.querySelector('#input_text');
const addTaskButton = document.querySelector('#add');
const taskList = document.querySelector('#list ul');
taskInput.focus();


let setCheckboxArray = () => {
    let listCheckboxes = document.querySelectorAll('.task-checkbox');
    let arrListCheckboxes = Array.from(listCheckboxes);

    arrListCheckboxes.map((listCheckbox, id) => {
        listCheckbox.setAttribute("id", id);
    });
};



addTaskButton.addEventListener('click', () => {
	taskInput.focus();
	if(taskInput.value == '') { return alert('Task is empty!'); }

    const taskItem = document.createElement('li');
    const taskCheckbox = document.createElement('input');
    taskCheckbox.type = 'checkbox';
    taskCheckbox.classList = 'task-checkbox';
    
    const taskText = document.createTextNode(taskInput.value);

    taskItem.appendChild(taskCheckbox);
    taskItem.appendChild(taskText);

    taskList.appendChild(taskItem);
    taskInput.value = '';

    setCheckboxArray();
});





