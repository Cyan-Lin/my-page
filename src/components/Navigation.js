import React, { useRef, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";

import { NAV_LINKS } from "../config";

const Navigation = ({ history, location: { pathname } }) => {
  const navListRef = useRef(null);
  const toggleBtnRef = useRef(null);

  useEffect(() => {
    const allNavLinks =
      navListRef.current.querySelectorAll(".navigation__link");

    allNavLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.dataset.pathname === pathname) link.classList.add("active");
    });
  }, [pathname]);

  const renderNavLinks = () => {
    return NAV_LINKS.map((link, i) => {
      return (
        <li key={i} className="navigation__item">
          <Link
            to={`/${link.toLowerCase() || ""}`}
            data-pathname={`/${link.toLowerCase() || ""}`}
            className="navigation__link"
          >
            {link || "Home"}
          </Link>
        </li>
      );
    });
  };

  const onLogoClick = () => {
    toggleBtnRef.current.classList.remove("active");
    history.push("/");
  };

  const onNavListHover = (e) => {
    // e.target的classList是否包含navigation__link
    if (!e.target.classList.contains("navigation__link")) return;
    const allNavLinks =
      navListRef.current.querySelectorAll(".navigation__link");
    allNavLinks.forEach((link) => {
      link.style.opacity = 0.5;
    });
    e.target.style.opacity = 1;
  };

  const onNavListUnHover = () => {
    const allNavLinks =
      navListRef.current.querySelectorAll(".navigation__link");
    allNavLinks.forEach((link) => {
      link.style.opacity = 1;
    });
  };

  const handleToggle = () => {
    toggleBtnRef.current.classList.toggle("active");
  };

  const onNavListClick = (e) => {
    if (!e.target.closest(".navigation__link")) return;
    toggleBtnRef.current.classList.remove("active");
  };

  return (
    <div className="navigation">
      <div className="navigation__container">
        <div onClick={onLogoClick} className="navigation__logo clickable">
          <span className="hatched jumping" data-text="C">
            C
          </span>
          yan
        </div>
        <button
          ref={toggleBtnRef}
          onClick={handleToggle}
          className="navigation__toggle-btn"
        >
          <span className="navigation__toggle-icon">&nbsp;</span>
        </button>

        <ul
          ref={navListRef}
          onMouseOver={onNavListHover}
          onMouseOut={onNavListUnHover}
          onClick={onNavListClick}
          className="navigation__list"
        >
          {renderNavLinks()}
        </ul>
      </div>
    </div>
  );
};

export default withRouter(Navigation);
