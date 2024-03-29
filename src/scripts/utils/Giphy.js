'use strict';
import queryString from 'query-string';
import { GIPHY_API_KEY } from '../config';

export default class Giphy {
  /**
  * search for gif and return a promise.
  *
  * @param {string} query
  *
  * @return {Promise}
  */
  search (query) {
		let searchQuery = {
			q: query,
			limit: 100
		};
    const q = queryString.stringify(searchQuery);
		return fetch(`http://api.giphy.com/v1/gifs/search?${q}&api_key=${GIPHY_API_KEY}`)
      .then(function (response) {
        if (!response.ok) {
          console.log('something went wrong. statuscode: ' + response.status);
        } else {
           return response.json();
        }
      })
      .catch(function (err) {
        console.log('something went wrong.', err);
      });
  }
}
