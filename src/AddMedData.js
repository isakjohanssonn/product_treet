import React, { Component } from 'react';
import { Button } from "react-bootstrap";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import PostEHR from "./openEHR/PostEHR"


class AddMedData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDate: true,
      date: new Date(),
      showMedtype: false,
      showInput: false,
      medtype: "diabetes",
      showSummary: true,
      input: null,
      dateString: null
    };

  }
  // calendar date update
  onChange = date => this.setState({ date })
  //changes which code will be shown from the render statement
  secondView = () => this.setState({ showDate: false, showMedtype: true, dateString: this.state.date })
  thirdView = () => this.setState({ showMedtype: false, showInput: true })
  fourthView = () => this.setState({ showInput: false, showSummary: true })
  handleChange = event => this.setState({ input: event.target.value });

  render() {

    if (this.state.showDate) {
      return (
        <div>

          <Calendar
            onChange={this.onChange}
            showWeekNumbers
            value={this.state.date}
            Date
            maxDate = {new Date()}
           
          />
          <Button onClick={this.secondView}>Next</Button>
        </div>
      );
    }
    if (this.state.showMedtype) {
      return (
        <div>
          <h1 >vad vill du lämna för data?</h1>
          <Button onClick={this.thirdView}>Next</Button>

        </div>
      );
    }
    if (this.state.showInput) {
      return (
        <div>
          <h1>{this.state.medtype}</h1>
          <input onChange={this.handleChange} placeholder="fyll i här"></input>
          <Button onClick={this.fourthView}>Next</Button>
        </div>
      );
    }
    if (this.state.showSummary) {
      return (
        <div>
          <h1>Summary</h1>
          {<h3>{this.state.date.toString().split(0, 14)}</h3>}
          <h3>{this.state.medtype} : {this.state.input}</h3>
          <Button onClick={this.submit}>submit</Button>
        </div>

      );
    }
  }
}

export default AddMedData;