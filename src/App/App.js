import React, { Component } from 'react';
import './App.css';
import AllRes from './AllRes'
import Form from './Form'

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
    this.getBookingInfo()
  }

  getBookingInfo = () => {
    fetch('http://localhost:3001/api/v1/reservations')
    .then(response => response.json())
    .then(data => {
      this.setState({ reservations: data })
    })
    .catch(error => console.log(error))
  }

  submitBooking = info => {
    console.log('INFO', info)
    // this.setState({
    //   reservations: [...this.state.reservations, {
    //     id: Date.now(),
    //     name: info.name,
    //     date: info.date,
    //     time: info.time,
    //     number: info.number
    //   }]
    // })
    fetch('http://localhost:3001/api/v1/reservations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(info)
    })
    .then(response => response.json())
    .then(data => {
      console.log('DATA', data)
      this.getBookingInfo()
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form submitBooking={this.submitBooking} />
        </div>
        <div className='resy-container'>
          <AllRes reservations={this.state.reservations} />
        </div>
      </div>
    )
  }
}

export default App;
