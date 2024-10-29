import React, { useEffect, useState } from 'react'
import LogoSlider from './LogoSlider'
import '../index.css'
import MySection from './MySection'

function WorkedWith() {
  
  return (
    <div>
        <section>
          <div className="company border-b-2 border-gray-300">
          <LogoSlider />
          </div>
          <div className="collab flex-none  bg-gray-200">
            <h1 className="flex justify-center text-pretty text-3xl">Collaborate with brands and agencies</h1>
            <h1 className="flex justify-center text-pretty text-3xl">to create impactful results.</h1>
            <hr className="mt-10 mb-10 mr-10 ml-10 border-gray-400"/>
            <button className="sbtn bg-white text-black rounded-l-full rounded-r-full py-3 px-4 mr-2 ml-2 transform skew-y-[-13deg] ">Services</button>
          </div>
          <div>
          <MySection />
          </div>
          <div>
          <section className="blank bg-gray-200 h-32"></section>
          </div>
         
        </section>
    </div>
  )
}

export default WorkedWith