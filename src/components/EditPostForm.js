import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from 'prop-types';

const EditPostForm = (props) => {
  const { handleEditPostFormSubmission } = props;
  
  return (
    <React.Fragment>
      <ReusableForm  
        formSubmissionHandler={handleEditPostFormSubmission}
        buttonText="Update Post" /> 
    </React.Fragment>
  );
}

EditPostForm.propTypes = {
  onEditPost: PropTypes.func
};

export default EditPostForm;