// Get the list of books
const booksList = document.getElementById('booksList');

// Create an array from the list items
let books = Array.from(booksList.getElementsByTagName('li')).map(li => li.textContent);

// Function to sort and display books from top to bottom (ascending order)
function sortTopToBottom() {
    books.sort();
    updateBooksList();
}

// Function to sort and display books from bottom to top (descending order)
function sortBottomToTop() {
    books.sort((a, b) => b.localeCompare(a));
    updateBooksList();
}

// Function to update the books list in the DOM
function updateBooksList() {
    // Clear the current list
    booksList.innerHTML = '';
    
    // Add sorted books back to the list
    books.forEach(book => {
        const li = document.createElement('li');
        li.textContent = book;
        booksList.appendChild(li);
    });
}
// Add event listeners to the buttons
document.getElementById("bookslist");
