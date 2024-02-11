'use strict';

export function searchImages(searchQuery) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api';
  const API_KEY = '/?key=42321417-105bdf2b0241dc8ac6330439d';
  const PARAMS = `&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true`;

  const url = BASE_URL + END_POINT + API_KEY + PARAMS;

  return fetch(url)
    .then(res => {
      return res.json();
    })
    .catch(err => {
      throw new Error(err.status);
    });
}
