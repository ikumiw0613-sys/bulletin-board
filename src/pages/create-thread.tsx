import { useState, useEffect } from "react";

function Create_thread() {
  const [newTitle, setNewTitle] = useState("");
  const createThread = () => {  
      fetch("https://railway.bulletinboard.techtrain.dev/threads", { method: "POST", body: JSON.stringify({ title: newTitle }) })
      .then(() => {
        alert("スレッド作成");
        setNewTitle("");
      })
      .catch(() => alert("作成エラー"));
  }

  return (
    <div>
      <h2>スレッド作成</h2>
      <input type = "text"
       placeholder="スレッド名を入力してね"
       value= {newTitle}
       onChange={(e) => setNewTitle(e.target.value)}
       />

       <button onClick={createThread}>作成</button>
    </div>
  );
}
export default Create_thread;