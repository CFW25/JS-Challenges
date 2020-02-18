function Book(title, author) {
    this.title = title;
    this.author = author;
    this.getTitle = function() { return "Title: " + this.title }
    this.getAuthor = function() { return "Author: " + this.author }
}

let PP = new Book("Pride and Prejudice", "Jane Austen")
let H = new Book("Hamlet", "William Shakespeare")
let WP = new Book("War and Peace", "Leo Tolstoy")

console.log(PP.bookTitle)