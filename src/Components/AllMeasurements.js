import React, {useState} from "react";
import "./AllMeasurements.css";
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { LineChart, XAxis, Line, ResponsiveContainer, Label} from 'recharts';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { BiRightArrowCircle, BiLeftArrowCircle } from 'react-icons/bi';


const AllMeasurements = () => {

    const [toDate, setToDate] = useState(null);
    const [fromDate, setFromDate] = useState(null);

    const data = [
        {
          name: 'Mon', value: 4000,
        },
        {
          name: 'Tue', value: 3000,
        },
        {
          name: 'Wed', value: 2000,
        },
        {
          name: 'Thu', value: 2780,
        },
        {
          name: 'Fri', value: 1890,
        },
        {
          name: 'Sat', value: 2390,
        },
        {
          name: 'Sun', value: 3490,
        },
      ];


  return (
    <div>
      <div className="header">
        <h3>Measurements</h3>
      </div>
        <Dropdown>
            <Dropdown.Toggle className="typeButton" id="dropdown-basic">
                Type
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>

        <div className="dateButtons">
            <DatePicker 
                className="datePicker"
                selected={fromDate}
                onChange={date => setFromDate(date)}
                placeholderText="From - date"/>
            <DatePicker 
                className="datePicker"
                selected={toDate}
                onChange={date => setToDate(date)}
                placeholderText="To - date"/>
        </div>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} margin={{ top: 40, right: 30, left: 30, bottom: 30 }}>
              <XAxis dataKey="name">
                <Label value={fromDate + ' - ' + toDate} offset={0} position="bottom"/>
              </XAxis>
              <Line dot={false} type="monotone" dataKey="value" stroke="#8884d8" color="black"/>
          </LineChart>
        </ResponsiveContainer>

        <div>
          <Card border="secondary" className="typeDataDateCard">
            <Card.Body>
              <Card.Text>
                Type | Data | Date
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="secondary" className="typeDataDateCard">
            <Card.Body>
              <Card.Text>
                Type | Data | Date
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="secondary" className="typeDataDateCard">
            <Card.Body>
              <Card.Text>
                Type | Data | Date
              </Card.Text>
            </Card.Body>
          </Card>

        </div>
        <div className="arrowButtons">
          <div className="leftArrowButton">
            <Link to="/measurements">
              <Button className='returnButton'><BiLeftArrowCircle size={60}/></Button>
            </Link>
          </div>
          <div className="rightArrowButton">
            <BiRightArrowCircle size={60}></BiRightArrowCircle>
          </div>
        </div>
    </div>


  );
}

export default AllMeasurements;