import "./Service.css"

import Calender from "../assets/Calender.jpg";
import Pay from "../assets/Pay.jpg";

import Blue_hotel from "../assets/blue_hotel.jpg";
import Room from "../assets/room.jpg";

const Service = () => {
  return (
    <div className="services-container" id="service"> {/* Added id="service" */}
      <h2 className="services-title">What We Offer</h2>
      <div className="services-grid">
        <div className="service-card">
          <img
            src={Calender}
            alt="Luxury Room"
            className="service-image"
          />
          <div className="service-info">
            <h3>Fast & Easy Booking</h3>
            <p>Book your next Tour in just a few clicks!</p>
          </div>
        </div>
        <div className="service-card">
          <img
            src={Pay}
            alt="Spa Services"
            className="service-image"
          />
          <div className="service-info">
            <h3>Best Price Guarantee</h3>
            <p>Get the best deals on your stays, or we match the price!</p>
          </div>
        </div>
        <div className="service-card">
          <img
            src={Blue_hotel}
            alt="Restaurant"
            className="service-image"
          />
          <div className="service-info">
            <h3>Exclusive Offers & Discounts</h3>
            <p>Don’t Miss Out on Our Best Deals!</p>
          </div>
        </div>
        <div className="service-card">
          <img
            src={Room}
            alt="Event Services"
            className="service-image"
          />
          <div className="service-info">
            <h3>Tour Reviews & Ratings</h3>
            <p>Check verified reviews from fellow travelers before booking.</p>
          </div>
        </div>
      </div>

      {/* <section className="cta-section">
        <h2>Ready to Plan Your Next Stay?</h2>
        <p>Discover the best hotels and experiences with [Your App Name].</p>
        <button className="cta-button">Explore Now</button>
      </section> */}
    
    </div>
  );
};

export default Service;
