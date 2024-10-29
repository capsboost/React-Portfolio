import React from 'react'

function About() {
  return (
    <div className="About border-l-2 border-t-2 border-r-2 border-gray-300 bg-gray-100 flex items-center">
    <section className="heroImg py-2">
    <section className="cImg flex justify-center items-center">
        <img src="./public/vite.svg" alt="my picture" className="aLogo w-1/2 p-1 rounded-full" />
    </section>
    </section>
    <section>
      <h1 className="text-4xl py-4">Tell me about your next project</h1>
    </section>
    <section className="py-4 px-">
      <button className="abtn rounded-full bg-black text-white border-4 border-white">
        Email Me
      </button>
      <button className="abtn rounded-full bg-white text-black border-2 border-black">
        WhatsApp
      </button>
    </section>
  </div>
  )
}

export default About