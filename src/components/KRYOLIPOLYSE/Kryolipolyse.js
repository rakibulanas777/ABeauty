import React, { useEffect } from "react";
import ReusableHero from "../ReusableHero";
import KryoFirst from "./KryoFirst";
import KryoPics from "./KryoPics";
import KryoQuestions from "./KryoQuestions";
import Footer from "../Footer";

const Kryolipolyse = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <ReusableHero
        title="KRYOLIPOLYSE"
        desc="FRIER DICH IN FORM – KÄLTE GEGEN FETT"
      />
      <KryoFirst />
      <KryoPics />
      <KryoQuestions />
      <Footer />
    </div>
  );
};

export default Kryolipolyse;
