import React from "react";
import "./Home.css";
import Homeimage from "../assets/Images/thumb-1920-1006098.png";
import { useNavigate , useOutletContext} from "react-router-dom";



function Home1() { 
  let navi = useNavigate();
  const { searchQuery } = useOutletContext();
  const blogs = [
    {
      category: "Professional",
      posts: [
        {
          id: 1,
          date: "12 Aug 2024",
          title: "Corporate Growth Hacks",
          desc: "Explore proven strategies to grow your career in corporate world.",
          rating: 4.5,
          comments: 12,
          likes: 45,
          author: "Raji",
          img: "https://miro.medium.com/v2/resize:fit:1400/1*qSIVN9fWM_DrD_sOhFlJQA.gif"
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
          img: "https://png.pngtree.com/background/20250102/original/pngtree-a-business-team-and-its-leader-standing-together-leadership-concept-a-picture-image_15485169.jpg"
        }
      ]
    },
    {
      category: "Travel",
      posts: [
        {
          id: 3,
          date: "05 Jul 2024",
          title: "Exploring Paris",
          desc: "A complete guide to enjoying the magical city of Paris.",
          rating: 5,
          comments: 25,
          likes: 120,
          author: "Anu",
          img: "https://i.pinimg.com/originals/c7/cb/30/c7cb3072d3713a3d75a94c059f1e1049.gif"
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
          img: "https://cdn.dribbble.com/userupload/24320228/file/original-c511ee999e6c674c0577efa66e842f00.gif"
        }
      ]
    },
    {
      category: "Food",
      posts: [
        {
          id: 5,
          date: "01 Jun 2024",
          title: "Creamy Saucy Pasta",
          desc: "Delicious variety and Creamy Pasta that melts my heart and stomach.",
          rating: 5,
          comments: 30,
          likes: 150,
          author: "Kavi",
          img: "https://images3.alphacoders.com/134/thumb-1920-1345550.jpeg"
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
          img: "https://images6.alphacoders.com/135/thumb-1920-1354476.png"
        }
      ]
    },
    {
      category: "Inspirations",
      posts: [
        {
          id: 7,
          date: "11 Mar 2024",
          title: "Positive Mindset",
          desc: "Tips to develop a strong and positive outlook on life.",
          rating: 4.8,
          comments: 14,
          likes: 60,
          author: "Priya",
          img: "https://images4.alphacoders.com/138/thumb-1920-1385292.png"
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
          img: "https://images4.alphacoders.com/137/thumb-1920-1373380.png"
        }
      ]
    },
    {
      category: "Tech",
      posts: [
        {
          id: 9,
          date: "18 Jan 2024",
          title: "AI in 2024",
          desc: "Artificial Intelligence trends shaping the future.",
          rating: 5,
          comments: 40,
          likes: 210,
          author: "Raji",
          img: "https://images5.alphacoders.com/134/thumb-1920-1347838.png"
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
          img: "https://images8.alphacoders.com/137/thumb-1920-1372179.jpeg"
        }
      ]
    }
  ];

  const filteredBlogs = blogs.map((category) => {
    const filteredPosts = category.posts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.desc.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return { ...category, posts: filteredPosts };
  }).filter(category => category.posts.length > 0); 


  return (
     <div>
      <div className="home-img">
        <img src={Homeimage} alt="Home" />
        <div className="overlay">
          <div className="welcome">Welcome to My Personal Blog Page</div>
          <div className="im">I'm</div>
          <div className="myname">Rajeshwari Govindaraj</div>
          <p className="blog-para">
            Life is a beautiful journey filled with moments to cherish and lessons to learn. Through this blog, I share my thoughts, experiences, and stories that inspire me every day. Whether it’s about technology, travel, or personal growth, each post is a reflection of my journey and perspective. Stay connected and enjoy reading!
          </p>
        </div>
      </div>

      <div className="blogs">
        <h1>My Blogs</h1>
        {filteredBlogs.length === 0 ? (
          <p>No posts found.</p>
        ) : (
          filteredBlogs.map((category) => (
            <div key={category.category}>
              <h2 className="category-name">{category.category}</h2>
              <div>
                {category.posts.map((post) => (
                  <div key={post.id} className="post-card">
                    <img src={post.img} className="blogs-image" alt={post.title} />
                    <div>
                      <p className="post-date">{post.date}</p>
                      <p className="post-title">{post.title}</p>
                      <p className="post-descrip">{post.desc}</p>
                      <div className="comments">
                        <p>⭐{post.rating}  💬{post.comments} ❤️ {post.likes}</p>
                        <p>{post.author}</p>
                      </div>
                      <button className="arrow" onClick={() => navi(`/SinglePost/${post.id}`)}>
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Home1;
