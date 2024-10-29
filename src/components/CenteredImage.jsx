import React from 'react'

function CenteredImage() {
  return (
    <section className="cImg flex justify-center items-center border-2 border-white bg-white">
        <img src="./src/assets/logo.jpg" alt="my picture" className="w-full p-1 rounded-full" />
    </section>
  )
}

export default CenteredImage