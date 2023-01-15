import React from "react";
import "../../styles/DauerhafteQnA.scss";
import ReusableQnA from "../ReusableQnA";
import SKIN_IMG from "../../assets/skin.jpg";

const DauerhafteQnA = () => {
  return (
    <div className="DQA">
      <div className="dqa-title">FRAGEN UND ANTWORTEN</div>
      <div className="dqa-grid">
        <div className="dqa-1">
          <ReusableQnA
            name="Diodenlaser: Wie funktioniert es?"
            desc="Der Laser ist ein pures Licht, das Energie abgibt. Das Haar nimmt diese Energie auf und leitet sie bis zu den Haarwurzeln weiter, die für das Haarwachstum verantwortlich sind. Diese werden zerstört, so dass sie nicht wieder nachwachsen können."
            img={SKIN_IMG}
          />
          <ReusableQnA
            name="Ist die Haarentfernung mit Diodenlaser dauerhaft?"
            desc="Haarentfernung mittels Laser bewirkt, dass das Haar einschliesslich Haarfollikel endgültig zerstört und erneuter Wachstum dauerhaft verhindert wird. In jeder Behandlung werden aber nur die aktiven – d.h. die derzeit nicht im Ruhezustand befindlichen – Haarfollikel entfernt."
          />
          <ReusableQnA
            name="IPL vs. Diodenlaser"
            desc="Die Ergebnisse bei dem IPL-System sind stark von der Hautpigmentierung und der Intensität der Pigmentierung der Haut abhängig. Vollständige Ergebnisse mit dem IPL-Sytem sind je nach Person und nach Körperregion mit insgesamt 30 Behandlungen – mit dem Laser ist dieses Ergebnis bereits mit 4 bis 8 Behandlungen erreichbar. Ein weiterer wichtiger Unterschied zwischen dem Diodenlaser und dem IPL liegt darin, dass der Laserstrahl deutlich tiefer in die Haut eindringt. Das mit dem IPL-Gerät erzeugte Licht kann bei weitem nicht so tief in die Haut eindringen."
          />
          <ReusableQnA
            name="Ist die Behandlung schmerzhaft?"
            desc="Nein! Im ersten Moment kann es an der Hautstelle, auf der der Laserkopf aufliegt, lediglich zu einem Kältegefühl kommen, vergleichbar mit der Berührung von Eis. Dies wird durch das Kühlsystem ausgelöst. Anschliessend wird der Laser aktiviert. Dabei spürt man entweder gar nichts oder allenfalls ein leichtes Ziehen, vergleichbar mit dem Auszupfen eines Haares mittels einer Pinzette."
          />
        </div>
        <div className="dqa-2">
          <ReusableQnA
            name="Wie viele Behandlungen sind erforderlich?"
            desc="Es hängt von vielen Faktoren ab, u.a. der betroffenen Körperzone, Farbe, Anzahl sowie Dichtheit des Haares, etc. In der Regel sind zwischen 4 und 8 Behandlungen ausreichend, um im Behandlungsbereich die Haare zu entfernen, obwohl schon am ersten Tag beeindruckende Ergebnisse sichtbar sein können."
          />
          <ReusableQnA
            name="Vor der Behandlung"
            desc="Ein paar Tage vor der Behandlung sollten die entsprechenden Stellen rasiert sein. 24 Stunden vor der Behandlung sollten keine Cremen sowie Deos etc. benutzt werden. Die letzte Sonnenbestrahlung, der letzte Solariumbesuch sowie die letzte Waxbehandlung sollten mind. 3 bis 4 Wochen zurückliegen."
          />
          <ReusableQnA
            name="Nach der Behandlung"
            desc={`An den behandelten Stellen kann es zu leichten Rötungen kommen, welche nach 24 bis 72 Stunden wieder abklingen. Nach der Behandlung sollten 24 Stunden keine Cremen sowie Deos etc. benutzt werden. Nach der Behandlung sollten die betroffenen Hautpartien 3 bis 4 Wochen vor intensiver Sonnenbestrahlung sowie Solarium geschützt werden.`}
          />
        </div>
      </div>
    </div>
  );
};

export default DauerhafteQnA;
