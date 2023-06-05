import React, { useEffect, useState } from "react";
import "./accomsTable.css";
import config from "../../config";
import { Table } from "react-bootstrap";
// import { AdminViewUser, AdminViewLandlord } from "../../molecules";
import axios from "axios";
const url = config.apiUrl;

function AccomsTable(props) {
  // const [modalShow, setModalShow] = useState(false);
  const [accomBackend, setAccomBackend] = useState([{}]);
  const [selectedAccom, setSelectedAccom] = useState(null);

  const handleCloseModal = () => {
    setSelectedAccom(null);
  };

  // fetch all accoms
  useEffect(() => {
    axios
      .post(url + "/filter-accommodation", {
        filters: {
          name: "",
          address: "",
          location: "",
          type: "",
          priceFrom: "",
          priceTo: "",
          capacity: "",
          max_price: "",
        },
      })
      .then(function (response) {
        console.log(response.data);
        setAccomBackend(response.data);
      })
      .catch(function (error) {
        console.log("Error fetching accoms (accoms table)");
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Table striped hover>
        {/* Header */}
        <thead>
          <tr>
            <th>
              <p className="small-bold">Name</p>
            </th>
            <th>
              <p className="small-bold">Type</p>
            </th>
            <th>
              <p className="small-bold">Description</p>
            </th>
            <th>
              <p className="small-bold">Location</p>
            </th>
          </tr>
        </thead>

        <tbody>
          {typeof accomBackend.accommodations === "undefined" ? (
            <p>Loading...</p>
          ) : (
            accomBackend.accommodations.map((accom) => {
              const {
                ACCOMMODATION_ID,
                ACCOMMODATION_NAME,
                ACCOMMODATION_TYPE,
                ACCOMMODATION_DESCRIPTION,
                ACCOMMODATION_LOCATION,
              } = accom;
              return (
                <tr key={ACCOMMODATION_ID}>
                  <td>
                    <p>{ACCOMMODATION_NAME}</p>
                  </td>

                  <td>
                    <p>{ACCOMMODATION_TYPE}</p>
                  </td>

                  <td>
                    <p>{ACCOMMODATION_DESCRIPTION}</p>
                  </td>

                  <td>
                    <p>{ACCOMMODATION_LOCATION}</p>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </Table>

      {/* ONLY RENDER IF THERE IS A SELECTED STUDENT
        {selectedStudent && (
            <AdminViewUser
            studentInfo={selectedStudent}
            show={true}
            onHide={handleCloseModal}
            />
        )} */}
    </div>
  );
}

export default AccomsTable;
