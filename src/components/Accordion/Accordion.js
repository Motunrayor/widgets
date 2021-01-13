import React, { useState } from "react";
// import Title, { Container, Para} from "./style";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="ui styled accordion">
      {items.map((item, index) => {
        const active = index === activeIndex ? "active" : "";
        return (
          <div key={item.title}>
            <div
              className={`title ${active}`}
              onClick={() => onTitleClick(index)}
            >
              <i className=" dropdown icon"></i>
              <h1>{item.title}</h1>
            </div>
            <div className={`content ${active}`}>
              <p>{item.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
