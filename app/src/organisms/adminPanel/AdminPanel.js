import { React, useState, useEffect } from "react";
import cookie from "cookie";
import "./adminPanel.css";
import "../../index.css";
import { UserTable, LandlordTable, AccomsTable } from "../../molecules";

const AdminPanel = () => {
  const [toggleState, setToggleState] = useState(1);
  const [modalShow, setModalShow] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);

  // function to toggle tabs
  const toggleTab = (index) => {
    setToggleState(index);
  };

  useEffect(() => {
    // Check if authToken exists in cookie
    if (cookie.parse(document.cookie)["authToken"]) {
      console.log("Log in detected!");
      setLoggedIn(true);
    } else {
      console.log("Log in not detected");
      setLoggedIn(false);
    }
  });

  // const [accoms, setAccoms] = React.useState([]);
  // const [users, setUsers] = React.useState([]);

  return (
    <div class="admin-panel-div">
      {isLoggedIn ? (
        <div>
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
            <div
              className={
                toggleState === 1
                  ? "content active-content"
                  : "content inactive-content"
              }
            >
              <UserTable />
            </div>

            {/* Content 2 */}
            <div
              className={
                toggleState === 2
                  ? "content active-content"
                  : "content inactive-content"
              }
            >
              <LandlordTable />
            </div>

            {/* Content 3 */}
            <div
              className={
                toggleState === 3
                  ? "content active-content"
                  : "content inactive-content"
              }
            >
              <AccomsTable />
            </div>
          </div>
        </div>
      ) : (
        <div>Unauthorized route.</div>
      )}
    </div>
  );
};

export default AdminPanel;
