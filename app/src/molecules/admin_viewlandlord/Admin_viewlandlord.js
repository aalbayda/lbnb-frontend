import { React, useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./admin_viewlandlord.css";
import { Image, Col, Row, Container } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
const url = "https://mockup-backend-128.herokuapp.com";

function Admin_viewlandlord(props) {
  const { ownerInfo } = props;
  const {
    USER_ID,
    USER_FNAME,
    USER_LNAME,
    USER_EMAIL,
    USER_PASSWORD,
    USER_CONTACTNUM,
  } = ownerInfo;

  const [newAccomName, setNewAccomName] = useState("");
  const [newAccomType, setNewAccomType] = useState("");
  const [newAccomAddress, setNewAccomAddress] = useState("");
  const [newAccomDescription, setNewAccomDescription] = useState("");
  const [newAccomAmenities, setNewAccomAmenities] = useState("");

  const [fname, setFname] = useState(USER_FNAME);
  const [lname, setLname] = useState(USER_LNAME);
  const [email, setEmail] = useState(USER_EMAIL);
  const [contact, setContact] = useState(USER_CONTACTNUM);
  const [password, setPassword] = useState("");
  const [editOwner, setEditOwner] = useState(false);
  const [editAccomsRoom, setEditAccomsRoom] = useState(false);
  const [accoms, setAccoms] = useState([]);
  const [selectedAccom, setSelectedAccom] = useState("");
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState("");

  useEffect(() => {
    console.log(USER_EMAIL);
    axios
      .post(url + "/accommodation/get-user-accommodations", {
        ownerName: USER_EMAIL,
      })
      .then((response) => {
        console.log(response.data);
        setAccoms(response.data.result);
      })
      .catch((error) => {
        console.error(error);
      });
    // if (selectedAccom) {
    //   axios
    //     .post(url + "/filter-accommodation", {
    //       filters: {
    //         name: selectedAccom,
    //         address: "",
    //         location: "",
    //         type: "",
    //         ownerUsername: "",
    //         maxPrice: null,
    //         capacity: null,
    //       },
    //     })
    //     .then((response) => {
    //       console.log(response.data);
    //       setAccomDetails(response.data.accommodations[0]);
    //       console.log(setAccomDetails);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
  }, []);

  function editOwnerClicked() {
    setEditOwner(true);
  }

  function editAccomsRoomClicked() {
    setEditAccomsRoom(true);
  }

  function handleSaveLandlord() {
    setEditOwner(false);
    axios
      .post(url + "/edit-user", {
        email: email,
        newPassword: password,
        newUsername: email,
        newFirstName: fname,
        newLastName: lname,
        newContactNum: contact,
      })
      .then((response) => {
        console.log(response.data);
        // setRating(response.data.averageRating);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function handleSaveAccom() {
    setEditAccomsRoom(false);
    axios
      .post(url + "/edit-accommodation", {
        name: selectedAccom.ACCOMMODATION_NAME,
        newName: newAccomName,
        newType: newAccomType,
        newDescription: newAccomDescription,
        newAddress: newAccomAddress,
        newLocation: selectedAccom.ACCOMMODATION_LOCATION,
        newAmenities: newAccomAmenities,
      })
      .then((response) => {
        console.log(response.data);
        // setRating(response.data.averageRating);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function disableAllEdit() {
    setEditOwner(false);
    setEditAccomsRoom(false);
  }

  return (
    <Modal
      onExited={disableAllEdit}
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton />
      <Modal.Body>
        <div className="adminviewlandlord-container">
          <div className="adminviewlandlord-left">
            <div className="adminviewlandlord-top">
              <div></div>
              <Image
                className="adminviewlandlord-profileImage"
                src="https://pbs.twimg.com/profile_images/1564398871996174336/M-hffw5a_400x400.jpg"
                roundedCircle
                fluid
              />
            </div>
            <div className="adminviewlandlord-items">
              {/* Name */}
              <div className="adminviewlandlord-item">
                <p className="regular-bold">First Name:</p>

                {editOwner ? (
                  <input
                    placeholder={USER_FNAME}
                    onChange={(e) => setFname(e.target.value)}
                  ></input>
                ) : (
                  <p className="regular">{USER_FNAME}</p>
                )}
              </div>
              <div className="adminviewlandlord-item">
                <p className="regular-bold">Last Name:</p>

                {editOwner ? (
                  <input
                    placeholder={USER_LNAME}
                    onChange={(e) => setLname(e.target.value)}
                  ></input>
                ) : (
                  <p className="regular">{USER_LNAME}</p>
                )}
              </div>
              {/* Email */}
              <div className="adminviewlandlord-item">
                <p className="regular-bold">Email:</p>

                {editOwner ? (
                  <input
                    placeholder={USER_EMAIL}
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                ) : (
                  <p className="regular">{USER_EMAIL}</p>
                )}
              </div>
              {/* Phone */}
              <div className="adminviewlandlord-item">
                <p className="regular-bold phone-number-input">Phone Number:</p>

                {editOwner ? (
                  <input
                    onChange={(e) => setContact(e.target.value)}
                    className="no-arrows"
                    placeholder={USER_CONTACTNUM}
                  ></input>
                ) : (
                  <p className="regular">{USER_CONTACTNUM}</p>
                )}
              </div>
              {/* Password */}
              <div className="adminviewlandlord-item">
                <p className="regular-bold">Password:</p>
                {editOwner ? (
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="************"
                  ></input>
                ) : (
                  <p className="regular">************</p>
                )}
              </div>
              <div className="adminviewlandlord-btns-left">
                {editOwner ? (
                  <Button
                    className="adminsavelandlord"
                    onClick={handleSaveLandlord}
                  >
                    Save
                  </Button>
                ) : (
                  <Button
                    className="admineditlandlord"
                    onClick={editOwnerClicked}
                  >
                    Edit
                  </Button>
                )}
              </div>
            </div>
          </div>

          <div className="adminviewlandlord-right">
            <div className="adminviewlandlord-right-top">
              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-basic"
                  className="small adminviewlandlord-filter-dropdown"
                >
                  Accomodations
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {accoms.map((accom) => (
                    <Dropdown.Item
                      className="small adminviewlandlord-filter-dropdown-item"
                      onClick={() => {
                        console.log(accom);
                        setSelectedAccom(accom);
                      }}
                    >
                      {newAccomName ? newAccomName : accom.ACCOMMODATION_NAME}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>

            {selectedAccom ? (
              <div>
                <div className="adminviewlandlord-right-bottom">
                  {/* Accomodation Name */}
                  <div className="adminviewlandlord-item">
                    <p className="small-bold">Accommodation Name:</p>

                    {editAccomsRoom ? (
                      <input
                        placeholder={selectedAccom.ACCOMMODATION_NAME}
                        onChange={(e) => setNewAccomName(e.target.value)}
                      ></input>
                    ) : (
                      <p className="small">
                        {newAccomType
                          ? newAccomType
                          : selectedAccom.ACCOMMODATION_NAME}
                      </p>
                    )}
                  </div>

                  {/* Accomodation Type */}
                  <div className="adminviewlandlord-item">
                    <p className="small-bold">Type:</p>

                    {editAccomsRoom ? (
                      <Dropdown>
                        <Dropdown.Toggle
                          id="dropdown-basic"
                          className="small adminviewlandlord-filter-dropdown-type"
                        >
                          Apartment
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item
                            onClick={() => setNewAccomType("Apartment")}
                            className="small"
                          >
                            Apartment
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => setNewAccomType("Dorm")}
                            className="small"
                          >
                            Dorm
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => setNewAccomType("Bedspace")}
                            className="small"
                          >
                            Bedspace
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    ) : (
                      <p className="small">
                        {selectedAccom.ACCOMMODATION_TYPE}
                      </p>
                    )}
                  </div>

                  {/* Description */}
                  <div className="adminviewlandlord-item">
                    <p className="small-bold">Description</p>
                    {editAccomsRoom ? (
                      <input
                        onChange={(e) => setNewAccomDescription(e.target.value)}
                        placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non tempor mauris."
                      ></input>
                    ) : (
                      <p className="small">
                        {newAccomDescription
                          ? newAccomDescription
                          : selectedAccom.ACCOMMODATION_DESCRIPTION}
                      </p>
                    )}
                  </div>

                  {/* Location */}
                  <div className="adminviewlandlord-item">
                    <p className="small-bold">Address:</p>
                    {editAccomsRoom ? (
                      <input
                        onChange={(e) => setNewAccomAddress(e.target.value)}
                        placeholder="Somewhere in Elbi"
                      ></input>
                    ) : (
                      <p className="small">
                        {newAccomAddress
                          ? newAccomAddress
                          : selectedAccom.ACCOMMODATION_ADDRESS}
                      </p>
                    )}
                  </div>

                  {/* Amenities */}
                  <div className="adminviewlandlord-item">
                    <p className="small-bold">Amenities:</p>
                    {editAccomsRoom ? (
                      <input
                        onChange={(e) => setNewAccomAmenities(e.target.value)}
                        placeholder="Something Something"
                      ></input>
                    ) : (
                      <p className="small">
                        {newAccomAmenities
                          ? newAccomAmenities
                          : selectedAccom.ACCOMMODATION_AMENITIES}
                      </p>
                    )}
                  </div>

                  {/* <Dropdown>
                    <Dropdown.Toggle
                      id="dropdown-basic"
                      className="small adminviewlandlord-filter-dropdown-rooms"
                    >
                      Rooms
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item
                        className="small adminviewlandlord-filter-dropdown-item"
                        href="#/action-1"
                      >
                        Room1
                      </Dropdown.Item>
                      <Dropdown.Item
                        className="small adminviewlandlord-filter-dropdown-item"
                        href="#/action-2"
                      >
                        Room2
                      </Dropdown.Item>
                      <Dropdown.Item
                        className="small adminviewlandlord-filter-dropdown-item"
                        href="#/action-3"
                      >
                        Room3
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown> */}

                  {/* Room Name */}
                  {/* <div className="adminviewlandlord-item">
                    <p className="small-bold">Room Name</p>
                    {editAccomsRoom ? (
                      <input placeholder="Room 1"></input>
                    ) : (
                      <p className="small">Room 1</p>
                    )}
                  </div> */}

                  {/* Capacity */}
                  {/* <div className="adminviewlandlord-item">
                    <p className="small-bold">Capacity:</p>
                    {editAccomsRoom ? (
                      <input type="number" min="0" placeholder="1"></input>
                    ) : (
                      <p className="small">1</p>
                    )}
                  </div> */}

                  {/* Price */}
                  {/* <div className="adminviewlandlord-item">
                    <p className="small-bold">Price</p>

                    {editAccomsRoom ? (
                      <input type="number" min="0" placeholder="5000"></input>
                    ) : (
                      <p className="small">5000</p>
                    )}
                  </div> */}

                  {/* Button */}
                  <div className="adminviewlandlord-btns">
                    {editAccomsRoom ? (
                      <Button
                        className="adminsavelandlord"
                        onClick={handleSaveAccom}
                      >
                        Save
                      </Button>
                    ) : (
                      <Button
                        className="admineditlandlord"
                        onClick={editAccomsRoomClicked}
                      >
                        Edit
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default Admin_viewlandlord;
