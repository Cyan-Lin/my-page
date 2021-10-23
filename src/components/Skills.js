import React from "react";

import { SKILLS } from "../config";

const Skills = () => {
  const onMouseMove = (e) => {
    const btn = e.target.closest(".btn--ripple");
    const btnViewportOffset = btn.getBoundingClientRect();

    const x = e.nativeEvent.clientX - btnViewportOffset.left;
    const y = e.nativeEvent.clientY - btnViewportOffset.top;

    btn.style.setProperty("--x", `${x}px`);
    btn.style.setProperty("--y", `${y}px`);
  };

  const renderSkillLists = () => {
    return Object.keys(SKILLS).map((key, i) => (
      <ul
        key={i}
        className="skills__list"
        data-text={`${key.replaceAll("_", " ")}`}
      >
        {SKILLS[key].map((skill, j) => (
          <li key={j} className="skills__item">
            <button onMouseMove={onMouseMove} className="btn btn--ripple">
              <span className="skills__name">{skill}</span>
            </button>
          </li>
        ))}
      </ul>
    ));
  };

  return (
    <div className="skills">
      <div className="skills__container">
        <h2 className="heading-secondary text-center">Skills</h2>
        <div className="skills__list-container">{renderSkillLists()}</div>
      </div>
    </div>
  );
};

export default Skills;
