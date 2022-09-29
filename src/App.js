import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import PostDetil from "./pages/post-detail/PostDetil";
import Post from "./pages/post-detail/Post";

function App() {
  return (
    <div className='layout my-12'>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/post-detail' element={<PostDetil />}>
          <Route path=':itemId' element={<Post />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;