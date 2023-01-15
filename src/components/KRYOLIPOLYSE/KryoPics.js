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
			<div class="kp-grid">
				<div class="kp-g-1 kp-g">
					<p class="kpg-title">BASIC</p>
					<p class="kpg-price">Fr. 199.-</p>
					<hr class="kpg-hr" />
					<p class="kpg-desc">Unser Basic Packet beinhaltet 1 Zone</p>
					<a href="/kontakt/#kontakt">
						<button class="kpg-btn">KONTAKTIERE UNS</button>
					</a>
				</div>
				<div class="kp-g-2 kp-g">
					<p class="kpg-title">STANDARD</p>
					<p class="kpg-price">Fr. 299.-</p>
					<hr class="kpg-hr" />
					<p class="kpg-desc">Unser Basic Packet beinhaltet 2 Zonen</p>
					<a href="/kontakt/#kontakt">
						<button class="kpg-btn">KONTAKTIERE UNS</button>
					</a>
				</div>
				<div class="kp-g-3 kp-g">
					<p class="kpg-title">PREMIUM</p>
					<p class="kpg-price premium">1 Zonenabo 3 Behandlungen fr.480-</p>
					<p class="kpg-price premium">2 Zonenabo 3 Behandlungen fr.720-</p>
					<p class="kpg-price premium">3 Zonenabo 3 Behandlungen fr.899-</p>
					<a href="/kontakt/#kontakt">
						<button class="kpg-btn">KONTAKTIERE UNS</button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default KryoPics;
