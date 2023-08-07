function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;

    this.info = function() {
        return (`${title}, ${author}, ${pages}`);
    }
}

const colourOfMagic = new Book ('The Colour of Magic', 'Sir Terry Pratchett', 500);

console.log(colourOfMagic.info());
