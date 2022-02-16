import React from 'react'
import './Reservation.css'

const Reservation = (props) => {
  return (
    <article className="resy-card">
      <h2>{props.data.name}</h2>
      <p>{props.data.date}</p>
      <p>{props.data.time} pm</p>
      <p>Number of Guests: {props.data.number}</p>
      <button>Cancel</button>
    </article>
  )
}

export default Reservation