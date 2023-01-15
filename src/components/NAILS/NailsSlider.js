import React, { useState } from "react";
import "../../styles/NailsSlider.scss";
import NAILSPRICE_IMG from "../../assets/nailsprice.png";
import { getNailPrices } from "../../redux/actions/actionCreator";
import { connect } from "react-redux";
import ARROWDOWNSLIDER_IMG from "../../assets/arrowdownblack.png";

const NailsSlider = (props) => {
  const [num, setNum] = useState(0);
  const handleSlideDown = () => {
    setNum(238);
    if (num === 238) {
      setNum(480);
    } else if (num === 480) {
      setNum(598);
    }
  };
  const handleSlideUp = () => {
    if (num === 598) {
      setNum(480);
    } else if (num === 480) {
      setNum(238);
    } else if (num === 238) {
      setNum(0);
    }
  };
  return (
    <div className="NailsSlider">
      <div className="ns-1">
        <div className="ns-1-title">
          <p>DIENSTLEISTUNGEN & PREISE</p>
        </div>
        {num >= 238 ? (
          <div className="ns-1-button-back-div">
            <button
              className="ns-1-button ns-1-button-back"
              onClick={handleSlideUp}
            >
              <img src={ARROWDOWNSLIDER_IMG} alt="Arrow down"/>
            </button>
          </div>
        ) : (
          <div className="ns-1-button-back-div ns-1-button-inactive">
            <button
              className="ns-1-button ns-1-button-back"
              onClick={handleSlideUp}
            >
              <img src={ARROWDOWNSLIDER_IMG} alt="Arrow down"/>
            </button>
          </div>
        )}
        <div className="ns-1-slider">
          <div
            className="ns-1-slider-inner"
            style={{ transform: `translateY(-${num}px)` }}
          >
            {props.nailsPrices.map((item, index) => (
              <div className="nss-container" key={index}>
                <p className="nss nss-title">{item.name}</p>
                <p className="nss nss-price">Fr. {item.price}.-</p>
                <div className="nss nss-content">
                  {item.info.map((infoItem, index) => (
                    <p className="nss-content-each" key={index}>{infoItem}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        {num === 598 ? (
          <div className="ns-1-button-div ns-1-button-down-inactive">
            <button className="ns-1-button" onClick={handleSlideDown}>
              <img src={ARROWDOWNSLIDER_IMG} alt="Arrow down"/>
            </button>
          </div>
        ) : (
          <div className="ns-1-button-div">
            <button className="ns-1-button" onClick={handleSlideDown}>
              <img src={ARROWDOWNSLIDER_IMG} alt="Arrow down"/>
            </button>
          </div>
        )}
      </div>
      <div className="ns-2">
        <img src={NAILSPRICE_IMG} alt="Nails price img"/>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    nailsPrices: state.mainReducer.nailsPrices,
  };
};

export default connect(mapStateToProps, { getNailPrices })(NailsSlider);
