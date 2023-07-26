import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import React, { useState, useCallback, useEffect} from "react";



const containerStyle = {
  width: "60vw",
  height: "70vh",
};

const center = {
  lat: 49.2497,
  lng: -123.1193,
};

const Map = ({ apiKey }) => {


  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: apiKey,
  });
  console.log("API Key from .env:", apiKey);

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