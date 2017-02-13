'use strict';

export default class App {
  constructor () {
    let searchForm = document.forms[0];
    this.button = searchForm.querySelector('.search__button');
    this.button.addEventListener('click', this.onSubmit.bind(this));
  }
  onSubmit (event) {
    event.preventDefault();
    this.searchInput = document.querySelector('.search__input').value;
    console.log(this.searchInput);
  }
}
