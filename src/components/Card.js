import React from "react";

const Card = ({
  detail: { NAME, DESCRIPTION, GITHUB_URL, WEBSITE_URL, IMAGE_SRC },
  imageSrc,
}) => {
  return (
    <div className="portfolio__card">
      <div className="portfolio__img-box">
        <img src={imageSrc} alt="portfolio pho" className="portfolio__img" />
      </div>
      <div className="portfolio__content-box">
        <div className="portfolio__content">
          <h3 className="heading-tertiary">{NAME}</h3>
          <p className="portfolio__description">{DESCRIPTION}</p>
          <div className="portfolio__action">
            <div className="portfolio__action-item">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={GITHUB_URL}
                className="btn btn--icon"
              >
                <i className="fab fa-github"></i>
                <span className="portfolio__action-text">Go To Github</span>
              </a>
            </div>
            <div className="portfolio__action-item">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={WEBSITE_URL}
                className="btn btn--icon"
              >
                <i className="fas fa-external-link-alt"></i>
                <span className="portfolio__action-text">Go To Website</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
