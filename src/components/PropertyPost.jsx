// import React, { useState } from "react";
// import axios from "axios";
// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

// export default function PostRentalHousing() {
//   const [location, setLocation] = useState({ lat: 0, lng: 0 });
//   const { isLoaded, loadError } = useLoadScript({
//     googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
//   });

//   const handleMapClick = (e) => {
//     setLocation({ lat: e.latLng.lat(), lng: e.latLng.lng() });
//   };

//   const handlePost = async () => {
//     try {
//       await axios.post("/api/rental-housing", { location });
//       // Handle success or redirect
//     } catch (error) {
//       // Handle error
//     }
//   };

//   if (loadError) return "Error loading maps";
//   if (!isLoaded) return "Loading maps...";

//   return (
//     <div>
//       <h2>Post Rental Housing</h2>
//       <GoogleMap
//         mapContainerStyle={{ height: "400px", width: "100%" }}
//         center={location}
//         zoom={10}
//         onClick={handleMapClick}
//       >
//         <Marker position={location} />
//       </GoogleMap>
//       <button onClick={handlePost}>Post</button>
//     </div>
//   );
// };

 