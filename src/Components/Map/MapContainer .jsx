import './Map.css'
import React, {useState, useEffect} from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { PlacesData } from '../../Data/Data';
import Station from './Station';

const mapStyles = {
  width: '100%',
  height: '95%',
  marginTop: '46px'
};

const MapContainer = (props) => {

  const [places, setPlaces] = useState([]);
  const [show, setShow] = useState(false);
  const [placeId, setPlaceId] = useState(0);
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [place, setPlace] = useState({})
  
  const handleClose = () => setShow(false);
  const handleShow = (place) => {
    setShow(true);
    /* setPlaceId(id);
    setName(name);
    setCategory(category) */
    setPlace(place)
  }

  const fetchPlaces = () => {
    // Simulated API call to fetch places data
    /* const placesData = [
      { id: 1, name: 'Place 1', category: 'category1', lat: 7.8731, lng: 80.7718, title: 'one' },
      { id: 2, name: 'Place 2', category: 'category2', lat: 7.9829, lng: 80.0413, title: 'two' },
      { id: 3, name: 'Place 3', category: 'category1', lat: 7.2964, lng: 80.6350, title: 'three'  },
      { id: 4, name: 'Place 4', category: 'category2', lat: 6.9271, lng: 80.7512, title: 'four'  },
      { id: 5, name: 'Place 5', category: 'category1', lat: 6.9271, lng: 80.8612, title: 'five'  },
      { id: 5, name: 'Place 6', category: 'category1', lat: 6.9271, lng: 83.8612, title: 'five'  },
      // Add more places with different categories
    ]; */
    //localStorage.setItem('places', JSON.stringify(PlacesData))
    /* const get = JSON.parse(localStorage.getItem('places'));
    if(get !== null){
      console.log(get.length)
      setPlaces(get)
    } */
    setPlaces(PlacesData)
  };

  useEffect(() => {
    fetchPlaces();
  }, [props]);

  const getCategoryIcon = (category) => {
    // Return the appropriate icon based on the category
    switch (category) {
      case 'category1':
        return require("../../icons/red.png"); 
      case 'category2':
        return require("../../icons/orange.png"); 
      default:
        return require("../../icons/red.png").default; 
    }
  };

  const markerClick = () => {
    console.log('clicked')
  }

  const mapBounds = {
    east: 82,
    north: 10,
    south: 5.5,
    west: 79.5
  };

  return (
    <>
    <Station
      show={show}
      handleClose={handleClose}/* 
      placeId={placeId}
      name = {name} */
      place ={place}

    />
    <div className="map-container">
      <Map
        google={props.google}
        initialCenter={{
          lat: 7.8731,
          lng: 80.7718
        }}
        zoom={12}
        style={mapStyles}
        restriction={mapBounds}
      >
        {places.map((place) => (
          <Marker
            onClick={() => handleShow(place)}
            key={place.id}
            position={{ lat: place.lat, lng: place.lng }}
            title={place.title}
            name={'SOMA'}
            icon={{
              url: getCategoryIcon(place.category),
              anchor: new props.google.maps.Point(32,32),
              scaledSize: new props.google.maps.Size(32,32)
            }}
          />
        ))}
      </Map>
    </div>
    </>
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDT_0tiTNzV5dw8Khl-K0cY5kMmrvcmlfA' // Replace with your Google Maps API key
})(MapContainer);
