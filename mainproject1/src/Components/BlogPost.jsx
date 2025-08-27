import React, { useState } from "react";
import useLocalStorage from "./useLocalStorage";
import { useOutletContext } from "react-router-dom";

function BlogPost() {
  const [posts, setPosts] = useLocalStorage("posts", []); 
  const { searchQuery } = useOutletContext();
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: "",
    imageUrl: "",
    date: "",
  });

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPosts = [...posts, formData];
    setPosts(newPosts); // automatically updates localStorage
    setFormData({ title: "", content: "", author: "", imageUrl: "", date: "" });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>✍️ Create Blog Post</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          name="title"
          placeholder="Enter title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <br />
        <textarea
          name="content"
          placeholder="Enter content"
          value={formData.content}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="text"
          name="author"
          placeholder="Enter author"
          value={formData.author}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="text"
          name="imageUrl"
          placeholder="Enter image URL"
          value={formData.imageUrl}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit" className="addpost">Add Post</button>
      </form>

      
    <div style={{ padding: "20px" }}>
      <h2>📰 Blog Posts</h2>
      {filteredPosts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        filteredPosts.map((post, index) => (
          <div key={index} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px", borderRadius: "8px" }}>
            <h3>{post.title}</h3>
            <img src={post.imageUrl} alt={post.title} style={{ width: "200px", height: "150px", objectFit: "cover" }} />
            <p>{post.content}</p>
            <p><b>Author:</b> {post.author}</p>
            <p><b>Date:</b> {post.date}</p>
          </div>
        ))
      )}
    </div>
    </div>
  );
}

export default BlogPost;
