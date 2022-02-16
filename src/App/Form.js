import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      date: '',
      time: '',
      number: 0
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleClick = event => {
    event.preventDefault()
    this.props.submitBooking({
      name: this.state.name,
      date: this.state.date,
      time: this.state.time,
      number: parseInt(this.state.number)
    })
    this.setState({
      name: '',
      date: '',
      time: '',
      number: 0
    })
  }

  render() {
    return (
      <form>
        <input 
          type="text" 
          name="name"
          placeholder="Name"
          value={this.state.name}
          onChange={event => this.handleChange(event)}
        />
        <input 
          type="text" 
          name="date"
          placeholder="Date (mm/dd)"
          value={this.state.date}
          onChange={event => this.handleChange(event)}
        />
        <input
          type="text"
          name="time"
          placeholder="Time"
          value={this.state.time}
          onChange={event => this.handleChange(event)}
        />
        <input 
          type="number"
          name="number"
          placeholder="Number of Guests"
          value={this.state.number}
          onChange={event => this.handleChange(event)}
        />
        <button 
          className="submit-booking"
          onClick={event => this.handleClick(event)}
        >Make Reservation</button>
      </form>
    )
  }
}

export default Form