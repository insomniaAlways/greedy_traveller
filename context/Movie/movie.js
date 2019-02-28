import React from 'react';
import { getMovies } from '../../store/actions/index'

const MovieContext = React.createContext([])

export default class withMovieContext extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
  }
  componentWillMount() {
    Promise.resolve(getMovies()).then((res) => {
      this.setState({
        movies: res
      })
    })
  }
  render() {
    console.log(res)
    return (
      <MovieContext.Provider value={this.state.movies}/>
    )
  }
}