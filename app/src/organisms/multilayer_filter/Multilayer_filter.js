import { React, useState } from "react";
import axios from "axios";
import "./multilayer_filter.css";
import { AiFillFilter } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import Dropdown from "react-bootstrap/Dropdown";
import { ImPriceTags } from "react-icons/im";
import Button from "react-bootstrap/Button";
import { MdOutlinePlace, MdGroups } from "react-icons/md";
import Form from "react-bootstrap/Form";
const url = "https://mockup-backend-128.herokuapp.com";

const Multilayer_filter = (props) => {
  const [search, setSearch] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [capacity, setCapacity] = useState("");
  const [location, setLocation] = useState("");
  const [filterType, setFilterType] = useState("");

  const handleSearched = () => {
    axios
      .post(url + "/filter-accommodation", {
        filters: {
          name: search,
          location: location,
          type: filterType,
          maxPrice: priceTo,
          capacity: capacity,
        },
      })
      .then(function (response) {
        const query = response.data.accommodations;
        const filters = {
          name: search,
          location: location,
          type: filterType,
          maxPrice: priceTo,
          capacity: capacity,
        };
        props.handleQuery(query, filters);
      })
      .catch(function (error) {
        console.log(error);
      });

    props.toggleSearched();
  };

  return (
    <div className="mlf-container">
      <div className="mlf-upper">
        <Dropdown>
          <Dropdown.Toggle
            id="dropdown-basic"
            className="small filter-dropdown"
          >
            <AiFillFilter />
            {filterType ? filterType : "Type"}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => setFilterType("Dorm")}>
              Dorm
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setFilterType("Hotel")}>
              Hotel
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setFilterType("Apartment")}>
              Apartment
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setFilterType("Bedspace")}>
              Bedspace
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="mlf-lower">
        <div className="divTable">
          <div className="divTableCell search">
            <BiSearch className="icon" />
            <input
              className="small mlf_search"
              placeholder="Search"
              type="text"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="divTableCell price">
            <ImPriceTags className="icon" />
            <input
              disabled
              className="small mlf_price"
              placeholder="Max Price"
              type="number"
              onChange={(e) => setPriceTo(e.target.value)}
            />
          </div>
          <div className="divTableCell capacity">
            <MdGroups className="icon" />
            <input
              className="small mlf_price"
              placeholder="Capacity"
              type="number"
              onChange={(e) => setCapacity(e.target.value)}
            />
          </div>
          <div className="divTableCell InElbi">
            <MdOutlinePlace className="icon" />
            <div className="InElbi-Right">
              <Form>
                {["radio"].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      className="custom-radio tiny"
                      inline
                      label="Inside Campus"
                      name="group1"
                      type={type}
                      checked={location === "Within Campus"}
                      id={`inline-${type}-1`}
                      onClick={() =>
                        location === "Within Campus"
                          ? setLocation("")
                          : setLocation("Within Campus")
                      }
                    />
                    <Form.Check
                      className="custom-radio tiny"
                      inline
                      label="Outside Campus"
                      name="group1"
                      type={type}
                      checked={location === "Outside Campus"}
                      id={`inline-${type}-2`}
                      onClick={() =>
                        location === "Outside Campus"
                          ? setLocation("")
                          : setLocation("Outside Campus")
                      }
                    />
                  </div>
                ))}
              </Form>
            </div>
          </div>
          <div className="divTableCell search">
            <Button onClick={handleSearched} className="small carousel-btn">
              {" "}
              Search{" "}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Multilayer_filter;
