import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Create_thread from "./create-thread";
function Home() {
  const [threads, setThreads] = useState([]);

  const navigate = useNavigate();


  const fetchTreads = () => {
    fetch("https://railway.bulletinboard.techtrain.dev/threads", { method: "GET" })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setThreads(json);
      })
      .catch(() => alert("error"));
  };
  useEffect(() => {
    fetchTreads();
  }, []);

  const handleOnClick = () => {
    navigate("/create");
  };

  return (
    <div className="thread-container">
      <h2>スレッド一覧</h2>
      <div className="thread-create">
        <button onClick={handleOnClick} className="button">作成</button>
      </div>
      <ul className="thread-list">
        {threads.map((thread) => (
          <li key={thread.id} className="thread-card">
            <Link to={`/threads/${thread.id}`}>
              {thread.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
