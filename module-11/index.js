/* 3 array functions:
click a button for each event and 
add to the array 
delete from the array
display the contents of the array
*/

// initialize empty array
let myArray = [];

function add() {
    const input = document.getElementById('inputField');
    const item = input.value.trim();
    console.log(item);
    if (item) {
        myArray.push(item);
        //clears input after added
        input.value = '';
        updateOutput('Item added: ' + item);
    }
    displayArrayContents();
}
// deletes last item using pop() method from array 
function deleteLast() {
    if (myArray.length > 0) {
        const deletedItem = myArray.pop();
        updateOutput('Last item deleted: ' + deletedItem);
    } else {
        updateOutput('Array is empty, nothing to delete');
    }
    displayArrayContents();
}

// deletes specific item from array 
function deleteSpecific() {
    const input = document.getElementById('inputField');
    const item = input.value.trim();
    const index = myArray.indexOf(item);
    if (index > -1) {
        myArray.splice(index, 1);
        input.value = '';
        updateOutput('Item deleted: ' + item);
    } else {
        updateOutput('Item not found in the array');
    }

    displayArrayContents();
}

// displays array contents
function display() {
    updateOutput('Displaying array contents');
    displayArrayContents();
}

// Updates output message
function updateOutput(message) {
    document.getElementById('output').textContent = message;
}

// Displays formatted list contents
function displayArrayContents() {
    const arrayContents = document.getElementById('arrayContents');
    arrayContents.innerHTML = '';
    if (myArray.length > 0) {
        myArray.forEach((item, index) => {
            // creates div and increments or decrements accordingly 
            const div = document.createElement('div');
            div.textContent = `Item ${index + 1} = ${item}`;
            arrayContents.appendChild(div);
        });
    } else {
        arrayContents.textContent = 'Array is empty';
    }
}