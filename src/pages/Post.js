import React from "react";
import { useNavigate } from "react-router-dom";

export default function Post({ item }) {
  const navigate = useNavigate();
  const navigateToDetail = () => {
    navigate(`/post-detail/${item.id}`, { replace: true });
  };

  return (
    <div className="item my-5 p-4">
      <div className="item-title mb-3 ms-2">
       <h4>{item.title}</h4>
      </div>
      <p className="ms-5">{item.body.substr(0, 150)} . . . 
        <a className="" onClick={navigateToDetail}>
          selengkapnya
        </a>
      </p>
    </div>
  )
}