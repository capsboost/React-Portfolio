import React from 'react'

function Card({logo, title, paragraph}) {
  return (
    <div className="card ">
        <img src={logo} alt={title} className="rounded-full flex  bg-transparent"/>
        <h2 className="flex font-semibold text-lg py-1">{title}</h2>
        <p className="flex font-normal py-1">{paragraph}</p>
    </div>
  )
}

export default Card;