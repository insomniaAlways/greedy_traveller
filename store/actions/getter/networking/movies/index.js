import { setMovies } from '../../../index';

export const getMovies = () => {
  return fetch('https://rn-project-1550512411254.firebaseio.com/places.json')
    .then((res) => res.json())
    .then((res) => {
      return res
      // setMovies(res)
    })
    .catch(e => console.log(e))
}