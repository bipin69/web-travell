import React from 'react';
import './AboutUs.css'; // Include your CSS for styling
import Hom from "../assets/home.jpg";
import Laptop from "../assets/Laptop.jpg";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      {/* What We Offer Section */}
      <section className="offer-section" id="about"> {/* Added id="about" */}
        <h2 className="offer-title">What We Are</h2>
      </section>

      {/* About Section with Image and Text */}
      <section className="about-section">
        <div className="about-image">
          <img
            src={Laptop}
            alt="Team working on laptops"
            className="responsive-image"
          />
        </div>
        <div className="about-text">
          <p>          
            Ghumantey is your ultimate travel companion, 
            making trip planning seamless and exciting. 
            Whether you're looking for hidden gems or popular destinations,
            our user-friendly interface and extensive accommodation options ensure you find the perfect stay. 
            Discover, explore, and book effortlessly with Ghumantey—Explore More,Worry Less.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
