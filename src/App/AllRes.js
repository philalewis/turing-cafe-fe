import React from 'react'
import Reservation from './Reservation'

const AllRes = (props) => {
  const resys = props.reservations.map(resy => {
    return <Reservation data={resy} />
  })

  return (
    <section>
      { resys }
    </section>
  )
}

export default AllRes