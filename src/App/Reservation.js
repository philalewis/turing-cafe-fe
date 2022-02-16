import React from 'react'

const Reservation = (props) => {
  console.log('reservation')
  return (
    <article>
      <p>{props.data.id}</p>
    </article>
  )
}

export default Reservation