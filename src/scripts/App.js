'use strict';
import Giphy from './utils/Giphy.js';

export default class App {
  constructor () {
    let searchForm = document.forms[0];
    this.button = searchForm.querySelector('.search__button');
    this.button.addEventListener('click', this.onSubmit.bind(this));
  }
  onSubmit (event) {
    event.preventDefault();
    this.searchInput = document.querySelector('.search__input').value;
		let giphy = new Giphy();
		let giphySearch = giphy.search(this.searchInput, this.onSubmitResponse.bind(this));
  }

	onSubmitResponse (data) {
		console.log(data);

	}
}

// let gifArray = [];
// giphy.forEach(gif => gifArray.push(gif.images.fixed_width.url));
// console.log(gifArray);
