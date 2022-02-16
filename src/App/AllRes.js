import React from 'react'
import Reservation from './Reservation'
import './AllRes.css'

const AllRes = (props) => {
  const resys = props.reservations.map(resy => {
    return (
      <Reservation
        data={resy} key={Date.now() + resy.id}
        deleteReservation={props.deleteReservation}
      />
    )
  })

  return (
    <section className="all-res">
      { resys }
    </section>
  )
}

export default AllRes