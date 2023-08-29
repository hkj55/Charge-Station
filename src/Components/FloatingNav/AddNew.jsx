import './FloatingNav.css'
import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MapContainer from './MapContainer';
import { Categories, PlacesData } from '../../Data/Data';
import StationCard from './StationCard';

const AddNew = (props) => {

  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [phone, setPhone] = useState('')
  const [hours, setHours] = useState('')
  const [price, setPrice] = useState('')
  const [newLat, setNewLat] = useState('')
  const [newLng, setNewLng] = useState('')
  const [places, setPlaces] = useState(PlacesData)
  const [addDisabled, setAddDisabled] = useState(true)
  const [stationComponents, setStationComponents] = useState([{key:1, index:1}]);
  const [index, setIndex] = useState(1)

  const [count, setCount] = useState(0);

  useEffect(() => {
    
  }, [name, category, newLat, newLng]);

  useEffect(() => {
    localStorage.setItem('places', JSON.stringify(props.places))   
    console.log(props.places) 
  }, [props.places]);

  const addNew = () => {
    const id = PlacesData.length + 1
    const newPlace = {id,  name, category, lat: newLat, lng: newLng, title: 'one' }
   setPlaces([...places, newPlace])

    setName('')
    setCategory('')
    setNewLat('')
    setNewLng('')

  }

  useEffect(() => {
    setName('')
    setCategory('')
    setNewLat('')
    setNewLng('')
  }, [props]);

/*   useEffect(() => {
    console.log(componentList)
  }, [componentList]); */

  const handleRemove = (indexToRemove) => {
    const updatedStations = stationComponents.filter(
      (station) => station.key !== indexToRemove
    );
    setStationComponents(updatedStations);
    console.log(indexToRemove)
  };

  const handleAddStation = () => {
    const newIndex = index + 1;
    const newStation = {
      key: newIndex,
      index: newIndex,
    };
    setStationComponents([...stationComponents, newStation]);
    setIndex(newIndex)
  };

  
  return (
    <Modal
      {...props}
      aria-labelledby="google-login"
      centered
      size='lg'
      scrollable={true}
    >
      <Modal.Header closeButton>
        <Modal.Title id="google-login" className='login-title'>
          Add New Location
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row id='signInDiv' className="mb-3">
            <Col xs={12} md={12} >
              <Form>
                <Row>
                  <Col xs={12} md={6} >
                    <Form.Group className="mb-3">
                      <Form.Label>Name</Form.Label>
                      <span className="mandatory"> *</span>
                      <Form.Control
                        type="text"
                        id = 'nameId'
                        value={name}
                        onChange={e => setName(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6} >
                    <Form.Group className="mb-3">
                      <Form.Label>Address</Form.Label>
                      <span className="mandatory"> *</span>
                      <Form.Control
                        type="text"
                        id = 'nameId'
                        value={name}
                        onChange={e => setName(e.target.value)}
                      />
                    </Form.Group>                    
                  </Col>
                </Row>
                <Row className="mb-5 ms-5 map-div">      
                    <MapContainer
                      setNewLat = {setNewLat}
                      setNewLng = {setNewLng}
                    />     
                </Row>
                <Row>
                  <Col xs={12} md={12} className='add'>
                    <Form.Group className="mb-3">
                      <Form.Label>Description</Form.Label>
                      <Form.Control
                        type="text"
                        id = 'nameId'
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                      />
                    </Form.Group>                    
                  </Col>            
                  <Row className='mb-3'>
                    <h5 className='my-3'>Station</h5>
                      {stationComponents.map((station) => (
                      <StationCard
                        key={station.key}
                        index={station.index}
                        handleRemove={() => handleRemove(station.key)}
                      />
                    ))}
                    <div className='m-3'>
                      <Button variant="outline-primary" onClick={() => handleAddStation()}>Add Station</Button>
                    </div>
                  </Row>
                  <Row className='mt-3 mb-5'>
                    <Col xs={6} md={4} className='add'>
                      <Form.Check
                      type={'switch'}
                      id={'ac1'}
                      label={'Open 24/7'}
                    />
                    </Col>
                    <Col xs={6} md={4} className='add'>
                      <Form.Check
                        type={'switch'}
                        id={'ac2'}
                        label={'Restricted Access'}
                      />
                    </Col>
                    <Col xs={6} md={4} className='add'>
                      <Form.Check
                        type={'switch'}
                        id={'ac3'}
                        label={'Payment Required'}
                      />
                    </Col>
                  </Row>
                  <Col xs={12} md={6} className='add'>
                    <Form.Group className="mb-3">
                      <Form.Label>Hours</Form.Label>
                      <Form.Control
                        type="text"
                        id = 'nameId'
                        value={hours}
                        onChange={e => setHours(e.target.value)}
                      />
                    </Form.Group>                    
                  </Col>
                  <Col xs={12} md={6} className='add'>
                    <Form.Group className="mb-3">
                      <Form.Label>Price</Form.Label>
                      <Form.Control
                        type="text"
                        id = 'nameId'
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                      />
                    </Form.Group>                    
                  </Col>
                  <Col xs={12} md={6} className='add'>
                    <Form.Group className="mb-3">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="text"
                        id = 'nameId'
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                      />
                    </Form.Group>                    
                  </Col>
                  <Col xs={12} md={6} className='add'>
                    <Form.Group className="mb-3">
                      <Form.Label>Parking Level</Form.Label>
                      <Form.Control
                        type="text"
                        id = 'nameId'
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                      />
                    </Form.Group>                    
                  </Col>
                  <Row>
                    <h4 className='my-3'>Parking Attributes</h4>
                    <Col xs={6} md={4} className='add'>
                      <Form.Check
                      type={'checkbox'}
                      id={'ac1'}
                      label={'Pull through parking'}
                    />
                    </Col>
                    <Col xs={6} md={4} className='add'>
                      <Form.Check
                        type={'checkbox'}
                        id={'ac2'}
                        label={'Pull in parking'}
                      />
                    </Col>
                    <Col xs={6} md={4} className='add'>
                      <Form.Check
                        type={'checkbox'}
                        id={'ac3'}
                        label={'Trailer Parking'}
                      />
                    </Col>
                    <Col xs={6} md={4} className='add'>
                      <Form.Check
                        type={'checkbox'}
                        id={'ac3'}
                        label={'Trailer Friendly'}
                      />
                    </Col>
                    <Col xs={6} md={4} className='add'>
                      <Form.Check
                        type={'checkbox'}
                        id={'ac2'}
                        label={'Garage'}
                      />
                    </Col>
                    <Col xs={6} md={4} className='add'>
                      <Form.Check
                        type={'checkbox'}
                        id={'ac3'}
                        label={'Handicapped parking'}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <h4 className='my-3'>Access Restriction</h4>
                    <Col xs={6} md={3} className='add'>
                      <Form.Check
                      type={'checkbox'}
                      id={'ac1'}
                      label={'Customers Only'}
                    />
                    </Col>
                    <Col xs={6} md={3} className='add'>
                      <Form.Check
                        type={'checkbox'}
                        id={'ac2'}
                        label={'Guest Only'}
                      />
                    </Col>
                    <Col xs={6} md={3} className='add'>
                      <Form.Check
                        type={'checkbox'}
                        id={'ac3'}
                        label={'Residents Only'}
                      />
                    </Col>
                    <Col xs={6} md={3} className='add'>
                      <Form.Check
                        type={'checkbox'}
                        id={'ac3'}
                        label={'Employees Only'}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <h4 className='my-3'>Amenities</h4>
                    <Col xs={6} md={3} className='add'>
                      <Form.Check
                      type={'checkbox'}
                      id={'ac1'}
                      label={'Restroom'}
                    />
                    </Col>
                    <Col xs={6} md={3} className='add'>
                      <Form.Check
                        type={'checkbox'}
                        id={'ac2'}
                        label={'Parking'}
                      />
                    </Col>
                    <Col xs={6} md={3} className='add'>
                      <Form.Check
                        type={'checkbox'}
                        id={'ac3'}
                        label={'Wifi'}
                      />
                    </Col>
                    <Col xs={6} md={3} className='add'>
                      <Form.Check
                        type={'checkbox'}
                        id={'ac3'}
                        label={'Dining'}
                      />
                    </Col>
                    <Col xs={6} md={3} className='add'>
                      <Form.Check
                        type={'checkbox'}
                        id={'ac2'}
                        label={'Shopping'}
                      />
                    </Col>
                    <Col xs={6} md={3} className='add'>
                      <Form.Check
                        type={'checkbox'}
                        id={'ac3'}
                        label={'Grocery'}
                      />
                    </Col>
                  </Row>
                </Row>
              </Form>
            </Col>            
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button
          className='add'
          onClick={() => addNew()}
          disabled={name === '' || category === '' || newLat === '' || newLng === ''}
        >
          Add Station
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default AddNew