import React from "react";
import { Table, Button } from "react-bootstrap";
import "./adminPanel.css";
import "../../index.css";
import { UserTable, LandlordTable} from "../../molecules";

const AdminPanel = () => {
  const [toggleState, setToggleState] = React.useState(1);
  const [modalShow, setModalShow] = React.useState(false);
  // function to toggle tabs
  const toggleTab = (index) => {
    setToggleState(index);
  };

  // const [accoms, setAccoms] = React.useState([]);
  // const [users, setUsers] = React.useState([]);

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
          Accoms
        </div>
      </div>
      <div className="tab-header active-tabs"></div>

      {/* Content */}
      <div className="content-tabs">
        {/* Content 1 */}
        <div
          className={toggleState === 1 ? "content active-content" : "content"}
        >
          <UserTable/>
          {/* <Table striped bordered hover>
            <thead>
              <tr>
                <th>
                  <p className="small-bold">ID#</p>
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
              <tr>
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
              </tr>
            </tbody>
          </Table> */}
        </div>

        {/* Content 2 */}
        <div
          className={toggleState === 2 ? "content active-content" : "content"}
        >
          <LandlordTable/>
             {/* <Table striped bordered hover>
            <thead>
              <tr>
                <th>
                  <p className="small-bold">ID#</p>
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
              <tr>
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
                    <AdminViewLandlord
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                    /> 
                  </div>
                </td>
              </tr>
            </tbody>
          </Table> */}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
