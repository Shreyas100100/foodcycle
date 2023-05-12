// import React from 'react';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <nav className="navbar">
//         <ul>
//           <li><a href="#">Home</a></li>
//           <li><a href="#">My Listings</a></li>
//           <li><a href="#">Add Listing</a></li>
//           <li><a href="#">My Profile</a></li>
//         </ul>
//       </nav>
//       <div className="cards-container">
//         <div className="card">
//           <h2>Restaurant Name</h2>
//           <p>Surplus Food (Feeds x people)</p>
//           <p>Location</p>
//           <button>Claim</button>
//         </div>
//         <div className="card">
//           <h2>Restaurant Name</h2>
//           <p>Surplus Food (Feeds x people)</p>
//           <p>Location</p>
//           <button>Claim</button>
//         </div>
//         <div className="card">
//           <h2>Restaurant Name</h2>
//           <p>Surplus Food (Feeds x people)</p>
//           <p>Location</p>
//           <button>Claim</button>
//         </div>
//         <div className="card">
//           <h2>Restaurant Name</h2>
//           <p>Surplus Food (Feeds x people)</p>
//           <p>Location</p>
//           <button>Claim</button>
//         </div>
//         <div className="card">
//           <h2>Restaurant Name</h2>
//           <p>Surplus Food (Feeds x people)</p>
//           <p>Location</p>
//           <button>Claim</button>
//         </div>
//         <div className="card">
//           <h2>Restaurant Name</h2>
//           <p>Surplus Food (Feeds x people)</p>
//           <p>Location</p>
//           <button>Claim</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
import React from "react";
import "./App.css";

function App() {
  const restaurants = [
    {
      name: "DURVANKUR",
      surplusFood: "Feeds 5 people",
      location: "DURVANKUR",
      imageUrl: "https://example.com/restaurant1.jpg",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.5255960904638!2d73.87526031471972!3d18.459836787444356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eaf286a4d209%3A0x349711c6894ed5dd!2sGokul%20Pure%20Veg!5e0!3m2!1sen!2sin!4v1680465952982!5m2!1sen!2sin" ,
    },
    {
      name: "GOKUL",
      surplusFood: "Feeds 5 people",
      location: "GOKUL",
      imageUrl: "https://example.com/restaurant1.jpg",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.5255960904638!2d73.87526031471972!3d18.459836787444356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eaf286a4d209%3A0x349711c6894ed5dd!2sGokul%20Pure%20Veg!5e0!3m2!1sen!2sin!4v1680465952982!5m2!1sen!2sin" ,
    },
    {
      name: "KANHA",
      surplusFood: "Feeds 5 people",
      location: "KANHA",
      imageUrl: "https://example.com/restaurant1.jpg",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.5255960904638!2d73.87526031471972!3d18.459836787444356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eaf286a4d209%3A0x349711c6894ed5dd!2sGokul%20Pure%20Veg!5e0!3m2!1sen!2sin!4v1680465952982!5m2!1sen!2sin" ,
    },
    {
      name: "ANNA",
      surplusFood: "Feeds 5 people",
      location: "ANNA",
      imageUrl: "https://example.com/restaurant1.jpg",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.5255960904638!2d73.87526031471972!3d18.459836787444356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eaf286a4d209%3A0x349711c6894ed5dd!2sGokul%20Pure%20Veg!5e0!3m2!1sen!2sin!4v1680465952982!5m2!1sen!2sin" ,
    },
    {
      name: "AMANTRAN",
      surplusFood: "Feeds 5 people",
      location: "AMANTRAN",
      imageUrl: "https://example.com/restaurant1.jpg",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.5255960904638!2d73.87526031471972!3d18.459836787444356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eaf286a4d209%3A0x349711c6894ed5dd!2sGokul%20Pure%20Veg!5e0!3m2!1sen!2sin!4v1680465952982!5m2!1sen!2sin" ,
    },
  ];

  return (
    <div className="App">
      <nav className="navbar">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">My Listings</a>
          </li>
          <li>
            <a href="#">Add Listing</a>
          </li>
          <li>
            <a href="#">My Profile</a>
          </li>
        </ul>
      </nav>
      <div className="cards-container">
        {restaurants.map((restaurant, index) => (
          <div className="card" key={index}>
            <img src={restaurant.imageUrl} alt={restaurant.name} />
            <h2>{restaurant.name}</h2>
            <p>{restaurant.surplusFood}</p>
            <p>{restaurant.location}</p>
            <iframe
              title="Map"
              src={restaurant.mapUrl}
              allowFullScreen
            ></iframe>
            <button>Claim</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
