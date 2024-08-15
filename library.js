// PRIOR VERSION USING OBJECTS

// let library = [];

// // Book object

// function Book(title, author, pages, read) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;

//     this.info = function() {
//         return `${this.title}, ${this.author}, ${this.pages}`;
//     };
// }

// function addBookToLibrary(title, author, pages, read) {
//     const newBook = new Book(title, author, pages, read);
//     library.push(newBook);
// }


// // Test creating new book and returning info
// //const colourOfMagic = new Book ('The Colour of Magic', 'Sir Terry Pratchett', 500);

// //console.log(colourOfMagic.info());

// // Test adding new book to library

// addBookToLibrary('The Colour of Magic', 'Sir Terry Pratchett', 500, true);

// addBookToLibrary('The Light Fantastic', 'Sir Terry Pratchett', 450, true);

// // Display books in inventory

// console.log(library);

// function showBooks() {
//     const bookContainer = document.querySelector('.book-container');
//     bookContainer.innerHTML = '';

//     library.forEach((book, index) => {
//         const bookCard = document.createElement('div');
//         bookCard.classList.add('book-card');

//         const bookInfo = document.createElement('p');
//         bookInfo.textContent = book.info();

//         // remove book button
//         const removeButton = document.createElement('button');
//         removeButton.textContent = 'Remove Book';
//         removeButton.addEventListener('click', () => {
//             removeBook(index);
//             showBooks();
//         });

//         // toggle read status of books in library
//         const toggleReadButton = document.createElement('button');
//         toggleReadButton.textContent = book.read ? 'Mark Unread' : 'Mark Read';
//         toggleReadButton.addEventListener('click', () => {
//             toggleReadStatus(index);
//             showBooks();
//         })

//         bookCard.appendChild(bookInfo);
//         bookCard.appendChild(removeButton);
//         bookCard.appendChild(toggleReadButton);
//         bookContainer.appendChild(bookCard);
//     });
// }
// showBooks();

// // Link up to form

// // link up to button and form
// const newBookButton = document.getElementById('new-book-button');
// const bookForm = document.getElementById('book-form');

// // Listener for new book button & show/hide form

// newBookButton.addEventListener('click', () => {
//     bookForm.style.display = bookForm.style.display === 'block' ? 'none' : 'block';
// });

// // Listener for form submission

// bookForm.addEventListener('submit', (event) => {
//     event.preventDefault(); // prevent default submission behaviour

//     // retrieve values from form 
//     const title = document.getElementById('title').value;
//     const author = document.getElementById('author').value;
//     const pages = document.getElementById('pages').value;
//     const read = document.getElementById('read').checked;  // boolean if box is checked or not

//     addBookToLibrary(title, author, pages, read); // add to inventory
//     showBooks(); // show updated inventory

//     // clear the form
//     bookForm.reset();
//     bookForm.style.display = 'none';
// });

// // remove book function

// function removeBook(index) {
//     library.splice(index, 1);
// };

// // toggle read status function

// function toggleReadStatus(index) {
//     library[index].read = !library[index].read;
//     showBooks();
// };



// refactor with classes


// REFACTORED USING CLASSES

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    details() {
        return `${this.title}, ${this.author}, ${this.pages}`;
    }
}

class Library {
    constructor() {
        this.library = [];
    }

    addBookToLibrary(title, author, pages, read) {
        const newBook = new Book(title, author, pages, read);
        this.library.push(newBook);
    }

    removeBook(index) {
        this.library.splice(index, 1);
    }

    toggleReadStatus(index) {
        this.library[index].read = !this.library[index].read;
    }

    showBooks() {
        const bookContainer = document.querySelector('.book-container');
        bookContainer.innerHTML = '';

        this.library.forEach((book, index) => {
            const bookCard = document.createElement('div');
            bookCard.classList.add('book-card');

            const bookDetails = document.createElement('p');
            bookDetails.textContent = book.details();

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove Book';
            removeButton.addEventListener('click', () => {
                this.removeBook(index);
                this.showBooks();
            });

            const toggleReadButton = document.createElement('button');
            toggleReadButton.textContent = book.read ? 'Mark Unread' : 'Mark Read';
            toggleReadButton.addEventListener('click', () => {
                this.toggleReadStatus(index);
                this.showBooks();
            });

            bookCard.appendChild(bookDetails);
            bookCard.appendChild(removeButton);
            bookCard.appendChild(toggleReadButton);
            bookContainer.appendChild(bookCard);
        });
    }
}

const myLibrary = new Library();

myLibrary.addBookToLibrary('The Colour of Magic', 'Sir Terry Pratchett', 500, true);
myLibrary.addBookToLibrary('The Light Fantastic', 'Sir Terry Pratchett', 450, true);

myLibrary.showBooks();

const newBookButton = document.getElementById('new-book-button');
const bookForm = document.getElementById('book-form');

newBookButton.addEventListener('click', () => {
    bookForm.style.display = bookForm.style.display === 'block' ? 'none' : 'block';
})

bookForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;

    myLibrary.addBookToLibrary(title, author, pages, read);
    myLibrary.showBooks();

    bookForm.reset();
    bookForm.style.display = 'none';

});