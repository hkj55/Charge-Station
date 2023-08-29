import './Admin.css'
import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Plug from './Plug';
import Network from './Network';
import Vehicle from './Vehicle';

const Admin = (props) => {
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        dialogClassName="modal-90w"
      >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Admin Panel
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Tabs
          defaultActiveKey="plug"
          id="fill-tab-example"
          className="mb-3"
          fill
        >
          <Tab eventKey="plug" title="Plug">
            <Plug />
          </Tab>
          <Tab eventKey="network" title="Network">
            <Network />
          </Tab>
          <Tab eventKey="vehicle" title="Vehicle">
            <Vehicle />
          </Tab>
        </Tabs>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  </div>
  )
}

export default Admin