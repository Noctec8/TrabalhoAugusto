import React, { useState, useEffect } from "react";
import "../styles/Dashboard.css";
import Navbar from "../components/Navbar";

const DashboardPage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    try {
      if (
        document.cookie
          .split(";")
          .filter((x) => x.includes("_mxtheuz"))[0]
          .split("=")[1] != "true"
      ) {
        window.location.href = "/login";
      }
    } catch (e) {
      window.location.href = "/login";
    }
  }, []);

  const [newPostData, setNewPostData] = useState({
    name: "",
    content: "",
    slug: "",
  });

  const loadPosts = async () => {
    const response = await fetch("http://localhost:3030/api/posts");
    const data = await response.json();
    setPosts(data.posts.reverse());
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const createNewPost = async () => {
    const response = await fetch("http://localhost:3030/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPostData),
    });

    loadPosts();

    setNewPostData({ name: "", content: "", slug: "" });
  };

  return (
    <>
      <Navbar />
      <div className="dashboard-container">
        <div className="dashboard-header">
          <h1>Painel do administrador</h1>
        </div>

        <div className="dashboard-new-post-form">
          <h2>Criar Nova Postagem</h2>
          <label>
            Nome
            <input
              type="text"
              value={newPostData.name}
              onChange={(e) =>
                setNewPostData({ ...newPostData, name: e.target.value })
              }
            />
          </label>
          <label>
            Conteúdo
            <textarea
              value={newPostData.content}
              onChange={(e) =>
                setNewPostData({ ...newPostData, content: e.target.value })
              }
            />
          </label>
          <label>
            Slug
            <input
              type="text"
              value={newPostData.slug}
              onChange={(e) =>
                setNewPostData({ ...newPostData, slug: e.target.value })
              }
            />
          </label>
          <button onClick={createNewPost}>Criar Post</button>
        </div>

        <ul className="dashboard-posts-list">
          {posts.map((post) => (
            <li key={post.id} className="dashboard-post-item">
              <h2>{post.name}</h2>
              <p>{post.content}</p>
              <p>{post.createdAt}</p>
              <p>ID: {post.id}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default DashboardPage;
