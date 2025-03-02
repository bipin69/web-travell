
import "./HotelList.css"; // Custom styles
import Hom from "../assets/home.jpg"; // Import your local image
import Hotel2 from "../assets/blue_hotel.jpg"; // Import any additional images
import Hotel3 from "../assets/hotel5.jpeg"; // Import any additional images

const hotels = [
  {
    name: "Mustang Trip",
    address: "Mustang",
    rating: "9.4/10",
    reviews: "2500+ Happy Customers",
    image: Hom, // Use the imported image directly
  },
  {
    name: "ABC Camp Trip",
    address: "Myagdi ",
    rating: "9.4/10",
    reviews: "2500+ Happy Trekker",
    image: Hotel2, // Reuse the imported image if needed
  },
  {
    name: "Rara Trip",
    address: "Mugu",
    rating: "9.4/10",
    reviews: "2500+ Happy Customers",
    image: Hotel3, // Use the correct imported path for this image
  },
];

const HotelList = () => {
  return (
    <div className="container my-4 " style={{ borderRadius: '20px', overflow: 'hidden' }}>
      {hotels.map((hotel, index) => (
        <div className="hotel-box d-flex align-items-center my-3 shadow rounded" key={index}>
          <div className="hotel-image">
            <img
              src={hotel.image} // Reference the `image` property correctly
              alt={hotel.name}
              className="img-fluid rounded"
            />
          </div>
          <div className="hotel-info flex-grow-1 px-3">
            <h5 className="hotel-name mb-1">{hotel.name}</h5>
            <p className="hotel-address text-muted mb-1">{hotel.address}</p>
            <p className="hotel-reviews text-muted mb-1">
              🌟 {hotel.rating} | {hotel.reviews}
            </p>
          </div>
          <div className="button">
            <button className="btn btn-primary btn-sm">Explore</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HotelList;