import React, { useEffect, useState } from "react";
import myImage from "../assets/360_F_643686558_Efl6HB1ITw98bx1PdAd1wy56QpUTMh47-removebg-preview.png";
import './Home.css'
import { NavLink, Outlet } from "react-router-dom";

function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  const [searchQuery, setSearchQuery] = useState("");

const handleSearch = (e) => {
  setSearchQuery(e.target.value);
};
  return (
   <>
   <div className={darkMode ? "app dark" : "app light"}>
    <div className="container1"> 
    <div className="container1-col1">
      <div className="col1-conten1">
        <div className="prof-img"><img src={myImage}/></div>
        <div className="name">Raji Govindaraj</div>
        <div className="description">I am Rajeshwari, MERN Stack Developer, passionate about building web apps…</div>
        <div className="prof-links">
          <div><i class="fa-brands fa-whatsapp"></i></div>
          <div><i class="fa-brands fa-github"></i></div>
          <div><i class="fa-brands fa-linkedin"></i></div>
          <div><i class="fa-brands fa-facebook"></i></div>
        </div>
      </div>
      <nav>
        <NavLink to='/'  className="nav-item">Home</NavLink>
        <NavLink to='/BlogPost' className="nav-item">Blog Posts</NavLink>
      </nav>
      <div className="categories"> CATEGORIES
        <div>Professional</div>
        <div>Travel</div>
        <div>Food</div>
        <div>Inspirations</div>
        <div>Tech</div>
      </div>
    </div>
    <div className="container1-col2">
      <div className="col2-content1">
         <button className="theme-toggle-btn" onClick={toggleTheme}>
        {darkMode ? "🌞" : "🌙"}
      </button>

      <div className="search-input">
  <input
    type="search"
    placeholder="Search..."
    value={searchQuery}
    onChange={handleSearch}
  />
</div>
      </div>
      <hr/>
      <Outlet  context={{ searchQuery }}></Outlet>
    </div>
   </div>
   </div>
   </>
  );
}

export default Home;
