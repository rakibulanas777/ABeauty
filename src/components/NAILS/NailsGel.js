import React from "react";
import "../../styles/WhyUs.scss";
import CLOUD_IMG from "../../assets/cloud.png";
import FIRST_IMG from "../../assets/first.png";
import STAR_IMG from "../../assets/star.png";

const NailsGel = () => {
  return (
    <div className="WhyUs WhyUsCustom">
      <div className="wu-title wu-custom">VORTEILE MIT POLYGEL</div>
      <div className="wu-content">
        <div className="wu-div wu-first">
          <div className="wu-upper">
            <img src={CLOUD_IMG} className="wu-img-1" alt="Cloud"/> <p>LEICHTER</p>
          </div>
          <div className="wu-bottom">
            <p>- Leichter als Acryl und klassischer Gel</p>

            <p>- Natürliche Modellage</p>
          </div>
        </div>
        <div className="wu-div wu-second">
          <div className="wu-upper">
            <img src={FIRST_IMG} className="wu-img-2" alt="First"/> <p>STÄRKER</p>
          </div>
          <div className="wu-bottom">
            <p>- Stärker als klassischer Gel und flexibler als Acryl</p>
            <p className="boosted-p">- Kein Lifting und kein Splittern</p>
          </div>
        </div>
        <div className="wu-div wu-third">
          <div className="wu-upper">
            <img src={STAR_IMG} className="wu-img-3" alt="Star"/> <p>EINFACHER</p>
          </div>
          <div className="wu-bottom">
            <p>- Perfekte Konsistenz</p>
            <p>- Kein Verlaufen</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NailsGel;
