import React from 'react'
import './Reservation.css'

const Reservation = (props) => {
  return (
    <article className="resy-card">
      <h2>{props.data.name}</h2>
      <p className="date" >{props.data.date}</p>
      <p className="time" >{props.data.time} pm</p>
      <p className="number" >Number of Guests: {props.data.number}</p>
      <button className="cancel-booking" >Cancel</button>
    </article>
  )
}

export default Reservation