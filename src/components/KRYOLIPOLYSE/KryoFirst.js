import React from "react";
import "../../styles/KyroFirst.scss";
import KRYO1_IMG from "../../assets/kryo1.png";
const KryoFirst = () => {
  return (
    <div className="KF">
      <div className="kf-1">
        <p className="kf-1-title">
          FETT WEG OHNE OPERATIONEN, OHNE HUNGERN UND OHNE SCHMERZEN
        </p>
        <p className="kf-1-desc">
          Kryolipolyse ist die beste Lösung für die permanente lokale Entfernung
          von Fettzellen. Das Verfahren ist ein neues, nicht invasives Verfahren
          zur sanften und erfolgreichen Eliminierung von Fett in bestimmten
          Bereichen des Körpers. In den behandelten Bereichen führt dies zu
          einer deutlichen Fettreduzierung. Das Besondere am Verfahren ist der
          Einsatz einer revolutionären Kühltechnik. Die Fettzellen in
          Fettpölsterchen werden durch einen stufenweisen Prozess eliminiert,
          der die umgehenden Gewebe nicht verletzt. Die 45 bis 60 Minuten lange
          Kryolipolyse-Einzelbehandlung ist für die meisten Kunden angenehm. Sie
          können dabei ein Buch lesen, am Laptop arbeiten, Musik hören oder sich
          einfach entspannen. Sie sind am gleichen Tag wieder arbeits- und
          gesellschaftsfähig und können sogar Ihre sportlichen Aktivitäten
          aufnehmen.
        </p>
      </div>
      <div className="kf-2">
        <img src={KRYO1_IMG} alt="Kryo img"/>
      </div>
    </div>
  );
};

export default KryoFirst;
