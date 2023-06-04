import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import config from "../../config";
// import { AdminViewUser, AdminViewLandlord } from "../../molecules";
import axios from "axios";
const url = config.apiUrl;

function ReportsTable(props) {
  // const [modalShow, setModalShow] = useState(false);
  const [reports, setReports] = useState([]);
  const [selectedReport, setSelectedReport] = useState(null);

  const readableDateTime = (dateString) => {
    const date = new Date(dateString);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZone: "UTC",
    };
    const readableTime = date.toLocaleTimeString("en-US", options);
    return readableTime;
  };

  // fetch all accoms
  useEffect(() => {
    axios
      .get(url + "/view-all-reports")
      .then(function (response) {
        console.log(response.data);
        setReports(response.data.results);
      })
      .catch(function (error) {
        console.log("Error fetching reports (reports table)");
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
              <p className="small-bold">Date</p>
            </th>
            <th>
              <p className="small-bold">Accom ID</p>
            </th>
            <th>
              <p className="small-bold">Reporter</p>
            </th>
            <th>
              <p className="small-bold">Report</p>
            </th>
          </tr>
        </thead>

        <tbody>
          {typeof reports === "undefined" ? (
            <p>Loading...</p>
          ) : (
            reports.map((report) => {
              const { REPORT_DATE, ACCOMMODATION_ID, USER_ID, REPORT_DETAILS } =
                report;
              let userName = "";
              // Get reporter name by id
              axios
                .post(url + "/get-user-by-id", { userId: USER_ID })
                .then((response) => {
                  console.log(response);
                  userName =
                    response.data.user.USER_FNAME +
                    " " +
                    response.data.user.USER_LNAME;
                  console.log("Username is ", userName);
                })
                .catch((err) => {});

              // Get accom name by id - missing: get accom name by id
              let accomName = "";

              return (
                <tr>
                  <td>
                    <p>{readableDateTime(REPORT_DATE)}</p>
                  </td>

                  <td>
                    <p>{ACCOMMODATION_ID}</p>
                  </td>

                  <td>
                    <p>{userName}</p>
                  </td>

                  <td>
                    <p>{REPORT_DETAILS}</p>
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

export default ReportsTable;
