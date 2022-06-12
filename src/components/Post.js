import React from 'react';
import PropTypes from 'prop-types';

function Post(){
  return (
    <React.Fragment>
      <div>
        <h1>UserName:</h1>
        <h2>Subject:</h2>
        <h3>Message Post:</h3>
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