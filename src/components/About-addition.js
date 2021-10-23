import React, { useRef } from "react";
import { useEffect } from "react/cjs/react.development";

const About = () => {
  const aboutRef = useRef(null);
  let aboutItems;
  let closeButton;

  useEffect(() => {
    aboutItems = aboutRef.current.querySelectorAll(".about__item");
    closeButton = aboutRef.current.querySelector(".btn--close");
  }, []);

  const onAboutClick = (e) => {
    console.log(e.target.closest(".about__item"));
    if (!e.target.closest(".about__item")) return;

    aboutItems.forEach((item) => item.classList.remove("active"));
    const clickedItem = e.target.closest(".about__item");
    aboutRef.current.classList.add("active");
    closeButton.classList.add("active");
    clickedItem.classList.add("active");
  };

  const onCloseClick = () => {
    aboutRef.current.classList.remove("active");
    closeButton.classList.remove("active");
    aboutItems.forEach((item) => item.classList.remove("active"));
  };

  return (
    <div ref={aboutRef} onClick={onAboutClick} className="about">
      <div className="about__container">
        <h2 className="heading-secondary text-center">About</h2>
        <div className="about__item-container">
          <div className="about__item">
            <button className="btn btn--about">
              <i className="fas fa-heart"></i>
              <span className="btn__about-item-text">Love</span>
            </button>
            <div className="about__detail">
              <div className="about__love">
                Cool Effect/Animation React Sci-Fi/Comedy Movies
              </div>
            </div>
          </div>
          <div className="about__item">
            <button className="btn btn--about">
              <i className="fas fa-brain"></i>
              <span className="btn__about-item-text">Traits</span>
            </button>
            <div className="about__detail">
              <div className="about__circle about__circle--main">
                <span className="about__circle about__circle--side"></span>
                <span className="about__circle about__circle--side"></span>
                <span className="about__circle about__circle--side"></span>
                <span className="about__circle about__circle--side"></span>
                <span className="about__circle about__circle--side"></span>
              </div>
            </div>
          </div>
          <div className="about__item">
            {/* <h2 className="heading-secondary text-center">Autobiography</h2> */}
            <button className="btn btn--about">
              <i className="fas fa-portrait"></i>
              <span className="btn__about-item-text">Autobiography</span>
            </button>
            <div className="about__detail">畢業於台北科技大學</div>
          </div>
        </div>
        <button onClick={onCloseClick} className="btn btn--close"></button>
      </div>
    </div>
  );
};

export default About;
