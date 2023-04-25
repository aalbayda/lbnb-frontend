import React, {useState} from "react";
import './landlordTable.css';
import { Table, Button } from "react-bootstrap";
import { AdminViewLandlord } from "../../molecules";
function LandlordTable (props) {
    const [modalShow, setModalShow] = useState(false);
  return (
    <div>
        <Table striped bordered hover>
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
            </Table>
    </div>
  );
}

export default LandlordTable;