// src/components/AboutSection.jsx
import React from 'react';
import './AboutSection.css';
import pointer from '../assets/pointer.png'; // 👈 your emoji/hand image

const AboutSection = () => {
  return (
    <section className="about-section text-white py-5" id="about">
      <div className="container position-relative">
        <div className="row">
          {/* Left blob + hand image */}
          <div className="col-md-2 d-none d-md-block position-relative">
            <img src={pointer} alt="Pointer" className="pointer-img" />
          </div>

          {/* Content */}
          <div className="col-md-10">
            <h2 className="about-title"><span className="text-start">T</span>his is it. <span>😉</span></h2>
            <hr className="text-white mb-4" />
            <p>
              Anish Kr. Sinha is an Indian <strong>UI/UX Designer & Front End Developer</strong> with a passion for
              designing beautiful and functional user experiences. Typically, he’s <strong>Driven</strong> & permanently <strong>Curious</strong>. 
              He’s obsessed with designing things and even more obsessed with clean web & mobile UI.
            </p>
            <p>
              He holds a <strong>bachelor degree in Computer Applications</strong>. During his graduation, he has been actively involved in the web
              design community, building websites for clients & startups. Currently based in Bihar, India.
            </p>
            <p>
              His interests go beyond web – he helps with <strong>branding</strong>, print, and even <strong>3D floor plan</strong> design.
            </p>
            <p>
              When not designing, he’s probably sketching, watching tutorials, or hanging with friends.
            </p>
          </div>
        </div>

        {/* Decorative blobs */}
        <div className="yellow-blob blob-right"></div>
        <div className="gray-blob blob-left-top"></div>
        <div className="gray-blob blob-bottom-right"></div>
        
      </div>
    </section>
  );
};

export default AboutSection;
