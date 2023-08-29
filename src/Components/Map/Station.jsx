import './Station.css'
import React, {useState, useEffect} from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import vehicle from '../../images/vehocle.jpg'
import car from '../../images/car.jpg'
import Button from 'react-bootstrap/Button';
import {TiTick} from 'react-icons/ti';
import {MdLocationOn} from 'react-icons/md';
import {FaPhone} from 'react-icons/fa';
import {FaDollarSign} from 'react-icons/fa';
import {FaStar} from 'react-icons/fa';
import {RiParkingFill} from 'react-icons/ri';
import {FaClock} from 'react-icons/fa';
import {FaInfoCircle} from 'react-icons/fa';
import {BsBookmarkStarFill} from 'react-icons/bs';
import {RiDirectionFill} from 'react-icons/ri';
import {MdInsertPhoto} from 'react-icons/md';
import {RiEdit2Fill} from 'react-icons/ri';
import {MdOutlineAddCircleOutline} from 'react-icons/md';

const Station = (props) => {

  useEffect(() => {
    console.log(props.place)
  }, [props.place]);

  return (
    <div>
        <Offcanvas 
            show={props.show} 
            onHide={props.handleClose}
            scroll= {true}
            backdrop= {false}
    >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
           
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Row>
            <img
              src={car} 
              alt='Type 2'
              className='image'
            />
          </Row>
          <div className='header p-3'>
            <Row>
              <Col md={9}>
                <Row className='title ps-1'>
                  Mr. Rahuman
                </Row>
                <Row className='des ps-1'>
                  J-1777
                </Row>
              </Col>
              <Col md={3} className='checkIn'>
                <Button className='circularButton' variant="success">
                  <TiTick size={50}/>
                </Button>
                Check In
              </Col>
            </Row>
          </div>
          <div className='box'>
            <Row className='actionBox center'>
              <Col md={3} className='actionBox center actHeight'>
                <div>
                  <Row className='center'>
                    <BsBookmarkStarFill size={20}/>
                  </Row>
                  <Row className='center smaller m-1'>
                    Bookmark
                  </Row>
                </div>
              </Col>
              <Col md={3} className='actionBox center actHeight'>
                <div>
                  <Row className='center'>
                    <RiDirectionFill size={23}/>
                  </Row>
                  <Row className='center smaller m-1'>
                    Direction
                  </Row>
                </div>
              </Col>
              <Col md={3} className='actionBox center actHeight'>
                <div>
                  <Row className='center'>
                    <MdInsertPhoto size={20}/>
                  </Row>
                  <Row className='center smaller m-1'>
                    Add Photo
                  </Row>
                </div>
              </Col>
              <Col md={3} className='actionBox center actHeight'>
                <div>
                  <Row className='center'>
                    <RiEdit2Fill size={20}/>
                  </Row>
                  <Row className='center smaller m-1'>
                    Edit
                  </Row>
                </div>
              </Col>
            </Row>
            <Row className='underline'>
              <Col md={1}>
                <MdLocationOn size={25}/>
              </Col>
              <Col md={11}>
                
              </Col>
            </Row>
            <Row className='underline'>
              <Col md={1}>
                <FaPhone size={17}/>
              </Col>
              <Col md={11}>
                
              </Col>
            </Row>
            <Row className='underline'>
              <Col md={1}>
                <FaDollarSign size={20}/>
              </Col>
              <Col md={11}>
                
              </Col>
            </Row>
            <Row className='underline'>
              <Col md={1}>
                <FaStar size={20}/>
              </Col>
              <Col md={11}>
                
              </Col>
            </Row>
            <Row className='underline'>
              <Col md={1}>
                <RiParkingFill size={20}/>
              </Col>
              <Col md={11}>
                
              </Col>
            </Row>
            <Row className='underline'>
              <Col md={1}>
                <FaClock size={20}/>
              </Col>
              <Col md={11}>
                
              </Col>
            </Row>
            <Row className='underline'>
              <Col md={1}>
                <FaInfoCircle size={20}/>
              </Col>
              <Col md={11}>
                
              </Col>
            </Row>
          </div>          
          <div className='box'>
            <Row className='underline title'>
              Plugs
            </Row>
            <Row className='underline'>
              <Col md={2}>
              </Col>
              <Col md={10}>
                
              </Col>
            </Row>
          </div>        
          <div className='box'>
            <Row className='underline title'>
              Checkins
            </Row>
            <Row className='underline'>
              <Col md={2}>
              </Col>
              <Col md={10}>
                
              </Col>
            </Row>
          </div>        
          <div className='box'>
            <Row className='underline title'>
              Photos
            </Row>
            <Row className='underline'>
              <Col md={1} className='m-0'>
                <MdOutlineAddCircleOutline />
              </Col>
              <Col md={11} className='m-0'>
                Add photo
              </Col>
            </Row>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default Station