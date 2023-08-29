import './FloatingNav.css';
import React, { useState, useEffect } from 'react';
import { Map, GoogleApiWrapper, Marker, Polygon } from 'google-maps-react';
import SriLankaBoundary from '../../Data/SriLankaBoundary.json';

const mapStyles = {
  position: 'relative',
  width: '80%',
  height: '45%',
  
};

const MapContainer = (props) => {
  const [markerPosition, setMarkerPosition] = useState(null);
  const [convertedCoordinates, setConvertedCoordinates] = useState([]);

  useEffect(() => {
    // Convert the coordinates of the polygon
    //console.log(SriLankaBoundary.features[0].geometry.coordinates)
    const coordinates = SriLankaBoundary.features[0].geometry.coordinates;
    const flattenedCoordinates = coordinates.flat(2);
    const converted = flattenedCoordinates.map(([lng, lat]) => ({ lat, lng }));
    setConvertedCoordinates(converted);
  }, []);

  useEffect(() => {
    // Check if the Geometry library is available
    if (props.google && props.google.maps && props.google.maps.geometry) {
      console.log('Geometry library is included successfully.');
    } else {
      console.log('Geometry library is not included.');
    }
  }, [props.google]);

  const handleMapClick = (mapProps, map, clickEvent) => {
    const { latLng } = clickEvent;
    const lat = latLng.lat();
    const lng = latLng.lng();

    // Check if the clicked position is within the boundaries
    const isWithinBoundaries = isPositionWithinBoundaries(lat, lng);

    if (isWithinBoundaries) {
      setMarkerPosition({ lat, lng });
      props.setNewLat(lat);
      props.setNewLng(lng);
    }
  };

  const isPositionWithinBoundaries = (lat, lng) => {
    /* global google */
    const clickedPosition = new google.maps.LatLng(lat, lng);
    const polygon = new google.maps.Polygon({ paths: convertedCoordinates });

    return google.maps.geometry.poly.containsLocation(clickedPosition, polygon);
    //return (clickedPosition, polygon);
  };

  return (
    <div className="map-con">      
      <Map
        google={props.google}
        initialCenter={{ lat: 7.8731, lng: 80.7718 }}
        zoom={12}
        style={mapStyles}
        onReady={(mapProps, map) => {
          map.addListener('click', (event) => {
            handleMapClick(mapProps, map, event);
          });
        }}
      >
        {markerPosition && <Marker position={markerPosition} />}
      </Map>

      {markerPosition && (
        <div>
          Latitude: {markerPosition.lat}<br />
          Longitude: {markerPosition.lng}
        </div>
      )}
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDT_0tiTNzV5dw8Khl-K0cY5kMmrvcmlfA',
  libraries: ['geometry']
})(MapContainer);
