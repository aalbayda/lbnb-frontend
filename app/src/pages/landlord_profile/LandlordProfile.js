import { React, useState, useEffect } from "react";
import axios from "axios";
import "./LandlordProfile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { defaultPhoto } from "../../assets/images";
import { UserProfileModal, AddAccoms, Unauthorized } from "../../molecules";
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  // Dropdown,
  // DropdownButton,
} from "react-bootstrap";
import { CardListingAddRoom, NavBar } from "../../organisms";
import { Rating } from "@mui/material";
import { AiFillPhone, AiFillCalendar } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { AddAccomsButton } from "../../atoms";
import { CardListing } from "../../organisms";
import { useLocation } from "react-router-dom";
import {
  isLoggedIn,
  getAuthUsername,
  getAuthType,
  getAuthName,
  getAuthMobile,
  getAuthEmail,
} from "../../auth";
import { noUnits } from "../../assets/images";
import config from "../../config";
const url = config.apiUrl;

const LandlordProfile = () => {
  const location = useLocation();

  const [editing, setEditing] = useState(false);
  const [rating, setRating] = useState(4);
  const [owned, setOwned] = useState([]);
  const [newname, setNewname] = useState("");
  const [newnumber, setNewnumber] = useState("");
  const [newemail, setNewemail] = useState("");
  const [newpassword, setNewpassword] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [dp, setDP] = useState("");
  const [toggleState, setToggleState] = useState(1);
  const [modalShow1, setModalShow1] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  // const [number, setNumber] = useState(getAuthMobile());

  // function to toggle tabs
  const toggleTab = (index) => {
    setToggleState(index);
    console.log("toggle: ", toggleState)
  };

  const handleClick = () => {
    if (editing && !newpassword) {
      window.alert(
        "Invalid password! If you want the same password, enter your current password."
      );
      return;
    }

    if (editing) {
      axios
        .post(url + "/edit-user", {
          email: email,
          newUsername: newemail ? newemail : email,
          newFirstName: newname
            ? newname.split(" ")[0]
            : getAuthName().split(" ")[0],
          newLastName: newname
            ? newname.split(" ")[1]
            : getAuthName().split(" ")[1],
          newContactNum: newnumber ? newnumber : number,
          newPassword: newpassword,
        })
        .then((res) => {
          console.log(res.data);
          console.log("Success edit");
          document.cookie =
            "authCookie=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
          window.location.href = "/";
        })
        .catch((err) => console.error(err));
    }

    setEditing(!editing);
  };

  useEffect(() => {
    console.log("Searching for ", location.state.username);
    axios
      .post(url + "/filter-users", {
        name: location.state.username,
        isStudent: false,
      })
      .then((res) => {
        console.log("Found owner", location.state.username);
        console.log(res.data);
        setNumber(res.data.users[0].USER_CONTACTNUM);
        setEmail(res.data.users[0].USER_EMAIL);
      })
      .catch((err) => console.error(err));

    // get accoms here
    axios
      .post(url + "/accommodation/get-user-accommodations", {
        ownerName: location.state.username,
      })
      .then((res) => {
        if (res.data.result) setOwned(res.data.result);
      })
      .catch((err) => console.error(err));

    axios
      .post(url + "/owner/get-average-rating", {
        username: location.state.username,
      })
      .then((res) => {
        if (res.data.success) setRating(res.data.averageRating);
      })
      .catch((err) => console.error(err));

    axios
      .post(url + "/user/get-user-pic", { username: email })
      .then((res) => setDP(res.data.imageUrl))
      .catch((err) => console.error(err));
  }, [email, location.state.username]);

  return (
    <div>
      <NavBar />
      {isLoggedIn() ? (
         <div className="userProfile_Container">
         <div className="userProfile_Container_left">
           <div className="userProfile_Container_left_photo">
             <Image 
               className="userPhoto"
               src={defaultPhoto}
             />
           </div>
           <div className="userProfile_Container_left_details">
             <p className="header4 userProfile_name">{getAuthName()}</p>
             <Rating
                 className="rating-medium"
                 readOnly
                 value={2.5}
                 precision={0.5}
                sx={{
                   fontSize: "3rem",
                   color: "#F0AF01",
                 }}
            />
             {getAuthMobile() === 0 ? (
               <p className="regular userProfile_number">{getAuthMobile()}</p>
             ) : (
               <p></p>
             )}
             <p className="regular userProfile_email">{getAuthEmail()}</p>
             <Button className="userProfile_editButton"  onClick={() => setModalShow1(true)}>
               Edit User Information
             </Button>
             <Button className="userProfile_editButton"  onClick={() => setModalShow(true)}>
               Add Accomodation
             </Button>
             <AddAccoms show={modalShow} onHide={() => setModalShow(false)} />
             <UserProfileModal 
               fname = {getAuthName().split(" ")[0]}
               lname = {getAuthName().split(" ")[1]}
               email = {getAuthEmail()}
               number = {getAuthMobile()}
               show={modalShow1} 
               onHide={() => setModalShow1(false)} 
             />
           </div>
         </div>
         <div className="userProfile_Container_right">
            <p className="header4 addAccoms"> Units Owned </p>
            <Row className="justify-content-md-center mt-4">
            {owned.length === 0 ? (
              <div className="noUnits">
                 <img src={noUnits} alt="image" />
                <p className="regular">No Owned Units</p>
              </div>
            ) : (
              owned.map((unit, index) => (
                <div className="cardlist-flex mb-5">
                  <CardListing
                    key={index}
                    unut={unit}
                    owner_username={location.state.username}
                    name={unit.ACCOMMODATION_NAME}
                    location={unit.ACCOMMODATION_LOCATION}
                    description={unit.ACCOMMODATION_DESCRIPTION}
                    amenities={unit.ACCOMMODATION_AMENITIES}
                    address={unit.ACCOMMODATION_ADDRESS}
                    max_price={unit.max_price}
                    owner={""}
                    rating={unit.rating}
                  />
                </div>
              ))
            )}
            </Row>
         </div>
       </div>
        // <div className="landlord-profile-container">
        //   {location.state.username === getAuthUsername() ? (
        //     <AddAccomsButton />
        //   ) : (
        //     <></>
        //   )}
        //   <Col className="body-container">
        //     <Row className="justify-content-md-center">
        //       <Image
        //         className="profileImage"
        //         src={
        //           dp
        //             ? dp
        //             : "https://img.freepik.com/free-icon/user_318-804790.jpg?w=2000"
        //         }
        //         roundedCircle
        //         fluid
        //       />
        //     </Row>
        //     <Col className="text-center mt-5">
        //       {editing ? "🪪" : ""}{" "}
        //       {editing ? (
        //         <input
        //           placeholder="New Name"
        //           onChange={(e) => setNewname(e.target.value)}
        //         ></input>
        //       ) : (
        //         <h1 className="header1">
        //           {newname ? newname : location.state.name}
        //         </h1>
        //       )}
        //     </Col>

        //     <Col className="text-center">
        //       <Rating
        //         className="rating-medium"
        //         name="read-only"
        //         value={rating}
        //         // precision={0.5}
        //         sx={{
        //           fontSize: "3rem",
        //           color: "#F0AF01",
        //         }}
        //       />
        //     </Col>

        //     <Col className="text-center">
        //       <h1 className="small">
        //         📞{" "}
        //         {editing ? (
        //           <input
        //             placeholder="New Number"
        //             onChange={(e) => setNewnumber(e.target.value)}
        //           ></input>
        //         ) : newnumber ? (
        //           newnumber
        //         ) : (
        //           getAuthMobile()
        //         )}
        //       </h1>
        //       <h1 className="small">
        //         📬{" "}
        //         {editing ? (
        //           <input
        //             placeholder="New Email"
        //             onChange={(e) => setNewemail(e.target.value)}
        //           ></input>
        //         ) : newemail ? (
        //           newemail
        //         ) : (
        //           email
        //         )}
        //       </h1>
        //       {editing ? "🔑" : <></>}

        //       {editing ? (
        //         <input
        //           placeholder="New Password"
        //           type="password"
        //           onChange={(e) => setNewpassword(e.target.value)}
        //         ></input>
        //       ) : (
        //         <></>
        //       )}
        //     </Col>

        //     {getAuthUsername() === email ? (
        //       <Col className="text-center mt-5">
        //         <Button
        //           onClick={handleClick}
        //           className="small-bold carousel-btn"
        //         >
        //           {editing ? "Save" : "Edit Details"}
        //         </Button>
        //       </Col>
        //     ) : (
        //       <></>
        //     )}

        //     <Col>
        //       <Row>
        //         <h1 className="mt-5 text-center header2">Units Owned</h1>
        //       </Row>
        //       <Row className="justify-content-md-center mt-4">
        //         {owned.map((unit, index) => (
        //           <div className="cardlist-flex mb-5">
        //             <CardListing
        //               key={index}
        //               unut={unit}
        //               owner_username={location.state.username}
        //               name={unit.ACCOMMODATION_NAME}
        //               location={unit.ACCOMMODATION_LOCATION}
        //               description={unit.ACCOMMODATION_DESCRIPTION}
        //               amenities={unit.ACCOMMODATION_AMENITIES}
        //               address={unit.ACCOMMODATION_ADDRESS}
        //               max_price={unit.max_price}
        //               owner={""}
        //               rating={unit.rating}
        //             />
        //           </div>
        //         ))}
        //       </Row>
        //     </Col>
        //   </Col>
        // </div>
      ) : (
        <Container>
          <Unauthorized />
        </Container>
      )}
    </div>
  );
};

export default LandlordProfile;
