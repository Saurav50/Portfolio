import React from "react";
import Scroller from "./UI/Scroller";
import "./Education.css";
function EducationSection() {
  return (
    <div className="education">
      <div className="education-item item1">
        <h3>Bachelor of Technology in Information Technology</h3>
        <p>
          <span className="institution">
            Maharaja Agrasen Insititute Of Technology
          </span>
          <span className="location">Rohini, Delhi</span>
          <span className="graduation-date">2025</span>
        </p>
        <p>
          <span>Cumm. SGPA :</span> 9.7
        </p>
        <ul>
          <li>
            Completed a comprehensive curriculum in computer science, gaining a
            strong foundation in algorithms, data structures, and software
            development principles.
          </li>
          <li>
            Specialized in web development technologies, with a focus on
            JavaScript and its frameworks.
          </li>
          <li>
            Completed relevant coursework in database management, software
            engineering, and user interface design.
          </li>
        </ul>
      </div>
      <Scroller />

      <div className="education-item item2">
        <h3>High School Diploma</h3>
        <p>
          <span className="institution">Kendriya Vidyalaya No. 2,</span>
          <span className="location">Delhi Cantt</span>
          <span className="graduation-date">May, 2021</span>
        </p>
        <p>
          <span>Score :</span> 93.6%
        </p>

        <ul>
          <li>
            Completed high school education with a strong academic record.
          </li>
          <li>
            Participated in extracurricular activities related to technology and
            programming clubs.
          </li>
          <li>
            Developed a passion for computer science and web development during
            this period.
          </li>
        </ul>
      </div>
      {/* Add more education items if needed */}
    </div>
  );
}

export default EducationSection;
