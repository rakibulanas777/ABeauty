import React, { useState } from "react";
import "../../styles/DauerhaftePrices.scss";
import MAN_IMG from "../../assets/man-min.png";
import WOMAN_IMG from "../../assets/woman-min.png";
import ARROW_DOWN from "../../assets/arrowdownblack.png";

const DauerhaftePrices = () => {
  const [slideNum, setSlideNum] = useState(0);
  const [slideNum2, setSlideNum2] = useState(0);
  const handleSlider = () => {
    if (slideNum === 0) {
      setSlideNum(360);
    } else if (slideNum === 360) {
      setSlideNum(720);
    } else if (slideNum === 720) {
      setSlideNum(900);
    }
  };
  const handleSlider2 = () => {
    if (slideNum2 === 0) {
      setSlideNum2(360);
    } else if (slideNum2 === 360) {
      setSlideNum2(720);
    } else if (slideNum2 === 720) {
      setSlideNum2(1080);
    }
  };
  const handleSliderUp = () => {
    if (slideNum === 900) {
      setSlideNum(720);
    } else if (slideNum === 720) {
      setSlideNum(360);
    } else if (slideNum === 360) {
      setSlideNum(0);
    }
  };
  const handleSliderUp2 = () => {
    if (slideNum2 === 1080) {
      setSlideNum2(720);
    } else if (slideNum2 === 720) {
      setSlideNum2(360);
    } else if (slideNum2 === 360) {
      setSlideNum2(0);
    }
  };
  return (
    <div className="DP">
      <div className="dp-title">DIENSTLEISTUNGEN UND PREISE</div>
      <div className="dp-divs">
        <div className="dp-1">
          <img src={MAN_IMG} className="dp-man" alt="MAN IMG"/>
          {slideNum >= 360 ? (
            <button className="dp-1-btn-up" onClick={handleSliderUp}>
              <img src={ARROW_DOWN} alt="ARROW DOWN"/>
            </button>
          ) : (
            <button
              className="dp-1-btn-up dp-1-btn-up-inactive"
              onClick={handleSliderUp}
            >
              <img src={ARROW_DOWN} alt="ARROW DOWN"/>
            </button>
          )}
          <div className="dp-1-slider">
            <div
              className="dp-1-slider-inner"
              style={{ transform: `translateY(-${slideNum}px)` }}
            >
              <div className="dp-1-slide">
                <p className="dp-1-slide-title">Stirn</p>
                <hr className="dp-1-slide-hr" />
                <p className="dp-1-slide-price">Fr. 35.-</p>
              </div>
              <div className="dp-1-slide">
                <p className="dp-1-slide-title">Bartbereich</p>
                <hr className="dp-1-slide-hr" />
                <p className="dp-1-slide-price">Fr. 60.-</p>
              </div>
              <div className="dp-1-slide">
                <p className="dp-1-slide-title">Hals</p>
                <hr className="dp-1-slide-hr" />
                <p className="dp-1-slide-price">Fr. 55.-</p>
              </div>
              <div className="dp-1-slide">
                <p className="dp-1-slide-title">Nacken</p>
                <hr className="dp-1-slide-hr" />
                <p className="dp-1-slide-price">Fr. 35.-</p>
              </div>
              <div className="dp-1-slide">
                <p className="dp-1-slide-title">Schultern</p>
                <hr className="dp-1-slide-hr" />
                <p className="dp-1-slide-price">Fr. 60.-</p>
              </div>
              <div className="dp-1-slide">
                <p className="dp-1-slide-title">Rücken</p>
                <hr className="dp-1-slide-hr" />
                <p className="dp-1-slide-price">Fr. 170.-</p>
              </div>
              <div className="dp-1-slide">
                <p className="dp-1-slide-title">Achseln</p>
                <hr className="dp-1-slide-hr" />
                <p className="dp-1-slide-price">Fr. 55.-</p>
              </div>
              <div className="dp-1-slide">
                <p className="dp-1-slide-title">Oberarme</p>
                <hr className="dp-1-slide-hr" />
                <p className="dp-1-slide-price">Fr. 90.-</p>
              </div>
              <div className="dp-1-slide">
                <p className="dp-1-slide-title">Unterarme</p>
                <hr className="dp-1-slide-hr" />
                <p className="dp-1-slide-price">Fr. 100.-</p>
              </div>
              <div className="dp-1-slide">
                <p className="dp-1-slide-title">Hände</p>
                <hr className="dp-1-slide-hr" />
                <p className="dp-1-slide-price">Fr. 40.-</p>
              </div>
              <div className="dp-1-slide">
                <p className="dp-1-slide-title">Brust</p>
                <hr className="dp-1-slide-hr" />
                <p className="dp-1-slide-price">Fr. 75.-</p>
              </div>
              <div className="dp-1-slide">
                <p className="dp-1-slide-title">Bauch</p>
                <hr className="dp-1-slide-hr" />
                <p className="dp-1-slide-price">Fr. 85.-</p>
              </div>
              <div className="dp-1-slide">
                <p className="dp-1-slide-title">Oberschenkel</p>
                <hr className="dp-1-slide-hr" />
                <p className="dp-1-slide-price">Fr. 160.-</p>
              </div>
              <div className="dp-1-slide">
                <p className="dp-1-slide-title">Unterschenkel</p>
                <hr className="dp-1-slide-hr" />
                <p className="dp-1-slide-price">Fr. 150.-</p>
              </div>
              <div className="dp-1-slide">
                <p className="dp-1-slide-title">Füsse</p>
                <hr className="dp-1-slide-hr" />
                <p className="dp-1-slide-price">Fr. 40.-</p>
              </div>
            </div>
          </div>
          {slideNum === 900 ? (
            <button
              className="dp-1-btn dp-1-btn-inactive"
              onClick={handleSlider}
            >
              <img src={ARROW_DOWN} alt="ARROW DOWN"/>
            </button>
          ) : (
            <button className="dp-1-btn " onClick={handleSlider}>
              <img src={ARROW_DOWN} alt="ARROW DOWN"/>
            </button>
          )}
        </div>
        <div className="dp-2">
          20% Rabatt auf ein Abonnement à 4 Behandlungen
        </div>
        <div className="dp-3">
          <img src={WOMAN_IMG} className="dp-woman" alt="WOMAN IMG"/>
          {slideNum2 >= 360 ? (
            <button className="dp-1-btn-up" onClick={handleSliderUp2}>
              <img src={ARROW_DOWN} alt="ARROW DOWN"/>
            </button>
          ) : (
            <button
              className="dp-1-btn-up dp-1-btn-up-inactive"
              onClick={handleSliderUp2}
            >
              <img src={ARROW_DOWN} alt="ARROW DOWN"/>
            </button>
          )}
          <div className="dp-1-slider">
            <div
              className="dp-1-slider-inner"
              style={{ transform: `translateY(-${slideNum2}px)` }}
            >
              <div className="dp-1-slide">
                <p className="dp-1-slide-title">Oberlippe</p>
                <hr className="dp-1-slide-hr" />
                <p className="dp-1-slide-price">Fr. 25.-</p>
              </div>
              <div className="dp-1-slide">
                <p className="dp-1-slide-title">Kinn</p>
                <hr className="dp-1-slide-hr" />
                <p className="dp-1-slide-price">Fr. 25.-</p>
              </div>
              <div className="dp-1-slide">
                <p className="dp-1-slide-title">Ganzes Gesicht</p>
                <hr className="dp-1-slide-hr" />
                <p className="dp-1-slide-price">Fr. 85.-</p>
              </div>
              <div className="dp-1-slide">
                <p className="dp-1-slide-title">Hals</p>
                <hr className="dp-1-slide-hr" />
                <p className="dp-1-slide-price">Fr. 35.-</p>
              </div>
              <div className="dp-1-slide">
                <p className="dp-1-slide-title">Rücken</p>
                <hr className="dp-1-slide-hr" />
                <p className="dp-1-slide-price">Fr. 150.-</p>
              </div>
              <div className="dp-1-slide">
                <p className="dp-1-slide-title">Achseln</p>
                <hr className="dp-1-slide-hr" />
                <p className="dp-1-slide-price">Fr. 45.-</p>
              </div>
              <div className="dp-1-slide">
                <p className="dp-1-slide-title">Oberarme</p>
                <hr className="dp-1-slide-hr" />
                <p className="dp-1-slide-price">Fr. 70.-</p>
              </div>
              <div className="dp-1-slide">
                <p className="dp-1-slide-title">Unterarme</p>
                <hr className="dp-1-slide-hr" />
                <p className="dp-1-slide-price">Fr. 80.-</p>
              </div>
              <div className="dp-1-slide">
                <p className="dp-1-slide-title">Hände</p>
                <hr className="dp-1-slide-hr" />
                <p className="dp-1-slide-price">Fr. 30.-</p>
              </div>
              <div className="dp-1-slide">
                <p className="dp-1-slide-title">Brustwarzen</p>
                <hr className="dp-1-slide-hr" />
                <p className="dp-1-slide-price">Fr. 25.-</p>
              </div>
              <div className="dp-1-slide">
                <p className="dp-1-slide-title">Bauch</p>
                <hr className="dp-1-slide-hr" />
                <p className="dp-1-slide-price">Fr. 60.-</p>
              </div>
              <div className="dp-1-slide">
                <p className="dp-1-slide-title">Bikini</p>
                <hr className="dp-1-slide-hr" />
                <p className="dp-1-slide-price">Fr. 60.-</p>
              </div>
              <div className="dp-1-slide">
                <p className="dp-1-slide-title">Intim</p>
                <hr className="dp-1-slide-hr" />
                <p className="dp-1-slide-price">Fr. 40.-</p>
              </div>
              <div className="dp-1-slide">
                <p className="dp-1-slide-title">Gesäss</p>
                <hr className="dp-1-slide-hr" />
                <p className="dp-1-slide-price">Fr. 90.-</p>
              </div>
              <div className="dp-1-slide">
                <p className="dp-1-slide-title">Oberschenkel</p>
                <hr className="dp-1-slide-hr" />
                <p className="dp-1-slide-price">Fr. 140.-</p>
              </div>
              <div className="dp-1-slide">
                <p className="dp-1-slide-title">Unterschenkel</p>
                <hr className="dp-1-slide-hr" />
                <p className="dp-1-slide-price">Fr. 130.-</p>
              </div>
              <div className="dp-1-slide">
                <p className="dp-1-slide-title">Füsse</p>
                <hr className="dp-1-slide-hr" />
                <p className="dp-1-slide-price">Fr. 30.-</p>
              </div>
            </div>
          </div>
          {slideNum2 === 1080 ? (
            <button
              className="dp-1-btn dp-1-btn-inactive"
              onClick={handleSlider2}
            >
              <img src={ARROW_DOWN} alt="ARROW DOWN" />
            </button>
          ) : (
            <button className="dp-1-btn " onClick={handleSlider2}>
              <img src={ARROW_DOWN} alt="ARROW DOWN" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DauerhaftePrices;
