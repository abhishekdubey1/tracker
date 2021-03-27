import React, { useState } from "react";
import Charts from "../Recharts";

const SubTabs = ["Daily", "Weekly", "Monthly"];

const Steps = (props) => {
  const [activeSubTab, setActiveSubTab] = useState(SubTabs[1]);
  return (
    <div>
      <div className="steps-container-border">
        <div className="steps-container">
          <span className="day">Today</span>
          <span className="steps-count">8312</span>
          <span className="steps">Steps</span>
        </div>
      </div>
      <div className="steps-to-go">1688 steps to go</div>
      <div className="sub-tabs">
        <ul className="sub-tabs-container">
          {SubTabs.map((el) => (
            <li
              key={el}
              onClick={(e) => setActiveSubTab(el)}
              className={`${
                activeSubTab === el ? "active-sub-tab " : ""
              }sub-tab`}
            >
              {el}
            </li>
          ))}
        </ul>
      </div>
      <Charts />
    </div>
  );
};

export default Steps;
