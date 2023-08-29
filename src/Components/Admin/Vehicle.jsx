import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DataTable from 'react-data-table-component';
import TextField from '@mui/material/TextField';

const Vehicle = () => {
    
  const columnsMake =[
    {
      name: 'Make',
      selector: row => row.fname,
      wrap: true,
      width: '100px',
    },
    {
      name: 'Description',
      selector: row => row.fname,
      wrap: true,
      width: '100px',
    },
    {
      name: 'Actions',
      button: true,
      width: '300px',  
      selector: row => row.vatNo,
      cell: (row) => (
        <div style={{display: 'flex', justifyContent: 'space-between'}}>          
          <Button
            className="edit-button"
            variant="warning"
          >
              Edit
          </Button>
          <Button 
            className= "ms-3 delete-button"
            variant="danger"
            >
              Delete 
          </Button>
        </div>
          
      ),
    }, 
]
    
const columnsModel =[
  {
    name: 'Model',
    selector: row => row.fname,
    wrap: true,
    width: '100px',
  },
  {
    name: 'Description',
    selector: row => row.fname,
    wrap: true,
    width: '100px',
  },
  {
    name: 'Actions',
    button: true,
    width: '300px',  
    selector: row => row.vatNo,
    cell: (row) => (
      <div style={{display: 'flex', justifyContent: 'space-between'}}>          
        <Button
          className="edit-button"
          variant="warning"
        >
            Edit
        </Button>
        <Button 
          className= "ms-3 delete-button"
          variant="danger"
          >
            Delete 
        </Button>
      </div>
        
    ),
  }, 
]
  
const columnsTrim =[
  {
    name: 'Trim',
    selector: row => row.fname,
    wrap: true,
    width: '100px',
  },
  {
    name: 'Description',
    selector: row => row.fname,
    wrap: true,
    width: '100px',
  },
  {
    name: 'Actions',
    button: true,
    width: '300px',  
    selector: row => row.vatNo,
    cell: (row) => (
      <div style={{display: 'flex', justifyContent: 'space-between'}}>          
        <Button
          className="edit-button"
          variant="warning"
        >
            Edit
        </Button>
        <Button 
          className= "ms-3 delete-button"
          variant="danger"
          >
            Delete 
        </Button>
      </div>
        
    ),
  } 
]

const data = [1, 2]

const handleImageChange = (e) => {
  const file = e.target.files[0];
};

  return (
    <div>
      <Container fluid>
        <Row>
            <Col md={4} className='p-3'>
              <h2>Make</h2>
              <Row className=''> 
                <Form>
                  <Row>
                  <Col md={8}>
                    <TextField 
                      className='mb-3'
                      id="filled-basic" 
                      label="Make" 
                      variant="standard" 
                      fullWidth
                    />
                  </Col>
                  <Col md={4}>
                    <Button>Add New</Button>
                  </Col>
                  </Row>
                </Form>
              </Row>
              <Row>
              <DataTable
                columns={columnsMake}
                data={data}
                pagination
                persistTableHead
                responsive/* 
                customStyles={customStyles} */
              />  
              </Row>
            </Col>
            <Col md={4} className='gradient-background py-3'> 
              <h2>Model</h2> 
              <Row className=''> 
                <Form>
                  <Row>
                  <Col md={8}>
                    <TextField 
                      className='mb-3'
                      id="filled-basic" 
                      label="Model" 
                      variant="standard" 
                      fullWidth
                    />
                  </Col>
                  <Col md={4}>
                    <Button>Add New</Button>
                  </Col>
                  </Row>
                </Form>
              </Row>
              <Row>
              <DataTable
                columns={columnsModel}
                data={data}
                pagination
                persistTableHead
                responsive/* 
                customStyles={customStyles} */
              />  
              </Row>                 
            </Col>
            <Col md={4} className=''>
              <h2>Trim</h2>
              <Row className=''> 
                <Form>
                  <Row>
                  <Col md={8}>
                    <TextField 
                      className='mb-3'
                      id="filled-basic" 
                      label="Trim" 
                      variant="standard" 
                      fullWidth
                    />
                  </Col>
                  <Col md={4}>
                    <Button>Add New</Button>
                  </Col>
                  </Row>
                </Form>
              </Row>
              <Row>
              <DataTable
                columns={columnsTrim}
                data={data}
                pagination
                persistTableHead
                responsive/* 
                customStyles={customStyles} */
              />  
              </Row>                     
            </Col>
        </Row>
      </Container>      
    </div>
  )
}

export default Vehicle