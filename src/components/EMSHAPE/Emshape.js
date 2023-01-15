import React, { useEffect } from "react";
import ReusableHero from "../ReusableHero";
import Footer from "../Footer";
import NAILS1_IMG from "../../assets/kryolipolyse-zuerich.3436e852.3436e852.png";
import "../../styles/emshape.scss";
import EmGel from "./EmGel";
import EmPics from "./EmPics";

const Emshape = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div>
			<ReusableHero
				title="EMSHAPE"
				desc="„NEUE TECHNOLOGIE“ TRAUMFIGUR OHNE TRAINING"
			/>
			<div className="em-inner">
				<div className="em-first-sec">
					<div className="em-fs-1">
						<p className="em-fs-1-title">EMSHAPE-System</p>
						<p className="em-fs-1-desc">
							The new form of non-invasive body contouring is now available at
							Abeauty. It works as well or even better than EMSculpt and
							TruSculpt Flex and is a cheaper alternative with excellent
							results. You no longer have to spend thousands of dollars and
							training hours to tone and enlarge abs and glutes. All you need is
							a couple of 20 minute sessions and you're ready for summer.
						</p>
					</div>
					<div className="em-fs-2">
						<img src={NAILS1_IMG} alt="Nails img" />
					</div>
				</div>
			</div>

			<EmGel />
			<EmPics />
			<Footer />
		</div>
	);
};

export default Emshape;
