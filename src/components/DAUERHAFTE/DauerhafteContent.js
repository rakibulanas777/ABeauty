import React from "react";
import "../../styles/DauerhafteContent.scss";
import DAUERHAFTE_IMG from "../../assets/dauerhafte-min.png";

const DauerhafteContent = () => {
  return (
    <div className="DC">
      <div className="dc-1">
        <p className="dc-1-title">
          SANFTE UND GLATTE HAUT: EINFACH UND SICHER DURCH MODERNSTE DIODENLASER
          TECHNOLOGIE
        </p>
        <p className="dc-1-desc">
          Eine schöne Haut ohne lästige Behaarung ist der Wunsch vieler
          Menschen, die sich nicht täglich rasieren möchten. Bisherige Methoden
          wie Wachsen, Zupfen, Rasieren sind teilweise schmerzhaft und müssen
          regelmässig angewendet werden. Der neu entwickelte Diodenlaser löst
          diese Probleme durch den Einsatz modernster und effektivster Technik.
        </p>
      </div>
      <div className="dc-2">
        <img src={DAUERHAFTE_IMG} alt="DAUERHAFTE IMG"/>
      </div>
    </div>
  );
};

export default DauerhafteContent;
