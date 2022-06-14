import React from "react";
import Post from "./Post";
import PropTypes from "prop-types";

const PostList = (props) => {
  const {postList, onPostSelection } = props;
  console.log(Object.keys(postList.mainPostList));
  return(
    <React.Fragment>
    {Object.values(postList.mainPostList).map((post, index) =>
      <Post
        whenPostClicked={post.onPostSelection}
        username={post.username}
        subject={post.subject}
        message={post.message}
        formattedWaitTime={post.formattedWaitTime}
        id={post.id}
        key={index}/>
      )}
    </React.Fragment>
  );
}

PostList.propTypes = {
  postList: PropTypes.object,
  onPostSelection: PropTypes.func
};

export default PostList;