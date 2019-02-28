import React from 'react';
import { movies } from '../../../../models/index';

export const setMovies = (props) => {
  for(let key in props) {
    movies.push({
      key: key,
      name: props[key].name,
      thumbnail: {
        uri: props[key].image
      },
      description: props[key].description
    })
  }
}