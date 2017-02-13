'use strict';

import { GIPHY_API_KEY } from '../config';
export default class Giphy {
  constructor () {
    this.search();
  }
  /**
  * search for gif and return a promise.
  *
  * @param {string} query
  *
  * @return {Promise}
  */
  search(query) {
    console.log("hej!");
		const queryString = require('query-string');
		let parsed = queryString.parse(query.search);
		console.log(parsed);
		//fetch(url + query + GIPHY_API_KEY);
	}
}
