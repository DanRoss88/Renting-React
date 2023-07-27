import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import React, { useState, useEffect, useMemo } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import styles from "../../styles/Map.module.css"

const containerStyle = {
  width: "60vw",
  height: "70vh",
  position: "relative",
};

const center = {
  lat: 49.2497,
  lng: -123.1193,
};

const Map = ({ apiKey }) => {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: apiKey,
  });

  const [map, setMap] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 8000);

    return () => clearTimeout(timeout);
  }, []);

  const onLoad = (map) => {
    setMap(map);
  };

  const onUnmount = () => {
    setMap(null);
  };

  if (loadError) {
    return <div>Error loading Google Maps</div>;
  }

  const PlacesAutocomplete = ({ setSelected }) => {
    const { ready, value, setValue, suggestions : {status, data}, clearSuggestions } =
      usePlacesAutocomplete();

      const handleSelect = async (address) => {
        setValue(address, false);
        clearSuggestions();
      
        const results = await getGeocode({ address });
        const { lat, lng } = getLatLng(results[0]);
        setSelected({ lat, lng });
        
      };

    return (
      <div>
        <Combobox onSelect={handleSelect}>
          <ComboboxInput
            value={value}
            onChange={(e) => setValue(e.target.value)} 
            disabled={!ready}
            className="combo_box"
            placeholder="Search an Address"
          />
          <ComboboxPopover>
            <ComboboxList>
              { status === "OK" && 
              data.map(({ place_id, description }) => ( 
                <ComboboxOption
                  key={place_id}
                  value={description}
                  className="combo_box_option"
                />
              ))}
            </ComboboxList>
          </ComboboxPopover>
        </Combobox>
      </div>
    );
  };
  

  


  return (
    <div style={containerStyle}>
      {loading && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <ClipLoader color={"36d7b7"} loading={loading} size={150} />
          <h1 style={{ color: "white", textAlign: "center" }}>
            Loading Map...
          </h1>
        </div>
      )}
      {isLoaded && (
        <div>
          <div className={styles.propertiesContainer}>
            <PlacesAutocomplete setSelected={setSelected} />
          </div>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={() => {
              onLoad();
              setLoading(false);
            }}
            onUnmount={onUnmount}
          >
            {selected && <Marker position={selected} />}
            {/* Child components, such as markers, info windows, etc. */}
            <></>
          </GoogleMap>
       </div>
      )}
    </div>
  );
};




export default Map;
