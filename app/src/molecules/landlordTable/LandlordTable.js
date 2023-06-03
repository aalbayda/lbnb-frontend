import React, { useState, useEffect } from "react";
import "./landlordTable.css";
import config from "../../config";
import { Table, Button } from "react-bootstrap";
import { AdminViewLandlord } from "../../molecules";
import axios from "axios";
const url = config.apiUrl;

function LandlordTable(props) {
  const [modalShow, setModalShow] = useState(false);
  // const [accoms, setAccoms] = useState([]);

  const [ownerBackend, setOwnerBackend] = useState([{}]);
  const [selectedOwner, setSelectedOwner] = useState(null);

  const handleCloseModal = () => {
    setSelectedOwner(null);
  };

  useEffect(() => {
    // fetch all owners
    axios
      .get(url + "/view-all-owners")
      // handle success
      .then(function (response) {
        setOwnerBackend(response.data);
        // console.log(response.data);
      })
      // handle error
      .catch(function (error) {
        console.log("There is an error fetching the owners (admin page)");
        // console.log(error);
      })
      // always executed
      .finally(function () {});
  }, []);
  return (
    <div>
      <Table striped hover>
        <thead>
          <tr>
            <th>
              <p className="small-bold">ID #</p>
            </th>
            <th>
              <p className="small-bold">Name</p>
            </th>
            <th>
              <p className="small-bold">Email</p>
            </th>
            <th>
              <p className="small-bold">Action</p>
            </th>
          </tr>
        </thead>
        <tbody>
          {typeof ownerBackend.owners === "undefined" ? (
            <p>Loading...</p>
          ) : (
            ownerBackend.owners.map((owner) => {
              // extract the needed data
              const { USER_ID, USER_FNAME, USER_LNAME, USER_EMAIL } = owner;
              return (
                <tr key={USER_ID}>
                  <td>
                    <p className="small">{USER_ID}</p>
                  </td>
                  <td>
                    <p className="small">
                      {USER_FNAME} {USER_LNAME}
                    </p>
                  </td>
                  <td>
                    <p className="small">{USER_EMAIL}</p>
                  </td>
                  <td>
                    <div className="admin-btns">
                      {/* Button to show modal conditionally */}
                      <Button
                        className="small admin-view-btn"
                        onClick={() => {
                          setSelectedOwner(owner);
                        }}
                      >
                        View
                      </Button>
                    </div>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </Table>

      {/* ONLY RENDER IF THERE IS A SELECTED STUDENT */}
      {selectedOwner && (
        <AdminViewLandlord
          ownerInfo={selectedOwner}
          show={true}
          onHide={handleCloseModal}
        />
      )}
    </div>
  );
}

export default LandlordTable;
