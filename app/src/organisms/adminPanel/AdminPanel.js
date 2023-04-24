import React from "react";
import { Table, Button } from "react-bootstrap";
import "./adminPanel.css";
import "../../index.css";

const AdminPanel = () => {
  const [toggleState, setToggleState] = React.useState(1);

  // function to toggle tabs
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div class="admin-panel-div">
      <h1 className="large-bold">ADMIN PANEL</h1>

      {/* Tabs */}
      <div className="bloc-tabs">
        <div
          className={
            toggleState === 1
              ? "tabs small-bold active-tabs"
              : "tabs small-bold"
          }
          onClick={() => toggleTab(1)}
        >
          Users
        </div>
        <div
          className={
            toggleState === 2
              ? "tabs small-bold active-tabs"
              : "tabs small-bold"
          }
          onClick={() => toggleTab(2)}
        >
          Owners
        </div>
      </div>
      <div className="tab-header active-tabs"></div>

      {/* Content */}
      <div className="content-tabs">
        {/* Content 1 */}
        <div
          className={toggleState === 1 ? "content active-content" : "content"}
        >
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>otto@gmail.com</td>
                <td>
                  <Button variant="success">View</Button>
                  &nbsp;&nbsp;&nbsp;
                  <Button variant="danger">Edit</Button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>otto@gmail.com</td>
                <td>
                  <Button variant="success">View</Button>
                  &nbsp;&nbsp;&nbsp;
                  <Button variant="danger">Edit</Button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>otto@gmail.com</td>
                <td>
                  <Button variant="success">View</Button>
                  &nbsp;&nbsp;&nbsp;
                  <Button variant="danger">Edit</Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>

        {/* Content 2 */}
        <div
          className={toggleState === 2 ? "content active-content" : "content"}
        >
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>otto@gmail.com</td>
                <td>
                  <Button variant="success">View</Button>
                  &nbsp;&nbsp;&nbsp;
                  <Button variant="danger">Edit</Button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>otto@gmail.com</td>
                <td>
                  <Button variant="success">View</Button>
                  &nbsp;&nbsp;&nbsp;
                  <Button variant="danger">Edit</Button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>otto@gmail.com</td>
                <td>
                  <Button variant="success">View</Button>
                  &nbsp;&nbsp;&nbsp;
                  <Button variant="danger">Edit</Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
