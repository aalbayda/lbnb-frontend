import React, { useEffect, useState } from "react";
import "./userTable.css";
import { Table, Button } from "react-bootstrap";
import { AdminViewUser, AdminViewLandlord } from "../../molecules";
import axios from "axios";
const url = "https://mockup-backend-128.herokuapp.com";

function UserTable(props) {
  // const [modalShow, setModalShow] = useState(false);
  const [studentBackend, setStudentBackend] = useState([{}]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleCloseModal = () => {
    setSelectedStudent(null);
  };

  // fetch all students
  useEffect(() => {
    axios
      .get(url + "/view-all-students")
      // handle success
      .then(function (response) {
        setStudentBackend(response.data);
        console.log(response.data);
      })
      // handle error
      .catch(function (error) {
        console.log("There is an error fetching the students (admin page)");
        console.log(error);
      })
      // always executed
      .finally(function () {});
  }, []);

  return (
    <div>
      <Table striped hover>
        {/* Header */}
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
          {typeof studentBackend.students === "undefined" ? (
            // if loading
            <p>Loading...</p>
          ) : (
            // show the data
            studentBackend.students.map((student) => {
              // extract the needed data
              const { USER_ID, USER_FNAME, USER_LNAME, USER_EMAIL } = student;

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
                          setSelectedStudent(student);
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

          {/* SINGLE TABLE ROW, UNCOMMENT TO TEST */}
          {/* <tr>
                    <td>
                    <p className="small">1</p>
                    </td>
                    <td>
                    <p className="small">Mark</p>
                    </td>
                    <td>
                    <p className="small">otto@gmail.com</p>
                    </td>
                    <td>
                    <div className="admin-btns">

                        <Button
                            className="small admin-view-btn"
                            onClick={() => setModalShow(true)}
                            >View
                        </Button>

                        <AdminViewUser
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />

                    </div>
                    </td>
                </tr> */}
        </tbody>
      </Table>

      {/* ONLY RENDER IF THERE IS A SELECTED STUDENT */}
      {selectedStudent && (
        <AdminViewUser
          studentInfo={selectedStudent}
          show={true}
          onHide={handleCloseModal}
        />
      )}
    </div>
  );
}

export default UserTable;
