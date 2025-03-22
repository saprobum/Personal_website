import {useState} from 'react'

import './flipCard.css';



interface FlipCardProps {
  front: string;
  back: string;
}


function FlipCard({ front, back }: FlipCardProps) {
    const [flipped, setFlipped] = useState(false);
  
    const handleFlip = () => setFlipped(!flipped);
  
    return (
      <div
        className={`flip-card ${flipped ? 'flipped' : ''}`}
        onClick={handleFlip}
      >
        <div className="flip-card-inner relative transform-3d w-full h-full text-center transition duration-750">
          <div className="flip-card-front">
            <h2>{front}</h2>
          </div>
          <div className="flip-card-back">
            <h2>{back}</h2>
          </div>
        </div>
      </div>
    );
  }








  const PortfolioPage = () => {



  interface CardData {
    front: string;
    back: string;
  }
  


  const cardData: CardData[] = [
    { front: 'Card 1 Front', back: 'Card 1 Back' },
    { front: 'Card 2 Front', back: 'Card 2 Back' },
    { front: 'Card 3 Front', back: 'Card 3 Back' },
    { front: 'Card 4 Front', back: 'Card 4 Back' },
    { front: 'Card 5 Front', back: 'Card 5 Back' },
    { front: 'Card 6 Front', back: 'Card 6 Back' },
    { front: 'Card 7 Front', back: 'Card 7 Back' },
    { front: 'Card 8 Front', back: 'Card 8 Back' },
    { front: 'Card 9 Front', back: 'Card 9 Back' },
    { front: 'Card 10 Front', back: 'Card 10 Back' },
  ];



  return (
    <div className="App">
      
      <div className="flex flex-wrap justify-center">
        {cardData.map((card, index) => (
          <FlipCard key={index} front={card.front} back={card.back} />
        ))}
      </div>
    </div>
  );
}

export default PortfolioPage;
