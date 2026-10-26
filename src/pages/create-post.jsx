import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function Create_post({ onPostCreated }) {
  const [newPost, setNewPost] = useState("");
  const { thread_id } = useParams();
  const createPost = () => {

    if (!newPost.trim()) {
      return alert("文字を入力してください")
    }
    fetch(`https://railway.bulletinboard.techtrain.dev/threads/${thread_id}/posts`, {
      method: "POST",
      body: JSON.stringify({ post: newPost })
    })
      .then(() => {
        setNewPost("");
        if (onPostCreated) {
          onPostCreated();
        }
      })
      .catch(() => alert("作成エラー"));
  }

  return (
    <div>
      <input type="text"
        placeholder="内容を入力してね"
        value={newPost}
        onChange={(e) => setNewPost(e.target.value)}
      />

      <button onClick={createPost}>投稿</button>
    </div>
  )
}

export default Create_post;
