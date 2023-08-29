import './Main.css'
import React, {Component, useEffect, useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import MapContainer from '../Map/MapContainer '
import FloatingNav from '../FloatingNav/FloatingNav';
import { PlacesData } from '../../Data/Data';

const Main = () => {
  
  /* const [places, setPlaces] = useState(PlacesData)

  useEffect(() => {
    localStorage.setItem('places', JSON.stringify(places))   
    console.log(places) 
  }, [places]); */

  return (
    <>
      <Container fluid>
      <Row>
        <Col lg="1">
        </Col>
        <Col lg="10">
          <MapContainer
            /* places = {places}  */
          />
        </Col>
        <Col lg="1" className='mt-5 floating-div'>
          <FloatingNav
            /* places = {places}
            setPlaces = {setPlaces} */
          />
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default Main