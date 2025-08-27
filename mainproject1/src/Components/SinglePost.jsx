import React from "react";
import { useParams } from "react-router-dom";

function SinglePost() {
  const { id } = useParams();

  const posts = [
    {
      id: 1,
      date: "12 Aug 2024",
      title: "Corporate Growth Hacks",
      desc: "Explore proven strategies to grow your career in corporate world.",
      rating: 4.5,
      comments: 12,
      likes: 45,
      author: "Raji",
      img: "https://miro.medium.com/v2/resize:fit:1400/1*qSIVN9fWM_DrD_sOhFlJQA.gif",
    },
    {
      id: 2,
      date: "20 Aug 2024",
      title: "Leadership Skills",
      desc: "Learn how to become an inspiring leader with practical tips.",
      rating: 4,
      comments: 9,
      likes: 33,
      author: "Govind",
      img: "https://png.pngtree.com/background/20250102/original/pngtree-a-business-team-and-its-leader-standing-together-leadership-concept-a-picture-image_15485169.jpg",
    },
    {
      id: 3,
      date: "05 Jul 2024",
      title: "Exploring Paris",
      desc: "A complete guide to enjoying the magical city of Paris.",
      rating: 5,
      comments: 25,
      likes: 120,
      author: "Anu",
      img: "https://i.pinimg.com/originals/c7/cb/30/c7cb3072d3713a3d75a94c059f1e1049.gif",
    },
    {
      id: 4,
      date: "15 Jul 2024",
      title: "Himalayan Trek",
      desc: "Experience the best adventure with the Himalayan trails.",
      rating: 4.7,
      comments: 18,
      likes: 89,
      author: "Raji",
      img: "https://cdn.dribbble.com/userupload/24320228/file/original-c511ee999e6c674c0577efa66e842f00.gif",
    },
    {
      id: 5,
      date: "01 Jun 2024",
      title: "Creamy Saucy Pasta",
      desc: "Delicious variety and Creamy Pasta that melts my heart and stomach.",
      rating: 5,
      comments: 30,
      likes: 150,
      author: "Kavi",
      img: "https://images3.alphacoders.com/134/thumb-1920-1345550.jpeg",
    },
    {
      id: 6,
      date: "10 Jun 2024",
      title: "Street Foods of Delhi",
      desc: "Discover the taste of Delhi through its spicy street foods.",
      rating: 4.6,
      comments: 22,
      likes: 97,
      author: "Arun",
      img: "https://images6.alphacoders.com/135/thumb-1920-1354476.png",
    },
    {
      id: 7,
      date: "11 Mar 2024",
      title: "Positive Mindset",
      desc: "Tips to develop a strong and positive outlook on life.",
      rating: 4.8,
      comments: 14,
      likes: 60,
      author: "Priya",
      img: "https://images4.alphacoders.com/138/thumb-1920-1385292.png",
    },
    {
      id: 8,
      date: "22 Mar 2024",
      title: "Daily Affirmations",
      desc: "Simple affirmations to start your day with confidence.",
      rating: 4.4,
      comments: 10,
      likes: 42,
      author: "Mani",
      img: "https://images4.alphacoders.com/137/thumb-1920-1373380.png",
    },
    {
      id: 9,
      date: "18 Jan 2024",
      title: "AI in 2024",
      desc: "Artificial Intelligence trends shaping the future.",
      rating: 5,
      comments: 40,
      likes: 210,
      author: "Raji",
      img: "https://images5.alphacoders.com/134/thumb-1920-1347838.png",
    },
    {
      id: 10,
      date: "29 Jan 2024",
      title: "React Best Practices",
      desc: "Improve your React apps with these pro tips.",
      rating: 4.9,
      comments: 35,
      likes: 180,
      author: "Kumar",
      img: "https://images8.alphacoders.com/137/thumb-1920-1372179.jpeg",
    },
  ];

  const post = posts.find((p) => p.id === Number(id));

  if (!post) return <p>Post not found!</p>;

  return (
    <div className="post-card">
      <h1>{post.title}</h1>
      <img src={post.img} className="blogs-image"></img>
      <p>
        {post.date} | {post.author}
      </p>
      <p>{post.desc}</p>
    </div>
  );
}

export default SinglePost;
