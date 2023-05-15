import React from "react";
import { Table, Button } from "react-bootstrap";
import "./adminPanel.css";
import "../../index.css";
import { UserTable, LandlordTable, AccomsTable} from "../../molecules";

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

        {/* User Tab */}
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

        {/* Owner Tab */}
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

        {/* Accoms Tab */}
        <div
          className={
            toggleState === 3
              ? "tabs small-bold active-tabs"
              : "tabs small-bold"
          }
          onClick={() => toggleTab(3)}
        >
          Accoms
        </div>


      </div>
      <div className="tab-header active-tabs"></div>

      {/* Content */}
      <div className="content-tabs">


        {/* Content 1 */}
        <div className={toggleState === 1 ? "content active-content" : "content"}>
          <UserTable/>
        </div>
        {/* Content 2 */}
        <div className={toggleState === 2 ? "content active-content" : "content"}>
          <LandlordTable/>
        </div>

        {/* Content 3 */}
        <div
          className={toggleState === 3 ? "content active-content" : "content"}
        >
          <AccomsTable/>
        </div>



      </div>
    </div>
  );
};

export default AdminPanel;
