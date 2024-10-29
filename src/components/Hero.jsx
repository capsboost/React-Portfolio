import React from 'react'
import CenteredImage from './CenteredImage'
import '../index.css'

function Hero() {
  return (
    <div className="Hero border-l-2 border-b-2 border-r-2 border-gray-300 items-center">
      <section className="heroImg">
       <CenteredImage />
      </section>
      <section>
       <h1 className="flex justify-center font-semibold text-4xl pb-3">Building digital product,brands,<br/> and experience.</h1>
       </section>
       <section>
       <button className="hBtn flex text-white rounded-full">Latest shots</button>
      </section>
      
    </div>
  )
}

export default Hero