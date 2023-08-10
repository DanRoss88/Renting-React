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
import React, { useState } from "react";



 const OwnersPropertySelector = () => {
  const [selected, setSelected] = useState(null);
  const [value, setValue] = useState("");
  const { ready, suggestions : {status, data}, clearSuggestions } =
    usePlacesAutocomplete();

    const handleSelect = async (address) => {
      setValue(address, false);
      clearSuggestions();
    
      const results = await getGeocode({ address });
      const { lat, lng } = getLatLng(results[0]);
      setSelected({ lat, lng });
      
    };

  return (
    <div className="properties-container">
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


export default OwnersPropertySelector;