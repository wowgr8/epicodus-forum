import React from "react";

function PostDetail(){

  return (
    <React.Fragment>
      <h1>Post Detail</h1>
      <h3>UserName</h3>
      <p><em>Subject</em></p>
      {/* <button onClick={ props.onClickingEdit }>Update Post</button>
      <button onClick={()=> onClickingDelete(ticket.id) }>Delete Post</button> */}
      <hr/>
    </React.Fragment>
  );
}

export default PostDetail;