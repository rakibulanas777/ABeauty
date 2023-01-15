import React from "react";
import "../styles/Footer.scss";
import LOCATION_IMG from "../assets/pin.png";
import INSTA_IMG from "../assets/insta1.png";
import PHONE_IMG from "../assets/whatsapp (1).774352de.png";
import EMAIL_IMG from "../assets/email.png";
import LOGO_IMG from "../assets/footerwhitelogo.png";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className="Footer">
			<div className="f-upper">
				<Link to="/" className="fu-logo">
					<img src={LOGO_IMG} alt="Logo" />
				</Link>
				<div className="fu-desc">...Schönheit muss kein Zufall sein...</div>
				<div className="fu-bottom">
					<a
						className="fu-bottom-inner"
						target="_blank"
						href="https://www.google.com/maps/place/H%C3%B6henweg+25,+2572+M%C3%B6rigen,+Switzerland/@47.0803974,7.2102253,17z/data=!3m1!4b1!4m5!3m4!1s0x478e1a1ea93d1b7f:0xd6b37b9ca685954b!8m2!3d47.0803938!4d7.212414"
					>
						<div className="fub fub-1">
							<img src={LOCATION_IMG} alt="Location" />
						</div>
					</a>
					<a
						className="fu-bottom-inner"
						target="_blank"
						href="https://www.instagram.com/abeauty.ch/"
					>
						<div className="fub fub-2">
							<img src={INSTA_IMG} alt="Instagram" />
						</div>
					</a>
					<a className="fu-bottom-inner" href="tel:0787049785">
						<div className="fub fub-3">
							<img src={PHONE_IMG} alt="Phone" />
						</div>
					</a>
					<a
						className="fu-bottom-inner"
						href="mailto:-i.ipopescuioanaclaudia@yahoo.com"
					>
						<div className="fub fub-4">
							<img src={EMAIL_IMG} alt="Email" />
						</div>
					</a>
				</div>
			</div>

			<div className="f-bottom">
				<hr className="f-hr" />
				<p>© 2023 A Beauty. All rights reserved</p>
			</div>
		</div>
	);
};
export default Footer;
