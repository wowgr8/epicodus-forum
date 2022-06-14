import React from "react";
import PropTypes from 'prop-types';

const ReusableForm = (props) =>{
  const {handleAddingNewPostToForum, buttonText } = props;
      console.log('clicked btn for handleAddingNewPostToForum');
  return(
    <form onSubmit={handleAddingNewPostToForum}>
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


export default ReusableForm;