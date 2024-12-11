import React from 'react';
import '../styles/ScrollingImages.scss';

import Image1 from '../assets/images/image1.jpg';
import Image2 from '../assets/images/image2.jpg';
import Image3 from '../assets/images/image3.jpg';
import Image4 from '../assets/images/image4.jpg';

const imagesColumn1 = [Image1, Image3];
const imagesColumn2 = [Image2, Image4];

function HeroSection() {
  return (
    <div className="hero">
      {/* Search Bar */}
      <div className="search-bar-wrapper">
  <div className="search-bar">
    <div className="input-wrapper">
      <img src={require('../assets/images/search-icon.png')} alt="Search Icon" className="icon" />
      <input type="text" placeholder="Condition, procedure, specialty..." />
    </div>
    <div className="input-wrapper">
      <img src={require('../assets/images/location-icon.png')} alt="Location Icon" className="icon" />
      <input type="text" placeholder="City, state, or zipcode" />
    </div>
    <div className="input-wrapper">
      <img src={require('../assets/images/insurance-icon.png')} alt="Insurance Icon" className="icon" />
      <input type="text" placeholder="Insurance carrier" />
    </div>
    <button>
      <img src={require('../assets/images/find-icon.png')} alt="Find Icon" className="button-icon" />
      Find now
    </button>
  </div>
</div>


      {/* Hero Content */}
      <div className="hero-container">
        {/* Scrolling Images */}
        <div className="scrolling-images">
          <div className="column column-1">
            {imagesColumn1.map((image, index) => (
              <img key={index} src={image} alt={`Column 1 Image ${index + 1}`} />
            ))}
          </div>
          <div className="column column-2">
            {imagesColumn2.map((image, index) => (
              <img key={index} src={image} alt={`Column 2 Image ${index + 1}`} />
            ))}
          </div>
        </div>

        {/* Text Section */}
        <div className="hero-content">
          <h1>
            Book an appointment with{' '}
            <span className="highlight">lifestyle medicine</span> experts
          </h1>
          <p>Optimize your lifestyle and reverse chronic diseases.</p>
        </div>
      </div>

      {/* Divider */}
      <div className="slant-divider"></div>
    </div>
  );
}

export default HeroSection;