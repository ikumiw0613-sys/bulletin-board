import { useState, useEffect } from "react";
import Home from "./home";
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';

function Create_thread() {
  const [newTitle, setNewTitle] = useState("");

  const navigate = useNavigate();
  
  const createThread = () => {  
      fetch("https://railway.bulletinboard.techtrain.dev/threads", { method: "POST", body: JSON.stringify({ title: newTitle }) })
      .then(() => {
        alert("スレッド作成");
        setNewTitle("");
      })
      .catch(() => alert("作成エラー"));
  }

  const handleOnClick = () =>  {
    navigate("/");
  }

  return (
    <div>
      <h2>スレッド作成</h2>
      <input type = "text"
       placeholder="スレッド名を入力してね"
       value= {newTitle}
       onChange={(e) => setNewTitle(e.target.value)}
       />

       <button onClick={createThread} className="button">作成</button>

       <div>

        <button onClick={handleOnClick} className="button"> HOME</button>
       </div>
    </div>
  );
}
export default Create_thread;