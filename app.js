const itemToAdd = document.getElementById('itemToAdd');
const addButton = document.getElementById('addButton');
const list = document.getElementById('list');

class Item {
    constructor (itemName) {
        this.name = itemName;
        this.create();
    }

    create () {
        let listItem = document.createElement('div');
        listItem.classList.add('list-item');

        let input = document.createElement('input');
        input.type = 'text';
        input.classList.add('item-name');
        input.value = this.name;
        input.disabled = true;
        input.id = 'item-name';

        let actions = document.createElement('div');
        actions.classList.add('item-actions', 'row', 'd-flex',  'justify-content-center', 'mt-2');

        let subaction = document.createElement('div');
        subaction.classList.add('col-sm-8', 'input-group');     
        
        let subactionAppend = document.createElement('div');
        subactionAppend.classList.add('input-group-append');

        let updateButton = document.createElement('button');
        updateButton.classList.add('update', 'btn', 'btn-primary');
        updateButton.innerText = 'Update';

        let deleteButton = document.createElement('button');
        deleteButton.classList.add('delete', 'btn',  'btn-danger');
        deleteButton.innerText = 'Remove';

        subactionAppend.append(updateButton, deleteButton);
        subaction.append(input, subactionAppend);
        actions.append(subaction);
        listItem.append(actions);

        list.appendChild(listItem);
    }
}

addButton.addEventListener('click', () => newItem());

function newItem() {
    if (itemToAdd != '') {
        new Item(itemToAdd.value);
    }
    else {
        alert('Input field cannot be empty');
    }
}




