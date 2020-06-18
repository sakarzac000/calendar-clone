import React, { Component } from 'react';

import Header from "./header"
import Footer from "./footer"
import Content from "./content/content"

const data = [
  {
    id: 4,
    month: "May",
    daysInMonth: 31,
    daysInPreviousMonth: 30,
    startDay: 5,
    year: 2020
  },
  { 
    id: 5,
    month: "June",
    daysInMonth: 30,
    daysInPreviousMonth: 31,
    startDay: 1,
    year: 2020
  },
  {
    id: 6,
    month: "July",
    daysInMonth: 31,
    daysInPreviousMonth: 30,
    startDay: 3,
    year: 2020
  }
]

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      id: "",
      month: "",
      daysInMonth: "",
      daysInPreviousMonth: "",
      startDay: "", 
      year: ""
    }
  }

  componentDidMount() {
    const month = data[1]

    this.setState({
      id: month.id,
      month: month.month,
      daysInMonth: month.daysInMonth,
      daysInPreviousMonth: month.daysInPreviousMonth,
      startDay: month.startDay,
      year: month.year
    })
  }

  render() {
    return (
      <div className='app'>
        <Header month={this.state.month} />
        <Content 
        daysInMonth={this.state.daysInMonth} 
        daysInPreviousMonth={this.state.daysInPreviousMonth}
        startDay={this.state.startDay}
        />
        <Footer year={this.state.year} />
      </div>
    );
  }
}
