import React, {useState, useEffect} from "react";
import './landlordTable.css';
import { Table, Button } from "react-bootstrap";
import { AdminViewLandlord } from "../../molecules";
import axios from "axios";
const url = 'https://mockup-backend-128.herokuapp.com';

function LandlordTable (props) {
    const [modalShow, setModalShow] = useState(false);
    const [accoms, setAccoms] = useState([]);
    useEffect(() => {
        axios.post(url+'/filter-accommodation', {
            filters: {
                name: '',
                address: '',
                location: '',
                type: '',
                priceFrom: '',
                priceTo: '',
                capacity: '',
                max_price: ''
            }
          })
          .then(function (response) {
            console.log(response.data.accommmodations);
            setAccoms(response.data.accommodations);
          })
          .catch(function (error) {
            console.log("Error!!!");
            console.log(error);
          });

    })
  return (
    <div>
        <Table striped hover>
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

                    {accoms.map(accom => {
                        <tr>
                            <td>
                            <p className="small">{accom.ACCOMMODATION_NAME}</p>
                            </td>
                            <td>
                            <p className="small">{accom.ACCOMMODATION_TYPE}</p>
                            </td>
                            <td>
                            <p className="small">{accom.ACCOMMODATION_DESCRIPTION}</p>
                            </td>
                            <td>
                            <p className="small">{accom.ACCOMMODATION_LOCATION}</p>
                            </td>
                        </tr>
                    })}

                    {/* TODO: sample table, delete after map is implemented */}
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

                </tbody>
            </Table>
    </div>
  );
}

export default LandlordTable;