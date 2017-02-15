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
  search (q, onResponse) {
    const query = queryString.stringify({q});
		fetch(`http://api.giphy.com/v1/gifs/search?${query}&api_key=${GIPHY_API_KEY}`)
      .then(function (response) {
        if (!response.ok) {
          console.log('something went wrong. statuscode: ' + response.status);
        } else {
          response.json().then(function (searchData) {
						onResponse(searchData);
          });
        }
      })
      .catch(function (err) {
        console.log('something went wrong.', err);
      });
  }
}
