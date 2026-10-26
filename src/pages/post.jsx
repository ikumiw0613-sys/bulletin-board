import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function Post() {
  const [posts, setPosts] = useState([]);

  
  const { thread_id } = useParams();
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

  return (
    <div>
      <h2>投稿一覧</h2>
      <ul>
        {posts.map((item) => (
          <li key={item.id}>{item.post}</li>
        ))}

      </ul>
    </div>
  )
}

export default Post;