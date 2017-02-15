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

		let gallery = document.querySelector('.gallery');
		// remove previous search
		while (gallery.firstChild) {
    	gallery.removeChild(gallery.firstChild);
		}

    this.searchInput = document.querySelector('.search__input').value;
		let giphy = new Giphy();
    let searchData = giphy.search(this.searchInput);
		searchData.then(function (response) {
			response.data.forEach(gif => {
				let image = document.createElement('img');
				image.src = gif.images.fixed_width.url;
				gallery.appendChild(image);
			});
  	});
	}
}
