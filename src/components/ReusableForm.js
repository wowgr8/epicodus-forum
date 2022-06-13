import React from "react";

const ReusableForm = (props) =>{
  const {handleAddingNewPostToForum, buttonText } = props;
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