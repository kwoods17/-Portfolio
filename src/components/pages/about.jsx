// About.jsx
import React from 'react';
import './about.css'; 
// import profileImage from './path/to/your/profile_image.jpg'; 

function About() {
  return (
    <div className="about-page">
      <section className="intro">
        {/* <img src={profileImage} alt="Your Profile" className="profile-image" /> */}
        <div className="intro-text">
          <h2>About Me</h2>
          <p>Web developer in the making, fueled by curiosity and a whole lot of caffeine.</p>
        </div>
      </section>


      <section className="photo-credit"> 
        <p>Photo by Nathan Dumlao on Unsplash</p> 
      </section>
    </div>
  );
}

export default About;
