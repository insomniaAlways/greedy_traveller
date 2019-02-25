import React, { Component } from 'React';
import { connect } from 'react-redux';
import { getMovies } from '../../../store/actions/index';
import ListView from '../../components/ListView/ListView';

class MovieScreen extends Component {
  componentDidMount() {
    this.props.onGetMovies()
  }

  render() {
    console.log(this.props.movies)
    return (
      <ListView
        movies={this.props.movies}
      />
    )
  }
}

const mapDispatchToProps = dispatach => {
  return {
    onGetMovies : () => dispatach(getMovies())
  }
}
const mapStateToProps = state => {
  return {
    movies: state.movies.movies
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MovieScreen);