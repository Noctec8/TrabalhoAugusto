import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/Post.css";
import Navbar from "../components/Navbar";

const Post = () => {
  const { slug } = useParams();
  const [post, setPost] = useState();
  useEffect(() => {
    fetch(`http://localhost:3030/api/posts/${slug}`).then((e) => {
      e.json().then((res) => {
        setPost(res);
      });
    });
  }, []);

  if (post) {
    return (
      <>
        <Navbar />
        <div className="post-container">
          <a href="/" className="back-to-posts-link">
            &lt; Voltar para todas as postagens
          </a>
          <div className="post-details">
            <h1>{post.name}</h1>
            <p>{post.content}</p>
            <p>{post.createdAt}</p>
          </div>
        </div>
      </>
    );
  }
};

export default Post;
