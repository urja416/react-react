import React from 'react'

const Detail = ({ id }) => {
  const showId = id ?? '';

  return (
    <div>

      <h1>This is a Detail {`${showId} `}</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, quisquam.</p>

    </div>
  )
}



export default Detail
