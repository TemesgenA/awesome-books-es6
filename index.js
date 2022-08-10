/* eslint-disable max-classes-per-file */

// Initialize variables to add books to local Storage
const addBookBtn = document.querySelector('.add-book-btn');
const booksList = document.querySelector('.books-list');
const allBooksSection = document.querySelector('#all-books-section');
const addBookSection = document.querySelector('#books-section');
const contactSection = document.querySelector('#contact-section');
const listNavLink = document.querySelector('.list-nav-link');
const addNavLink = document.querySelector('.add-nav-link');
const contactNavLink = document.querySelector('.contact-nav-link');

// Class to Represent a Book
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

import {store} from '././modules/addRmvBook.js'

