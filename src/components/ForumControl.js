import React from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import PostList from './PostList';
import PostDetail from './PostDetail';
import EditPostForm from './EditPostForm';
import NewPostForm from './NewPostForm';

class ForumControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedPost: null,
      editing: false
    };
  }

  // Methods for eventHandlers/buttons go here
  handleAddingNewPostToForum = (newPost) => {
    const { dispatch } = this.props;
    const { username, subject, message, id } = newPost;
    const action = {
      type: 'ADD_POST',
      id: id,
      username: username,
      subject: subject,
      message: message,
    }
    dispatch(action);
    this.setState({formVisibleOnPage: false});
  }

  handleDeletingPost = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_POST',
      id: id
    }
    dispatch(action);
    this.setState({selectedPost: null});
  }

  handleChangingSelectedPost = (id) => {
    const selectedPost = this.props.mainPostList[id];
    this.setState({selectedPost: selectedPost});
  }

  // handleEditingPostInList = (post) => {}

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({editing: true});
  }

  handleClick = () => {
    if (this.state.selectedPost != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedPost: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  // conditional will go here inside of render method:
  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = <EditPostForm post={this.state.selectedPost} onEditPost={this.handleEditingPostInList} />
      buttonText="Return to Posts";
  
    } else if (this.state.selectedPost != null) {
        currentlyVisibleState=<PostDetail 
          post={this.state.selectedPost} 
          onClickingDelete={this.handleDeletingPost}
          onClickingEdit={this.handleEditClick} />
        buttonText="Return to Posts";
  
      } else if (this.state.formVisibleOnPage) {
        currentlyVisibleState = <NewPostForm onNewPostCreation={this.handleAddingNewPostToForum} />;
        buttonText="Return to Posts";
  
      } else {
        currentlyVisibleState = <PostList postList={this.props.mainPostList} onPostSelection={this.handleChangingSelectedPost} />;
        buttonText="Add Post";
      };

      return (
        <React.Fragment>
          {currentlyVisibleState}
          <button className="btn btn-primary" onClick = {this.handleClick}>{buttonText}</button>
        </React.Fragment>
      );
  }
}

ForumControl.propTypes = {
  mainPostList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    mainPostList: state,
    formVisibleOnPage: state
  }
}

ForumControl = connect(mapStateToProps)(ForumControl);

export default ForumControl;