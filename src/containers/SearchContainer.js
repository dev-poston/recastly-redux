import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleSearchChange from '../actions/search.js';

var mapStateToProps = (state) => {

  return {
    currentVideo: state.currentVideo,
    videoList: state.videoList
  };
};
var mapDispactchToProps = (dispatch) => {
  return {
    handleSearchInputChange: (q) => dispatch(handleSearchChange(q))
  };
};



//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

export default connect(mapStateToProps, mapDispactchToProps)(Search);
