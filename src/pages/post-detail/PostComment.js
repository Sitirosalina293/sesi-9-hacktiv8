import React from "react";

export default function PostComment({ part }) {

  return (
    <div className="item my-5 p-4">
      <div className="item-title mb-3 ms-2">
       <h4>{part.name}</h4>
      </div>
      <p className="ms-5">{part.body}</p>
    </div>
  )
}