import React from "react";
import './multilayer_filter.css';
import {AiFillFilter} from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import Dropdown from 'react-bootstrap/Dropdown';
import { ImPriceTags } from 'react-icons/im';
import Button from 'react-bootstrap/Button';
import { MdOutlinePlace, MdGroups } from 'react-icons/md';
import Form from 'react-bootstrap/Form';
const Multilayer_filter = () => {
  return (
    <div className="mlf-container">
      <div className="mlf-upper">
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic" className="small filter-dropdown">
            <AiFillFilter/>
            Filter
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="mlf-lower">
        <div class="divTable">
              <div class="divTableCell search">
                <BiSearch className="icon"/>
                <input className="small mlf_search" placeholder='Search' type="text"/>
              </div>
              <div class="divTableCell price">
                <ImPriceTags className="icon"/>
                <input className="small mlf_price" placeholder='Price Range' type="number"/>
              </div>
              <div class="divTableCell capacity">
                <MdGroups className="icon"/>
                <input className="small mlf_price" placeholder='Capacity' type="number"/>
              </div>
              <div class="divTableCell InElbi">
                  <MdOutlinePlace className="icon"/>
                <div className="InElbi-Right">
                <Form>
                  {['radio'].map((type) => (
                      <div key={`inline-${type}`} className="mb-3">
                      <Form.Check
                          className="tiny"
                          inline
                          label="Inside Campus"
                          name="group1"
                          type={type}
                          id={`inline-${type}-1`}
                      />
                      <Form.Check
                          className="tiny"
                          inline
                          label="Outside Campus"
                          name="group1"
                          type={type}
                          id={`inline-${type}-2`}
                      />
                      </div>
                  ))}
                  </Form>
                  </div>
              </div>
              <div class="divTableCell search">
              <Button className="small carousel-btn"> Search </Button>
              </div>
        </div>
      </div>
    </div>
  );
}

export default Multilayer_filter;