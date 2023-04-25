import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './admin_viewlandlord.css';
import {
    Image,
} from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';

function Admin_viewlandlord (props) {
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton/>
      <Modal.Body>
        <div className="adminviewlandlord-container">
            <div className="adminviewlandlord-left">
                <div className="adminviewlandlord-top">
                    <div>
                        
                    </div>
                    <Image
                    className="adminviewlandlord-profileImage"
                    src="https://pbs.twimg.com/profile_images/1564398871996174336/M-hffw5a_400x400.jpg"
                    roundedCircle
                    fluid
                    />
                </div>
                <div className="adminviewlandlord-items">
                    <div className="adminviewlandlord-item">
                        <p className="regular-bold">Name:</p>
                        <p className="regular">Mark Lewis</p>
                    </div>
                    <div className="adminviewlandlord-item">
                        <p className="regular-bold">Email:</p>
                        <p className="regular">mldamalerio@gmail.com</p>
                    </div>
                    <div className="adminviewlandlord-item">
                        <p className="regular-bold">Phone Number:</p>
                        <p className="regular">09123456789</p>
                    </div>
                    <div className="adminviewlandlord-item">
                        <p className="regular-bold">Password:</p>
                        <p className="regular">************</p>
                    </div>
                    <div className="adminviewlandlord-btns-left">
                        <Button className="admineditlandlord">
                            Edit
                        </Button>
                        <Button className="adminsavelandlord">
                            Save
                        </Button>
                    </div>
                </div>
            </div>
            <div className="adminviewlandlord-right">
                <div className="adminviewlandlord-right-top">
                    <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic" className="small adminviewlandlord-filter-dropdown">
                        Accomodations
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item className="small adminviewlandlord-filter-dropdown-item" href="#/action-1">Accom1</Dropdown.Item>
                        <Dropdown.Item className="small adminviewlandlord-filter-dropdown-item" href="#/action-2">Accom2</Dropdown.Item>
                        <Dropdown.Item className="small adminviewlandlord-filter-dropdown-item" href="#/action-3">Accom3</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className="adminviewlandlord-right-bottom">
                    <div className="adminviewlandlord-item">
                        <p className="small-bold">Accomodation Name:</p>
                        <p className="small">White House</p>
                    </div>
                    <div className="adminviewlandlord-item">
                        <p className="small-bold">Type</p>
                        <p className="small">Apartment</p>
                    </div>
                    <div className="adminviewlandlord-item">
                        <p className="small-bold">Description</p>
                        <p className="small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non tempor mauris.</p>
                    </div>
                    <div className="adminviewlandlord-item">
                        <p className="small-bold">Location:</p>
                        <p className="small">Somewhere in Elbi</p>
                    </div>
                    <div className="adminviewlandlord-item">
                        <p className="small-bold">Amenities:</p>
                        <p className="small">Something Something</p>
                    </div>
                    <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic" className="small adminviewlandlord-filter-dropdown-rooms">
                        Rooms
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item className="small adminviewlandlord-filter-dropdown-item" href="#/action-1">Room1</Dropdown.Item>
                        <Dropdown.Item className="small adminviewlandlord-filter-dropdown-item" href="#/action-2">Room2</Dropdown.Item>
                        <Dropdown.Item className="small adminviewlandlord-filter-dropdown-item" href="#/action-3">Room3</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                    <div className="adminviewlandlord-item">
                        <p className="small-bold">Room Name</p>
                        <p className="small">Room 1</p>
                    </div>
                    <div className="adminviewlandlord-item">
                        <p className="small-bold">Capacity:</p>
                        <p className="small">1</p>
                    </div>
                    <div className="adminviewlandlord-item">
                        <p className="small-bold">Price</p>
                        <p className="small">5000</p>
                    </div>
                    <div className="adminviewlandlord-btns">
                        <Button className="admineditlandlord">
                            Edit
                        </Button>
                        <Button className="adminsavelandlord">
                            Save
                        </Button>
                    </div>
                </div>
            </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default Admin_viewlandlord;