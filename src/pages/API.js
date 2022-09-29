import React, { useState, useEffect } from "react";
import axios from "axios";

const API = "https://jsonplaceholder.typicode.com/posts";

function useAPI() {
  const [data, setData] = useState([]);

  const getPosts = async () => {
    try {
      const res = await axios.get(API);
      setData(res.data);
    } catch (e) {
      //
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return { data };
}

export default useAPI;