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
        listItem.classList.add('list-item', 'item-actions', 'row', 'd-flex',  'justify-content-center', 'mt-2');

        let input = document.createElement('input');
        input.type = 'text';
        input.classList.add('item-name');
        input.value = this.name;
        input.disabled = true;
        input.id = 'item-name';

        let subaction = document.createElement('div');
        subaction.classList.add('col-sm-8', 'input-group');     
        
        let subactionAppend = document.createElement('div');
        subactionAppend.classList.add('input-group-append');

        let updateButton = document.createElement('button');
        updateButton.classList.add('update', 'btn', 'btn-primary');
        updateButton.innerText = 'Update';
        updateButton.addEventListener('click', () => this.update(input));

        let deleteButton = document.createElement('button');
        deleteButton.classList.add('delete', 'btn',  'btn-danger');
        deleteButton.innerText = 'Remove';
        deleteButton.addEventListener('click', () => this.remove(listItem));

        subactionAppend.append(updateButton, deleteButton);
        subaction.append(input, subactionAppend);
        
        listItem.append(subaction);

        list.append(listItem);
    }

    update (input) {
        input.disabled = !input.disabled;
    }

    remove (listItem) {
        listItem.parentNode.remove(listItem);
    }
}

addButton.addEventListener('click', () => newItem());

function newItem() {
    if (itemToAdd.value !== '') {
        new Item(itemToAdd.value);
        itemToAdd.value = '';
    }
    else {
        alert('Input field cannot be empty');
    }
}




