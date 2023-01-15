import React, { useEffect } from "react";
import ABEAUTY_SALON from "../assets/abeauty_salon1.png";
import "../styles/Abeauty.scss";

const ABeauty = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="ABeauty" id="MAIN_ID">
      <div id="ABEAUTY_ID"></div>
      <div className="ab-1-div">
        <img src={ABEAUTY_SALON} alt="Abeauty salon img" />
      </div>
      <div className="ab-2-div">
        <p className="ab-name">
          A BEAUTY 
        <hr />
        </p>
        <p className="ab-title">
          Es gibt nichts Schöneres, als sich so rich­tig wohl und gepflegt in
          seinem Körper zu fühlen!
        </p>
        <p className="ab-info">
          In unserem Salon möchten wir Ihnen gerne die Möglichkeit geben, sich
          einen Moment Entspannung sowie Erholung zu gönnen. Wir bieten die
          bekannteste dauerhafte Haarentfernungsmethode mit dem Diodenlaser für
          Frauen und Männer an. Nebst der Haarentfernung bieten wir die
          einzigartige Kälte und Fettreduktion mit Kryolipolyse an. Möchten Sie
          schöne sowie gepflegte Fingernägel? Dann sind Sie bei uns genau
          richtig. Lassen Sie sich mit hochwertigen Produkten verwöhnen, die
          Ihnen ein wertvolles und langanhaltendes Wohlgefühl schenken.
        </p>
      </div>
    </div>
  );
};

export default ABeauty;
