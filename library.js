let library = [];

// Book object

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;

    this.info = function() {
        return `${this.title}, ${this.author}, ${this.pages}`;
    };
}

function addBookToLibrary(title, author, pages) {
    const newBook = new Book(title, author, pages);
    library.push(newBook);
}


// Test creating new book and returning info
//const colourOfMagic = new Book ('The Colour of Magic', 'Sir Terry Pratchett', 500);

//console.log(colourOfMagic.info());

// Test adding new book to library

addBookToLibrary('The Colour of Magic', 'Sir Terry Pratchett', 500);

addBookToLibrary('The Light Fantastic', 'Sir Terry Pratchett', 450);

console.log(library);

function showBooks() {
    const bookContainer = document.querySelector('.book-container');
    bookContainer.innerHTML = '';

    library.forEach((book) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');

        const bookInfo = document.createElement('p');
        bookInfo.textContent = book.info();

        bookCard.appendChild(bookInfo);
        bookContainer.appendChild(bookCard);
    })
}

showBooks();
