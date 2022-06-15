import React from 'react';
import PropTypes from 'prop-types';

const Post = (props) => {
  return (
    <React.Fragment>
      <hr />
      <div onClick = {() => props.whenPostClicked(props.id)}>
        <h3>{props.username} - {props.subject}</h3>
        <p><em>{props.message}</em></p>
        <hr/>
      </div>
    </React.Fragment>
  )
}

Post.propTypes = {
  username: PropTypes.string,
  subject: PropTypes.string,
  message: PropTypes.string,
  id: PropTypes.string,
  whenPostClicked: PropTypes.func
};

export default Post;