// Class to display books
export class UI {
    static displayBooks() {
      const books = Store.getBooks();
  
      books.forEach((book) => {
        UI.addBookToList(book);
      });
    }
  
    static addBookToList(book) {
      const displayBooksDiv = document.createElement('div');
      displayBooksDiv.classList.add('book');
      const bookTitleHeading = document.createElement('h4');
      bookTitleHeading.innerText = book.title;
      const bookAuthorHeading = document.createElement('h4');
      bookAuthorHeading.innerText = book.author;
      const bookRemoveBtn = document.createElement('button');
      bookRemoveBtn.classList.add('remove-btn');
      bookRemoveBtn.innerText = 'Remove';
      bookRemoveBtn.setAttribute('data-id', book.index);
      const infoDiv = document.createElement('div');
      infoDiv.classList.add('info');
      const linkElement = document.createElement('h4');
      linkElement.innerText = 'by';
      infoDiv.appendChild(bookTitleHeading);
      infoDiv.appendChild(linkElement);
      infoDiv.appendChild(bookAuthorHeading);
      displayBooksDiv.appendChild(infoDiv);
      booksList.appendChild(displayBooksDiv);
      displayBooksDiv.appendChild(bookRemoveBtn);
    }
  
    static clearFields() {
      document.getElementById('book-title').value = '';
      document.getElementById('book-author').value = '';
    }
  
    static deleteBook(el) {
      if (el.classList.contains('remove-btn')) {
        el.parentElement.remove();
      }
    }
  }
  
  // Event to display books
  document.addEventListener('DOMContentLoaded', UI.displayBooks);
  
  
  
  listNavLink.addEventListener('click', (e) => {
    e.preventDefault();
    allBooksSection.classList.add('show-section');
    allBooksSection.classList.remove('hide-section');
    addBookSection.classList.add('hide-section');
    contactSection.classList.add('hide-section');
    listNavLink.children[0].classList.add('active');
    contactNavLink.children[0].classList.remove('active');
    addNavLink.children[0].classList.remove('active');
  });
  addNavLink.addEventListener('click', (e) => {
    e.preventDefault();
    addBookSection.classList.add('show-section');
    addBookSection.classList.remove('hide-section');
    contactSection.classList.add('hide-section');
    allBooksSection.classList.add('hide-section');
    addNavLink.children[0].classList.add('active');
    listNavLink.children[0].classList.remove('active');
    contactNavLink.children[0].classList.remove('active');
  });
  contactNavLink.addEventListener('click', (e) => {
    e.preventDefault();
    contactSection.classList.add('show-flex-section');
    contactSection.classList.remove('hide-section');
    addBookSection.classList.add('hide-section');
    allBooksSection.classList.add('hide-section');
    contactNavLink.children[0].classList.add('active');
    listNavLink.children[0].classList.remove('active');
    addNavLink.children[0].classList.remove('active');
  });
  