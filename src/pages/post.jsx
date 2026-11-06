import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Create_post from "./create-post";
import Home from "./home";
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
function Post() {
  const [posts, setPosts] = useState([]);

  
  const { thread_id } = useParams();

  const navigate = useNavigate();
  const fetchPosts = (thread_id) => {
    fetch(`https://railway.bulletinboard.techtrain.dev/threads/${thread_id}/posts`, { method: "GET" })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setPosts(json.posts || []);
      })
      .catch(() => alert("エラー"))
  };
  useEffect(() => {
    if (thread_id) {
      fetchPosts(thread_id);
    }
  }, [thread_id]);

  const handleOnClick = () => {
    navigate("/")
  }

  return (
    <div>
      <h2>投稿一覧</h2>
      <ul className="post-list">
        {posts.map((item) => (
          <li key={item.id} className="post-card">{item.post}</li>
        ))}

      </ul>

      <Create_post onPostCreated={() => fetchPosts(thread_id)} />

      <div className="post-button">
        <button onClick={handleOnClick} className="button">HOME</button>
      </div>
    </div>
  )
}

export default Post;