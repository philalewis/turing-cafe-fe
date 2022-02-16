import React from 'react'
import Reservation from './Reservation'
import './AllRes.css'

const AllRes = (props) => {
  console.log(props)
  const resys = props.reservations.map(resy => {
    return <Reservation data={resy} />
  })

  return (
    <section className="all-res">
      { resys }
    </section>
  )
}

export default AllRes