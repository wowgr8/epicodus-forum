import React from 'react';
import PropTypes from 'prop-types';

const Post = (props) => {
  // const {username, subject, message} = props;
  return (
    <React.Fragment>
      <hr />
      <div onClick = {() => props.whenPostClicked(props.id)}>
        <h3>{props.subject} - {props.message}</h3>
        <p><em>{props.issue}</em></p>
        <hr/>
      </div>
    </React.Fragment>
  )
}

Post.propTypes = {
  username: PropTypes.string,
  subject: PropTypes.string,
  message: PropTypes.string,
  id: PropTypes.string
};

export default Post;