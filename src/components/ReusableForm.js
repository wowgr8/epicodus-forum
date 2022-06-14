import React from "react";
import PropTypes from 'prop-types';
import PostList from "./PostList";

const ReusableForm = (props) =>{
  const {formSubmissionHandler, buttonText } = props;
  console.log('clicked btn for handleAddingNewPostToForum');
  return(
    <form onSubmit={formSubmissionHandler}>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">User</label>
        <input type="test" className="form-control" id="username" aria-describedby="user name" />
      </div>
      <div className="mb-3">
        <label htmlFor="postTitle" className="form-label">Post Title</label>
        <input type="test" className="form-control" id="postTitle" aria-describedby="post title" />
      </div>
      <div className="mb-3">
        <label htmlFor="postBody" className="form-label">Post Body</label>
        <textarea className="form-control" id="postBody" rows="3" />
      </div>
      <button type="submit" className="btn btn-primary">{buttonText}</button>
    </form>
  )
}

PostList.propTypes = {
  postList: PropTypes.object,
  onPostSelection: PropTypes.func,
  formSubmissionHandler: PropTypes.func

};

export default ReusableForm;