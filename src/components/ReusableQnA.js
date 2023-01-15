import React, { useState } from "react";
import "../styles/ReusableQnA.scss";
import ARROWDOWN_IMG from "../assets/arrow_down.png";
const ReusableQnA = (props) => {
  const [active, setActive] = useState(false);
  return (
    <div className="rq">
      <p className="rq-title">{props.name}</p>
      <img
        className={active ? "rq-img rq-img-active" : "rq-img"}
        src={ARROWDOWN_IMG} alt="Arrow down"
        onClick={() => {
          setActive(!active);
        }}
      />
      <p className={active ? "rq-desc rq-desc-active" : "rq-desc"}>
        {props.desc}
        <img src={props.img} className="kryo-img" alt="img"/>
      </p>
    </div>
  );
};

export default ReusableQnA;
