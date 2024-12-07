import React from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 36.8065, 
  lng: 10.1815,
};

const locations = [
  { lat: 36.8065, lng: 10.1815, label: "GoMyCode Hackerspace, Tunis" },
  { lat: 36.8028, lng: 10.1796, label: "N° 40 Ave Habib Bourguiba" },
  { lat: 36.8662, lng: 10.1658, label: "76 Ave d'Afrique, Ariana" },
];

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAh1fUxIqMpYWyA8sm52oHBhh8QpFX8UQ8",
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
      {locations.map((location, index) => (
        <Marker
          key={index}
          position={{ lat: location.lat, lng: location.lng }}
          title={location.label}
        />
      ))}
    </GoogleMap>
  );
};

export default Map;
