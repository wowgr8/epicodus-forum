import React from 'react';
import PropTypes from "prop-types";

class ForumControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      selectedPost: null,
      editing: false
    };
  }

  // Methods for eventHandlers/buttons go here



  // conditional will go here inside of render method:
  render(){

    // if this, do that
    // else, do that...


    return(
      <React.Fragment>
        <h1>Place holder for what is currently being shown by formVisibleOnPage</h1>
      </React.Fragment>
    )

  }

  // too soon? add after making reducer (& tests), then you can use them in the methods and conditional above. 
  // ForumControl.propTypes = {
  //   mainPostList
  // }
}

export default ForumControl;