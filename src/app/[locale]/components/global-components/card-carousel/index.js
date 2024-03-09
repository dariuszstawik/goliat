"use client";
import { useRef, useState } from "react";

const CardCarousel = () => {
  const cards = [
    {
      id: 1,
      title: "Card 1",
      description: "This is card 1",
      img: "/sklejki.jpg",
    },
    {
      id: 2,
      title: "Card 2",
      description: "This is card 2",
      img: "/plyta-wiorowa.jpg",
    },
    {
      id: 3,
      title: "Card 3",
      description: "This is card 3",
      img: "/plyta-mdf.jpg",
    },
    {
      id: 4,
      title: "Card 4",
      description: "This is card 4",
      img: "/plyta-hdf-surowa.jpg",
    },
    {
      id: 5,
      title: "Card 5",
      description: "This is card 5",
      img: "/plyta-durelis.jpg",
    },
    {
      id: 6,
      title: "Card 6",
      description: "This is card 6",
      img: "/plyta-pilsniowa-surowa-twarda.jpg",
    },
    {
      id: 7,
      title: "Card 7",
      description: "This is card 7",
      img: "/pila-panelowa1.jpg",
    },
    {
      id: 8,
      title: "Card 8",
      description: "This is card 8",
      img: "/pila-panelowa2.jpg",
    },
    {
      id: 9,
      title: "Card 9",
      description: "This is card 9",
      img: "/pila-panelowa1.jpg",
    },
    {
      id: 10,
      title: "Card 10",
      description: "This is card 10",
      img: "/plyta-durelis.jpg",
    },

    {
      id: 11,
      title: "Card 1",
      description: "This is card 1",
      img: "/sklejki.jpg",
    },
    {
      id: 12,
      title: "Card 2",
      description: "This is card 2",
      img: "/plyta-wiorowa.jpg",
    },
    {
      id: 13,
      title: "Card 3",
      description: "This is card 3",
      img: "/plyta-mdf.jpg",
    },
    {
      id: 14,
      title: "Card 4",
      description: "This is card 4",
      img: "/plyta-hdf-surowa.jpg",
    },
    {
      id: 15,
      title: "Card 5",
      description: "This is card 5",
      img: "/plyta-durelis.jpg",
    },
    {
      id: 16,
      title: "Card 6",
      description: "This is card 6",
      img: "/plyta-pilsniowa-surowa-twarda.jpg",
    },
    {
      id: 17,
      title: "Card 7",
      description: "This is card 7",
      img: "/pila-panelowa1.jpg",
    },
    {
      id: 18,
      title: "Card 8",
      description: "This is card 8",
      img: "/pila-panelowa2.jpg",
    },
    {
      id: 19,
      title: "Card 9",
      description: "This is card 9",
      img: "/pila-panelowa1.jpg",
    },
    {
      id: 20,
      title: "Card 10",
      description: "This is card 10",
      img: "/plyta-durelis.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return newIndex < 0 ? cards.length - 1 : newIndex;
    });
  };

  const getTransform = (index) => {
    const offset = currentIndex * -100; // Adjust based on card width
    const transition =
      index === currentIndex ? "transform 0.3s ease-in-out" : "";
    return `translateX(${offset + index * 100}%) ${transition}`;
  };

  return (
    <div className="w-[90%] relative overflow-x-hidden">
      <div
        ref={carouselRef}
        className="flex transition-all duration-300 ease-in-out"
        style={{ transform: `translateX(${currentIndex * -100}%)` }}
      >
        {cards.map((card, index) => (
          <div
            key={card.id}
            className="w-25 flex-shrink-0 bg-white shadow-md rounded mx-2"
            style={{ transform: getTransform(index) }}
          >
            <h3>{card.title}</h3>
            {/* <p>{card.description}</p> */}
            <img
              src={card.img}
              alt="icon"
              className="w-32 transition ease-in-out delay-150 duration-7000"
            />
            {card.content}
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 -right-5 bg-white rounded-full p-2 focus:outline-none"
        onClick={handleNext}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
      <button
        className="absolute top-1/2 -left-5 bg-white rounded-full p-2 focus:outline-none"
        onClick={handlePrev}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
    </div>
  );
};

export default CardCarousel;
