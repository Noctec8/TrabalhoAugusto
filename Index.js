import { useEffect, useState } from "react";
import "../styles/Index.css";
import Navbar from "../components/Navbar";

const PostCard = ({ post }) => {
  const { id, name, slug, content, createdAt } = post;

  const limitedContent =
    content.length > 25 ? content.substring(0, 25) + "..." : content;

  return (
    <div key={id} className="post-card">
      <h2>{name}</h2>
      <p>{limitedContent}</p>
      <p>{createdAt}</p>
      <a href={`/postagem/${slug}`} className="read-more-link">
        Ler mais
      </a>
    </div>
  );
};

const Index = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3030/api/posts").then((e) => {
      e.json().then((result) => {
        setPosts(result.posts.reverse());
      });
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Todas as postagens</h1>
        {posts.length == 0 && <p>Nenhuma postagem encontrada.</p>}
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};

export default Index;
