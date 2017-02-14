'use strict';
import queryString from 'query-string';
import { GIPHY_API_KEY } from '../config';
export default class Giphy {
  constructor () {
    this.search('awesome');
  }
  /**
  * search for gif and return a promise.
  *
  * @param {string} query
  *
  * @return {Promise}
  */
  search (q) {
    const query = queryString.stringify({q});
		fetch(`http://api.giphy.com/v1/gifs/search?${query}&api_key=${GIPHY_API_KEY}`)
      .then(function (response) {
        if (!response.ok) {
          console.log('something went wrong. statuscode: ' + response.status);
        } else {
          response.json().then(function (json) {
            let gifArray = [];
            json.data.forEach(gif => gifArray.push(gif.images.fixed_width.url));
            console.log(gifArray);
          });
        }
      })
      .catch(function (err) {
        console.log('something went wrong.', err);
      });
  }
}
