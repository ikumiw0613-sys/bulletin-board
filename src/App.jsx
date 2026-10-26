import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "./pages/home";
import Create_thread from "./pages/create-thread";
import Post from "./pages/post";

function App() {

  return (
    <BrowserRouter>
      <nav>
        <Link to = "/">Home</Link>
        <Link to="create">作成</Link>

      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/create" element={<Create_thread />}/>
        <Route path="/threads/:thread_id" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );

};
export default App;