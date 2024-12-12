import React, { useEffect, useState, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

const Map = ({ address }) => {
  const [coordinates, setCoordinates] = useState([0, 0]); 
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
            address
          )}&format=json`
        );
        const data = await response.json();
        if (data && data.length > 0) {
          const { lat, lon } = data[0];
          const parsedCoordinates = [parseFloat(lon), parseFloat(lat)];
          console.log("Fetched Coordinates:", parsedCoordinates);
          setCoordinates(parsedCoordinates);
        } else {
          console.error("No results found for address:", address);
          setCoordinates([0, 0]); 
        }
      } catch (error) {
        console.error("Error fetching coordinates:", error);
        setCoordinates([0, 0]);
      }
    };

    if (address) {
      fetchCoordinates();
    }
  }, [address]);

  useEffect(() => {
    if (coordinates[0] === 0 && coordinates[1] === 0) {
      return; 
    }

    if (!mapRef.current) {

      mapRef.current = new maplibregl.Map({
        container: mapContainerRef.current,
        style: "https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json",
        center: coordinates, 
        zoom: 12,
      });

      mapRef.current.addControl(new maplibregl.NavigationControl());

      markerRef.current = new maplibregl.Marker()
        .setLngLat(coordinates)
        .addTo(mapRef.current);
    } else {
      mapRef.current.flyTo({
        center: coordinates,
        essential: true,
      });

      if (markerRef.current) {
        markerRef.current.setLngLat(coordinates);
      }
    }
  }, [coordinates]);

  return (
    <div>
      <h2>Map</h2>
      <div
        ref={mapContainerRef}
        style={{ width: "800px", height: "400px", marginTop: "20px" }}
      >
        {coordinates[0] === 0 && coordinates[1] === 0 && <p>Loading map...</p>}
      </div>
    </div>
  );
};

export default Map;
