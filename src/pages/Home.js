import React from "react";
import useAPI from "./API";
import Post from "./Post";
import './home.css';

function Home() {
  const { data } = useAPI();
  return (
    <div>
      <div>
        <h1 className ="header py-3 fw-bold ps-4">Post</h1>
      </div>
      <div className="container mt-4">
        {data && Object.keys(data).map((item) => (
          <Post key={item} item={data[item]} />
        ))}
      </div>
    </div>
  );
}

export default Home;