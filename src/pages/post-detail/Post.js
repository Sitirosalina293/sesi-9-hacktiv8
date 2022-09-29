import React from "react";
import { useParams } from "react-router-dom";
import useAPI from "../API";


import useAPI2 from "../post-detail/API2";


function Post() {
  
  let comments = useAPI2();
  let params = useParams();
  let items = useAPI();

  let item =
    items.data && items.data.find((item) => item.id === Number(params.itemId));
  let comment =
    comments.data && comments.data.find((comment)=> comment.postId === Number (params.itemId));

  return (
    <>
      <div>
        <h1>
          <strong>{item && item.title}</strong>
        </h1>

        <p className='my-5'>
          <strong>{item && item.body}</strong>
        </p>
      </div>
      <div className="comment">
        <h5 className="p-3">Comment</h5>
        <p className="ps-3">
          <strong>{comment && comment.name}</strong>
        </p>
        <p className="ps-3">
          {comment && comment.body}
        </p>
      </div>
    </>
  );
}

export default Post;