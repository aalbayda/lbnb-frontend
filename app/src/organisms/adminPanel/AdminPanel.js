import React from "react";
import "./adminPanel.css";
import "../../index.css";


const AdminPanel = () => {

    const [toggleState, setToggleState] = React.useState(1);
    
    // function to toggle tabs
    const toggleTab = (index) => {
        setToggleState(index);
    }

    return <div class="admin-panel-div">
        <h1 className="large-bold">ADMIN PANEL</h1>

        {/* Tabs */}
        <div className="bloc-tabs">
            <div className={toggleState === 1 ? "tabs small-bold active-tabs" : "tabs small-bold"} onClick={() => toggleTab(1)}>Users</div>
            <div className={toggleState === 2 ? "tabs small-bold active-tabs" : "tabs small-bold"} onClick={() => toggleTab(2)}>Owners</div>
        </div>
        <div className="tab-header active-tabs"></div>

        {/* Content */}
        <div className="content-tabs">
            
            
            {/* Content 1 */}
            <div className={toggleState === 1 ? "content active-content" : "content"}>
                <h1>Lorem ipsum 1</h1>
                <p>test tab 1</p>
            </div>

            {/* Content 2 */}
            <div className={toggleState === 2 ? "content active-content" : "content"}>
                <h1>Lorem ipsum 2</h1>
                <p>test tab 2</p>
            </div>



        </div>

    </div>
}

export default AdminPanel;