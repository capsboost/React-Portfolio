import React, {useState, useEffect} from 'react'

const logos = [
    './src/assets/logo.jpg',
    './src/assets/react.svg',
    './public/vite.svg',
    './src/assets/logo.jpg',
    './src/assets/react.svg',
    './public/vite.svg',
    './src/assets/logo.jpg',
    './src/assets/react.svg',
    './public/vite.svg',
    './src/assets/logo.jpg',
    './src/assets/react.svg',
    './public/vite.svg',
    './src/assets/logo.jpg',
    './src/assets/react.svg',
    './public/vite.svg','./src/assets/logo.jpg',
    './src/assets/react.svg',
    './public/vite.svg',
    './src/assets/logo.jpg',
    './src/assets/react.svg',
    './public/vite.svg',
    './src/assets/logo.jpg',
    './src/assets/react.svg',
    './public/vite.svg',
    './src/assets/logo.jpg',
    './src/assets/react.svg',
    './public/vite.svg',
    './src/assets/logo.jpg',
    './src/assets/react.svg',
    './public/vite.svg',
];

const LOGOS_TO_DISPLAY = 3;

function LogoSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(()=>{
            setCurrentIndex((prevIndex)=>
            prevIndex === logos.length - LOGOS_TO_DISPLAY ? 0: prevIndex + 1);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

  return (
    <div className="overflow-hidden py-7">
        <div className="flex transition-transform duration-500" style={{transform: `translateX(-${(currentIndex * 100) / LOGOS_TO_DISPLAY}%)` }}>
        {logos.map((logo, index) => (
            <div key={index} className="flex-none w-1/3 flex justify-center items-center">
                <img src={logo} alt={`logo ${index + 1}`} className="h-24 rounded-full" />
            </div>
            ))}
        </div>
    </div>
  );
};

export default LogoSlider;