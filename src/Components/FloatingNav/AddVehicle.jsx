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

const AddVehicle = (props) => {

  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [phone, setPhone] = useState('')
  const [hours, setHours] = useState('')

  useEffect(() => {
    
  }, [name, category]);

  const addNew = () => {
    const id = PlacesData.length + 1
  }
  
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
        Add Vehicle
      </Modal.Title>
    </Modal.Header>
      <Modal.Body >
        <div>
          <Row>            
            <Col md={6} className='gradient-background p-0'>
              ABS
            </Col>           
            <Col md={6} className='p-3'>
              <Form>
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
              </Form>
            </Col>      
          </Row>
        </div>
      </Modal.Body>
      <Modal.Footer>  
        <Button
          className='add'
          onClick={() => addNew()}
          disabled={name === '' || category === ''}
        >
          Add Vehicle
        </Button> 
      </Modal.Footer>
    </Modal>
  )
}

export default AddVehicle