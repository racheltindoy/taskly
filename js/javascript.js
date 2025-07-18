const taskInput = document.querySelector('#input_text');
const addTaskButton = document.querySelector('#add');
const taskList = document.querySelector('#list ul');


let setCheckboxArray = () => {
    let listCheckboxes = document.querySelectorAll('.task-checkbox');
    let arrListCheckboxes = Array.from(listCheckboxes);

    arrListCheckboxes.map((listCheckbox, id) => {
        listCheckbox.setAttribute("id", id);
    });
};


let crossOut = () => {
    let listCheckboxes = document.querySelectorAll('.task-checkbox');

    listCheckboxes.forEach(listCheckbox => {
        listCheckbox.addEventListener('change', () => {
            if(listCheckbox.checked) {
                listCheckbox.parentElement.style.textDecoration = 'line-through';
            } else {
                listCheckbox.parentElement.style.textDecoration = 'none';
            }
        })

    });
};


let deleteList = () => {
    let trashcans = document.querySelectorAll('.trash');

    trashcans.forEach(trashcan => {
        trashcan.addEventListener('click', () => {
            trashcan.parentElement.remove();
        })
    });
};


addTaskButton.addEventListener('click', () => {
	taskInput.focus();
	if(taskInput.value == '') { return alert('Task is empty!'); }

    // li
    const taskItem = document.createElement('li');

    // li .listInfo
    const taskItemListInfo = document.createElement('span');
    taskItemListInfo.classList = 'listInfo';
    taskItem.appendChild(taskItemListInfo);

    // .listInfo checkbox
    const taskCheckbox = document.createElement('input');
    taskCheckbox.type = 'checkbox';
    taskCheckbox.classList = 'task-checkbox';
    taskItemListInfo.appendChild(taskCheckbox);

    // .listInfo text
    const taskText = document.createTextNode(taskInput.value);
    taskItemListInfo.appendChild(taskText);

    // li .trash
    const trash = document.createElement('span');
    trash.classList = 'trash';
    trash.textContent = '🗑️';
    taskItem.appendChild(trash);

    taskList.appendChild(taskItem);
    taskInput.value = '';
    
    setCheckboxArray();
    crossOut();
    deleteList();
});

taskInput.focus();
crossOut();
deleteList();