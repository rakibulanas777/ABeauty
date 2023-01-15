import React from "react";
import "../../styles/KryoPics.scss";
const EmPics = () => {
	return (
		<div className="KP">
			<div className="kp-title">BEHANDLUNGSANGEBOTE</div>
			<div className="em-grid">
				<div className="kp-g-2 kp-g">
					<p className="kpg-title">STANDARD</p>
					<p className="kpg-price">Fr. 150.-</p>
					<hr className="kpg-hr" />
					<p className="kpg-desc">Unser Basic Packet beinhaltet 1 Zone</p>
					<a href="/kontakt/#kontakt">
						<button className="kpg-btn">KONTAKTIERE UNS</button>
					</a>
				</div>
				<div className="kp-g-3 kp-g">
					<p className="kpg-title">PREMIUM</p>
					<p className="kpg-price">Fr. 270.-</p>
					<hr className="kpg-hr" />
					<p className="kpg-desc">Unser Basic Packet beinhaltet 2 Zonen</p>
					<a href="/kontakt/#kontakt">
						<button className="kpg-btn">KONTAKTIERE UNS</button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default EmPics;
