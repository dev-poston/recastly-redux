import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

var mapStateToProps = (state) => {
  return {
    video: state.currentVideo
  };
};

var mapDispactchToProps = (dispatch) => {
  return {
    changeVideo: (video) => dispatch(changeVideo(video))
  };
};

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

export default connect(mapStateToProps, mapDispactchToProps)(VideoPlayer);
