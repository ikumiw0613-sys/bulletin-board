import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
function Home() {
  const [threads, setThreads] = useState([]);
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

  return (
    <div>
      <h2>スレッド一覧</h2>
      <ul>
        {threads.map((thread) => (
          <li key={thread.id}>
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
