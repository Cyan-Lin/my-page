import React from "react";
import { Link } from "react-router-dom";

import { HOME_PAGE_MAIN_TEXT } from "../config";

const Home = () => {
  const renderFirstLineTextItem = () => {
    return HOME_PAGE_MAIN_TEXT.split("").map((text, i) => {
      if (text === " ")
        return (
          <li key={i} className="home__text-item">
            &nbsp;
          </li>
        );
      if (i === 4)
        return (
          <li
            key={i}
            onMouseOver={(e) => e.target.classList.add("active")}
            onAnimationEnd={(e) => e.target.classList.remove("active")}
            className="home__text-item hatched"
            data-text="C"
          >
            C
          </li>
        );
      return (
        <li
          key={i}
          onMouseOver={(e) => e.target.classList.add("active")}
          onAnimationEnd={(e) => e.target.classList.remove("active")}
          className="home__text-item"
        >
          {text}
        </li>
      );
    });
  };

  return (
    <div className="home">
      <div className="home__container">
        <div className="home__img-box"></div>
        <ul className="home__text-list">{renderFirstLineTextItem()}</ul>
        <p className="home__sub-text">
          As a cross field learner, I love learning new tech and improving
          myself
        </p>
        <div className="home__action">
          <Link to="/about" className="btn btn--home-action">
            <span className="btn__home-action-text btn__home-action-text--visible">
              Learn More
            </span>
            <span className="btn__home-action-text btn__home-action-text--invisible">
              About Me
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
