export const HOME_PAGE_MAIN_TEXT = "I'm Cyan Lin";

export const SKILLS = {
  FRONT_END: ["HTML", "SCSS", "JavaScript", "React"],
  BACK_END: ["Node.js", "Express"],
  DATABASE: ["MongoDB"],
  OTHERS: ["Heroku", "Git"],
};

export const PORTFOLIO = {
  ECOMMERCE: {
    NAME: "CyEcommerce",
    DESCRIPTION:
      "A online shop created by React, Redux, SCSS, Express, MongoDB. In addition to the product List function, it also include social login, shopping cart, wish list, creating and checking order, and paying with credit card(please enter 4242...)",
    GITHUB_URL: "https://github.com/Cyan-Lin/my-ecommerce",
    WEBSITE_URL: "https://cyecommerce.herokuapp.com",
    IMAGE_SRC: "../../images/cyecommerce.jpg",
  },
  MAP: {
    NAME: "CyMap",
    DESCRIPTION:
      "A weather and covid-19 map created by React, Redux, SCSS, Google Map API. Include real-time weather and Weather forecast. It also featuring add-to-favorites and search-location.",
    GITHUB_URL: "https://github.com/Cyan-Lin/my-map",
    WEBSITE_URL: "https://cymap.netlify.app",
    IMAGE_SRC: "../../images/cymap.jpg",
  },
  NOTE: {
    NAME: "CyNote",
    DESCRIPTION:
      "A note website created by React, Redux, SCSS. Include crate, search, edit, remove notes.",
    GITHUB_URL: "https://github.com/Cyan-Lin/my-todo",
    WEBSITE_URL: "https://cynote.netlify.app",
    IMAGE_SRC: "../../images/cynote.jpg",
  },
  TRAVEL: {
    NAME: "CyTravel",
    DESCRIPTION: "A simple brochure site created by React, SCSS.",
    GITHUB_URL: "https://github.com/Cyan-Lin/myTravel",
    WEBSITE_URL: "https://cytravel.netlify.app",
    IMAGE_SRC: "../../images/cytravel.jpg",
  },
  RESTAURANT: {
    NAME: "CyRestaurant",
    DESCRIPTION: "A restaurant website created by javascript, SCSS.",
    GITHUB_URL: "https://github.com/Cyan-Lin/my-restaurant",
    WEBSITE_URL: "https://cyrestaurant.netlify.app",
    IMAGE_SRC: "../../images/cyrestaurant.jpg",
  },
};

export const NAV_LINKS = ["", "About", "Skills", "Portfolio", "Contact"];

export const DOMAIN_NAME =
  process.env.NODE_ENV === "production"
    ? "https://cywebsite.netlify.app"
    : "http://localhost:3000";
