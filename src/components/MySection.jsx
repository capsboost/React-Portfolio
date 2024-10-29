import React, {useState, useEffect} from "react";
import Card from './Card';

function MySection() {
    const [cardData, setCardData] = useState([]);
  
  useEffect(() => {
    fetch('./public/cardData.json')
    .then(response => response.json())
    .then(data => setCardData(data));
  }, []);

  return (
    <section className="Mysec flex flex-wrap justify-center bg-gray-200 gap-6">
        {cardData.map((card, index) => (
            <Card 
            key={index}
            logo={card.logo}
            title={card.title}
            paragraph={card.paragraph}
            />
        ) )}
    </section>
    
  );
}

export default MySection
