import { useState,useEffect} from "react";

const FetchData = () => {
  const [threads, setThreads ] = useState([]);
  useEffect(() => {


    fetch("https://railway.bulletinboard.techtrain.dev/threads",{method: "GET"})
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      setThreads(json);
    })
    .catch(() => alert("error"));
  },[]);

  return (
    <div style={{ padding:'20px'}}>
      <h2>スレッド一覧</h2>
      <ul>
        {threads.map((threads) => (
          <li key={threads.id}></li>
        ))}
      </ul>
    </div>
  );
};

export default FetchData;