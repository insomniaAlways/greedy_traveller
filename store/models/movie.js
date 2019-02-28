import { types } from 'mobx-state-tree';

const data = {
  key: '',
  name: '',
  thumbnail: {
    uri: ''
  },
  description: ''
}

export const movie = types.model({
  key: types.string,
  name: types.string,
  thumbnail: {
    uri: types.string
  },
  description: types.string
})

export const movies = types.model({
  items: types.optional(types.array(movie), []) 
})
