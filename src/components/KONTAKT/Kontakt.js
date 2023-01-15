import React, { useEffect } from "react";
import ReusableHero from "../ReusableHero";
import Footer from "../Footer";
import KontaktContent from "./KontaktContent";
const Kontakt = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <ReusableHero title="KONTAKT" desc="FRAGEN - TERMINE" />
      <KontaktContent />
      <Footer />
    </div>
  );
};
export default Kontakt;
