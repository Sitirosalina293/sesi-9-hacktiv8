import { useState, useEffect } from "react";
import axios from "axios";

const API = "https://jsonplaceholder.typicode.com/comments";

function useAPI2() {
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

export default useAPI2;