import React, { useEffect } from "react";
import ReusableHero from "../ReusableHero";
import Footer from "../Footer";
import NAILS1_IMG from "../../assets/nails1.png";
import "../../styles/Nails.scss";
import NailsGel from "./NailsGel";
import NAILWAX_IMG from "../../assets/nailwax.png";
import NailsSlider from "./NailsSlider";
const Nails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <ReusableHero
        title="NAILS & MANIKÜRE"
        desc="GEPFLEGTE FINGERNÄGEL – IHRE PERSÖNLICHE VISITENKARTE"
      />
      <div className="nh-inner">
        <div className="nh-first-sec">
          <div className="nh-fs-1">
            <p className="nh-fs-1-title">
              SCHÖNE UND GEPFLEGTE FINGERNÄGEL SIND AUSDRUCK IHRER EIGENEN
              PERSÖNLICHKEIT
            </p>
            <p className="nh-fs-1-desc">
              Für eine Frau sind schöne Fingernägel sowie Hände ein wichtiger
              Bestandteil der ganzen Erscheinung und eines gepflegten Äusseren.
              Mit unseren qualitativ hochstehenden Produkten und unserem
              Fachwissen verhelfen wir Ihnen zu wunderschönen und
              widerstandsfähigen Fingernägel - natürlich in der von Ihnen
              gewünschten Form und Länge. Wir bieten Gelnägel mit Polygel,
              Maniküre mit oder ohne Gellack sowie Paraffin Wachsbad an.
            </p>
          </div>
          <div className="nh-fs-2">
            <img src={NAILS1_IMG} alt="Nails img"/>
          </div>
        </div>
      </div>
      <NailsGel />
      <div className="nh-inner">
        <div className="nh-first-sec nh-first-sec-custom">
          <div className="nh-fs-1 nh-fs-1-custom">
            <p className="nh-fs-1-title nh-fs-1-title-custom">
              PARAFFIN WACHSBAD
            </p>
            <p className="nh-fs-1-desc">
              Sanfte, glatte Haut und Wärme für Ihre Hände. Das Paraffin
              Wachsbad spendet spröder, rissiger Haut Feuchtigkeit und schafft
              zugleich Abhilfe bei steifen Gelenken und Muskelmüdigkeit. Ein
              Paraffin Wachsbad ist Wellness pur für Ihre Hände. Trockenes
              Gewebe wird straff und weich, strapazierte Hände werden zu neuem
              Leben erweckt. Ebenfalls fördert das Paraffin die Durchblutung der
              Haut. Die Hände werden in das Bad getaucht und bleiben für 10
              Minuten in speziellen Handschuhen.
            </p>
          </div>
          <div className="nh-fs-2 nh-fs-2-custom">
            <img src={NAILWAX_IMG} alt="Nailwax img"/>
          </div>
        </div>
      </div>
      <NailsSlider />
      <Footer />
    </div>
  );
};
export default Nails;
