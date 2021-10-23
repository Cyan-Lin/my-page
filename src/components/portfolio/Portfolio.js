import React from "react";

import { PORTFOLIO } from "../../config";
// import Portfolio from "../images/portfolio.jpg";
import cyecommerce from "../../images/cyecommerce.jpg";
import cymap from "../../images/cymap.jpg";
import cynote from "../../images/cynote.jpg";
import cytravel from "../../images/cytravel.jpg";

import Card from "./Card";

const Portfolio = () => {
  const images = [cyecommerce, cymap, cynote, cytravel];
  const renderCards = () => {
    return Object.keys(PORTFOLIO).map((key, i) => (
      <Card key={i} detail={PORTFOLIO[key]} imageSrc={images[i]} />
    ));
  };

  return (
    <div className="portfolio">
      <div className="portfolio__container">
        <h2 className="heading-secondary text-center">Portfolio</h2>
        <div className="portfolio__card-container">{renderCards()}</div>
      </div>
    </div>
  );
};

export default Portfolio;
