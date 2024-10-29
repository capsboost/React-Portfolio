import { useState } from 'react';
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import WorkedWith from './components/WorkedWith';
import About from './components/About';
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex-container">
      <Navbar />
      <Hero />
      <WorkedWith />
      <About />
      <Footer />
    </div>
  )
}

export default App
