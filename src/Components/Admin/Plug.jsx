
import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DataTable from 'react-data-table-component';
import TextField from '@mui/material/TextField';

const Plug = () => {

    const columns =[
        {
          name: 'plug',
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

    const data = [1, 2]

    const handleImageChange = (e) => {
      const file = e.target.files[0];
    };

  return (
    <div>
        <Container fluid>
            <Row>
                <Col md={4} className='p-3 center'>
                  <Row className='center width-add-new'> 
                    <Form >
                      <TextField 
                        className='mb-3'
                        id="filled-basic" 
                        label="Plug" 
                        variant="standard"
                        fullWidth  
                      /><br />
                      <TextField 
                        className='mb-3'
                        id="filled-basic" 
                        label="Description" 
                        variant="standard"
                        fullWidth  
                      /> <br />{/* 
                      <Form.Group>
                        <Form.Label>Upload an Image</Form.Label>
                        <Form.Control type="file" accept="image/*" onChange={handleImageChange} />
                      </Form.Group> */}
                      <Button>Add New</Button>
                    </Form>
                  </Row>
                </Col>
                <Col md={8} className='gradient-background py-3'>
              <DataTable
                columns={columns}
                data={data}
                pagination
                persistTableHead
                responsive/* 
                customStyles={customStyles} */
              />                     
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Plug