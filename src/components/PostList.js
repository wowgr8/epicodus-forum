import React from "react";
import Post from "./Post";

function PostList(){
  return(
    <React.Fragment>
      <hr/>
      <p>Place holder for loop that displays all posts in a list.</p>
      {/* 
        {mainTicketList.map((ticket, index) =>
          <Post names={ticket.names}
            location={ticket.location}
            issue={ticket.issue}
            key={index} />
        )}
      */}
    </React.Fragment>
  );
}

export default PostList;