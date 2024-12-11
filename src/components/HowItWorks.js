import React, { useRef } from "react";
import "../styles/HowItWorks.scss";

const tabs = [
  "Nutrition",
  "Physical activity",
  "Restorative sleep",
  "Stress management",
  "Social connection",
  "Substance abuse",
];

const cards = [
  {
    title: "Nutrition",
    description:
      "Evidence supports the use of a whole food, plant-predominant diet to prevent, treat and reverse chronic illness.",
    icon: require("../assets/images/nutrition-icon.png"),
    detailIcon: require("../assets/images/blood-pressure-icon.png"),
    detail: "121/80 mmHg",
  },
  {
    title: "Physical activity",
    description:
      "Regular physical activity is key to managing weight, improving mental health, and reducing risk of chronic disease.",
    icon: require("../assets/images/physical-activity-icon.png"),
    detailIcon: require("../assets/images/heart-icon.png"),
    detail: "32 minutes",
  },
  {
    title: "Restorative sleep",
    description:
      "Consistent, quality sleep is essential for cognitive function and physical health.",
    icon: require("../assets/images/sleep-icon.png"),
    detailIcon: require("../assets/images/sleep-icon1.png"),
    detail: "8 hours",
  },
  {
    title: "Stress management",
    description:
      "Effective stress management techniques are crucial for mental well-being and overall health.",
    icon: require("../assets/images/stress-icon.png"),
    detailIcon: require("../assets/images/stress-icon1.png"),
    detail: "60 bpm",
  },
  {
    title: "Social connection",
    description:
      "Strong social connections are associated with a lower risk of many chronic diseases and enhanced mental health.",
    icon: require("../assets/images/connection-icon.png"),
    detailIcon: require("../assets/images/social-icon.png"),
    detail: "Feeling better",
  },
  {
    title: "Substance abuse",
    description:
      "Avoiding tobacco, limiting alcohol use, and abstaining from harmful substances are vital for long-term health.",
    icon: require("../assets/images/substance-icon.png"),
    detailIcon: require("../assets/images/days-icon.png"),
    detail: "62 days",
  },
];

function HowItWorks() {
  const cardsContainerRef = useRef(null);

  const scrollLeft = () => {
    cardsContainerRef.current.scrollBy({
      left: -400,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    cardsContainerRef.current.scrollBy({
      left: 400,
      behavior: "smooth",
    });
  };

  const navigateToCard = (index) => {
    cardsContainerRef.current.scrollTo({
      left: index * 420, // Card width + spacing
      behavior: "smooth",
    });
  };

  return (
    <section className="how-it-works">
      <div className="header">
        <h3>How It Works</h3>
        <h2>
          <span className="highlight">Lifestyle as medicine:</span> The six pillars
        </h2>
      </div>
      <div className="tabs">
        {tabs.map((tab, index) => (
          <button key={index} onClick={() => navigateToCard(index)}>
            {tab}
          </button>
        ))}
      </div>
      <div className="cards-wrapper">
        <button className="arrow left" onClick={scrollLeft}>
          &#8249;
        </button>
        <div className="cards-container" ref={cardsContainerRef}>
          {cards.map((card, index) => (
            <div key={index} className="card">
              <div className="card-image-wrapper">
                <img src={card.icon} alt={card.title} />
                <div className="card-detail">
                  <img
                    src={card.detailIcon}
                    alt="Icon"
                    className="detail-icon"
                  />
                  {card.detail}
                </div>
              </div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
        <button className="arrow right" onClick={scrollRight}>
          &#8250;
        </button>
      </div>
    </section>
  );
}

export default HowItWorks;