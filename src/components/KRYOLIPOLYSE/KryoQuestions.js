import React from "react";
import ReusableQnA from "../ReusableQnA";
import "../../styles/KryoQuestions.scss";
import KRYO_IMG from "../../assets/kryo.jpg";

const KryoQuestions = () => {
  return (
    <div className="KQ">
      <div className="kq-title">FRAGEN UND ANTWORTEN</div>
      <div className="kq-divs">
        <div className="kq-1">
          <ReusableQnA
            name="Was geschieht mit den Fettzellen?"
            desc="Während des Verfahrens wird durch die Kälteexposition eine Apoptose der Fettzellen verursacht. Dies führt zur Freisetzung von Zytokinen und anderen Entzündungsmediatoren. In den Monaten nach dem Verfahren bauen Entzündungszellen die betroffenen Fettzellen stufenweise ab. Lipide werden langsam aus den Fettzellen freigesetzt und vom Lymphsystem zur Verarbeitung abtransportiert, ähnlich wie das in der Nahrung enthaltene Fett. Da die Lipide einen schrittweisen Abbauprozess durchlaufen, ist bei den Blutlipiden und der Leberfunktion keine gefährliche Veränderung festzustellen."
            img={KRYO_IMG}
          />
          <ReusableQnA
            name="Wie funktioniert die Kryolipolyse?"
            desc="Die Kryolipolyse basiert auf dem Prinzip, dass Fettzellen dem Energieentzug (Kühlung) gegenüber anfälliger sind als die umgebenden Gewebe. Ein nicht invasiver Applikator wird am gewünschten Bereich angebracht. Er entzieht Energie aus dem darunter liegenden Fettgewebe und schützt gleichzeitig Haut, Nerven, Muskeln und andere Gewebe. Bei den gekühlten Fettzellen wird eine Apoptose (kontrollierter Zelltod) ausgelöst und die Zellen werden stufenweise abgebaut. Dadurch wird die Dicke der Fettschicht reduziert."
          />

          <ReusableQnA
            name="Was ist Kryolipolyse?"
            desc="Die Kryolipolyse ist nicht invasiv – keine Nadeln oder Einschnitte. Ein Applikator wird auf die Haut aufgesetzt, um die Fettzellen an bestimmten Körperbereichen präzise und kontrolliert zu kühlen und so zu eliminieren. Die dem Kühlvorgang ausgesetzten Fettzellen leiten einen Vorgang zur natürlichen Zellenbeseitigung ein. Im behandelten Bereich werden die Fettzellen stufenweise vom Stoffwechsel abgebaut. In der Regel werden 3 Behandlungen im Abstand von 4 Wochen durchgeführt. Eine Einzelbehandlung dauert 45 bis 60 Minuten."
          />
          <ReusableQnA
            name="Wie wird die Fettschicht gekühlt?"
            desc="Beim Kryolipolyse-Verfahren befestigt der Therapeut einen Applikator am zu behandelnden Bereich, um dem darunter liegenden Fettgewebe Energie zu entziehen (Kühlung). Beim Verfahren befestigt der Therapeut einen Applikator am zu behandelnden Bereich, um dem darunter liegenden Fettgewebe Energie zu entziehen (Kühlung). Das Gewebe wird per Vakuum in den Applikator gezogen, wo es zwischen zwei Kühlplatten gehalten wird. Entsprechend dem ausgewählten Verfahrensprofil wird nun Wärme entzogen. Während des Verfahrens wird die Haut mit den im Applikator enthaltenen Sensoren überwacht, damit ein einheitliches, gleichbleibendes Verfahren gewährleistet ist. Diese Sensoren sind mit der Steuerkonsole verbunden und ermöglichen die kontinuierliche Überwachung und Anpassung der Kühlung während des Verfahrens."
          />
        </div>
        <div className="kq-2">
          <ReusableQnA
            name="Welche Ergebnisse kann ich erwarten?"
            desc="Klinische Studien haben bewiesen, dass das Verfahren nach einigen Woche zu einer deutlich messbaren Fettreduzierung führt. In der Regel werden 3 Behandlungen im Abstand von 4 Wochen durchgeführt, um für eine intensive Fettgewebereduzierung zu sorgen."
          />
          <ReusableQnA
            name="Welche Auswirkungen werden gewöhnlich nach der Verfahren beobachtet?"
            desc="Nach den Behandlungen können sich Rötungen, Schwellungen und teilweise Blutergüsse sowie eine leichte Druckempfindlichkeit zeigen. Diese Nebenwirkungen verschwinden automatisch nach einigen Stunden oder Tagen. Deshalb ist die Kryolipolyse die beste Lösung für die permanente lokale Entfernung von Fettzellen."
          />
          <ReusableQnA
            name="Welche Kunden eignen sich am besten für das Verfahren?"
            desc="Sie sind relativ fit, haben aber Fettpölsterchen, die Sie trotz guter Ernährung und Sport nicht loswerden können? Zudem sind Sie an einer stellenweisen Fettreduzierung interessiert, möchten sich jedoch keiner Operation unterziehen? Dann ist das Kryolipolyse-Verfahren genau das Richtige für Sie. Das Verfahren eignet sich nicht zur Gewichtsabnahme bzw. für stark übergewichtige Personen."
          />
          <ReusableQnA
            name="Wodurch unterscheidet sich das Kryolipolyse-Verfahren von anderen Verfahren?"
            desc="Durch die kontrollierte Kühlung werden Fettzellen gezielt behandelt und beseitigt. Andere Behandlungsmethoden wie Laser, Hochfrequenz und fokussierter Ultraschall beeinflussen nicht nur Fettzellen, sondern ggf. auch anderes Gewebe auf eine Weise, die nicht mit der Methode der Kryolipolyse vergleichbar ist."
          />
        </div>
      </div>
    </div>
  );
};

export default KryoQuestions;
