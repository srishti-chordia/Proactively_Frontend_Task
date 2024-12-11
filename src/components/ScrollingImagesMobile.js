import React from 'react';
import '../styles/ScrollingImagesMobile.scss';

import Image1 from '../assets/images/image1.jpg';
import Image2 from '../assets/images/image2.jpg';
import Image3 from '../assets/images/image3.jpg';
import Image4 from '../assets/images/image4.jpg';

const images = [Image1, Image2, Image3, Image4];

function ScrollingImagesMobile() {
  return (
    <div className="mobile-hero">
      {/* Hero Content */}
      <div className="mobile-hero-content">
        <h1>
          Book an appointment with{' '}
          <span className="highlight">lifestyle medicine</span> experts
        </h1>
        <p>Optimize your lifestyle and reverse chronic diseases.</p>
      </div>

      {/* Search Bar */}
      <div className="search-bar-wrapper">
        <div className="slant-divider"></div> {/* Gradient divider */}
        <div className="search-bar">
          <div className="input-wrapper">
            <img
              src={require('../assets/images/search-icon.png')}
              alt="Search Icon"
              className="icon"
            />
            <input type="text" placeholder="Condition, procedure, specialty..." />
          </div>
          <div className="input-wrapper">
            <img
              src={require('../assets/images/location-icon.png')}
              alt="Location Icon"
              className="icon"
            />
            <input type="text" placeholder="City, state, or zipcode" />
          </div>
          <div className="input-wrapper">
            <img
              src={require('../assets/images/insurance-icon.png')}
              alt="Insurance Icon"
              className="icon"
            />
            <input type="text" placeholder="Insurance carrier" />
          </div>
          <button>
            <img
              src={require('../assets/images/find-icon.png')}
              alt="Find Icon"
              className="button-icon"
            />
            Find now
          </button>
        </div>
      </div>

      {/* Scrolling Images */}
      <div className="scrolling-images-mobile">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default ScrollingImagesMobile;
