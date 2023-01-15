import React from "react";
import "../../styles/KryoPics.scss";
import KRYOMAN_IMG from "../../assets/kryoman.png";
import KRYOWOMAN_IMG from "../../assets/kryowoman.png";
const KryoPics = () => {
	return (
		<div className="KP">
			<div className="kp-title">BEHANDLUNGSANGEBOTE</div>
			<div className="kp-content">
				<div className="kp-1 kp-img">
					<img src={KRYOMAN_IMG} alt="Man img" />
				</div>
				<div className="kp-2 kp-img">
					<img src={KRYOWOMAN_IMG} alt="Woman img" />
				</div>
			</div>
			<div className="kp-grid">
				<div className="kp-g-1 kp-g">
					<p className="kpg-title">BASIC</p>
					<p className="kpg-price">Fr. 199.-</p>
					<hr className="kpg-hr" />
					<p className="kpg-desc">Unser Basic Packet beinhaltet 1 Zone</p>
					<a href="/kontakt/#kontakt">
						<button className="kpg-btn">KONTAKTIERE UNS</button>
					</a>
				</div>
				<div className="kp-g-2 kp-g">
					<p className="kpg-title">STANDARD</p>
					<p className="kpg-price">Fr. 299.-</p>
					<hr className="kpg-hr" />
					<p className="kpg-desc">Unser Basic Packet beinhaltet 2 Zonen</p>
					<a href="/kontakt/#kontakt">
						<button className="kpg-btn">KONTAKTIERE UNS</button>
					</a>
				</div>
				<div className="kp-g-3 kp-g">
					<p className="kpg-title">PREMIUM</p>
					<p className="kpg-price premium">1 Zonenabo 3 Behandlungen fr.480-</p>
					<p className="kpg-price premium">2 Zonenabo 3 Behandlungen fr.720-</p>
					<p className="kpg-price premium">3 Zonenabo 3 Behandlungen fr.899-</p>
					<a href="/kontakt/#kontakt">
						<button className="kpg-btn">KONTAKTIERE UNS</button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default KryoPics;
