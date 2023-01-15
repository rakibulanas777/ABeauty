import React from "react";
import "../styles/WhyUs.scss";
import SERVICE_IMG from "../assets/service.png";
import CUSTOMER_IMG from "../assets/customer.png";
import MONEY_IMG from "../assets/money.png";

const EmWhyUs = () => {
	return (
		<div className="WhyUs">
			<div className="wu-title">WARUM WIR</div>
			<div className="wu-content">
				<div className="wu-div wu-first">
					<div className="wu-upper">
						<img src={SERVICE_IMG} alt="Service" /> <p>SERVICE</p>
					</div>
					<div className="wu-bottom">
						<p>Professionelle Beratung und Behandlungen</p>
					</div>
				</div>
				<div className="wu-div wu-second">
					<div className="wu-upper">
						<img src={CUSTOMER_IMG} alt="Customer" />
						<p>KUNDENZUFRIEDENHEIT</p>
					</div>
					<div className="wu-bottom">
						<p>100% Zufriedenheit für unsere Kunden</p>
					</div>
				</div>
				<div className="wu-div wu-third">
					<div className="wu-upper">
						<img src={MONEY_IMG} alt="Money" /> <p>LEISTUNG</p>
					</div>
					<div className="wu-bottom">
						<p>Hohe Qualität und Top Preis nur bei A Beauty</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EmWhyUs;
