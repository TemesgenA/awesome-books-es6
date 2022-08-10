// Class to handle local storage
export class Store {
    static getBooks() {
      let books;
      if (localStorage.getItem('books') === null) {
        books = [];
      } else {
        books = JSON.parse(localStorage.getItem('books'));
      }
  
      return books;
    }
  
    static addBook(book) {
      const books = Store.getBooks();
      books.push(book);
      localStorage.setItem('books', JSON.stringify(books));
    }
  
    static removeBook(author) {
      const books = Store.getBooks();
  
      books.forEach((book, index) => {
        if (book.author === author) {
          books.splice(index, 1);
        }
      });
  
      localStorage.setItem('books', JSON.stringify(books));
    }
  }
  
  // Event to add books
addBookBtn.addEventListener('click', () => {
    const bookTitle = document.querySelector('#book-title').value;
    const bookAuthor = document.querySelector('#book-author').value;
    if (bookTitle && bookAuthor) {
      const book = new Book(bookTitle, bookAuthor);
      UI.addBookToList(book);
      Store.addBook(book);
      UI.clearFields();
    }
  });
  // Event to remove books
  booksList.addEventListener('click', (e) => {
    UI.deleteBook(e.target);
    Store.removeBook(e.target.previousElementSibling.children[2].textContent);
  });
