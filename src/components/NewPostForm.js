import React from "react";
import { v4 } from "uuid";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

const NewPostForm = (props) => {
  const handleAddingNewPostToForum = (e) => {
    e.preventDefault();
    props.onNewPostCreation({
      username: e.target.username.value,
      subject: e.target.postTitle.value,
      message: e.target.postBody.value,
      id: v4(),
    });
  }

  return(
    <React.Fragment>
      <hr />
      <ReusableForm 
        formSubmissionHandler={handleAddingNewPostToForum}
        buttonText="Post"
        />
    </React.Fragment>
  )
};

NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func
}

export default NewPostForm;