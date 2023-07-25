import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import React, { useState, useCallback} from "react";



const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: 49.2497,
  lng: -123.1193,
};

const Map = () => {
const api = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: api,
  });
  console.log("API Key from .env:", REACT_APP_GOOGLE_MAPS_API_KEY);

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  if (loadError) {
    return <div>Error loading Google Maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ position: "relative" }}>
     
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Map;