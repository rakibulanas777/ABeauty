import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import DauerhafteContent from "./DauerhafteContent";
import DauerhaftePrices from "./DauerhaftePrices";
import DauerhafteQnA from "./DauerhafteQnA";
import { Link } from "react-router-dom";
import ABEAUTY_LOGO from "../../assets/ABEAUTY_LOGO1.png";
const Dauerhafte = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const [isActive, setIsActive] = useState(false);
	const [isActiveNav, setActiveNav] = useState(false);

	const handleHamburger = () => {
		setIsActive(!isActive);

		// Disables scrolling while hamburger menu is open

		if (isActive === false) {
			document.body.style.overflow = "hidden";
		} else if (isActive === true) {
			document.body.style.overflow = "visible";
		}
	};
	const handleNavClick = () => {
		setIsActive(false);
		document.body.style.overflow = "visible";
	};
	// Changes navbar style after scrolling down
	window.addEventListener("scroll", () => {
		if (window.pageYOffset > 1) {
			setActiveNav(true);
		} else if (window.pageYOffset < 1) {
			setActiveNav(false);
		}
	});
	return (
		<div>
			<div className="ReusableHero">
				<div className="Hero">
					<div
						className={
							isActiveNav ? "hero-navbar hero-navbar-active" : "hero-navbar"
						}
					>
						<ul
							className={
								isActiveNav
									? isActive
										? "hero-ul hero-ul-1 hero-ul-active"
										: "hero-ul hero-ul-1"
									: isActive
									? "hero-ul-a-1 hero-ul-a-1-active"
									: "hero-ul hero-ul-a-1"
							}
						>
							<Link to="/nails&manikure" style={{ textDecoration: "none" }}>
								<li onClick={handleNavClick}>
									<p className="NAILS & MANIKÜRE">NAILS & MANIKÜRE</p>
								</li>
							</Link>
							<Link to="/kryolipolyse" style={{ textDecoration: "none" }}>
								<li onClick={handleNavClick}>
									<p className="KRYOLIPOLYSE">KRYOLIPOLYSE</p>
								</li>
							</Link>
							<Link to="/EMSHAPE" style={{ textDecoration: "none" }}>
								<li onClick={handleNavClick}>
									<p>EMSHAPE</p>
								</li>
							</Link>
						</ul>
						<Link to="/" style={{ textDecoration: "none" }}>
							<div className="hero-logo">
								<img src={ABEAUTY_LOGO} alt="ABEAUTY LOGO" />
							</div>
						</Link>
						<ul
							className={
								isActiveNav
									? isActive
										? "hero-ul hero-ul-2 hero-ul-active"
										: "hero-ul hero-ul-2"
									: isActive
									? "hero-ul hero-ul-2-a hero-ul-active"
									: "hero-ul hero-ul-2-a"
							}
						>
							<Link
								to="/dauerhaftehaarentfernung"
								style={{ textDecoration: "none" }}
							>
								<li onClick={handleNavClick}>
									<p className="active-link">DAUERHAFTE HAARENTFERNUNG</p>
								</li>
							</Link>
							<Link to="/kontakt" style={{ textDecoration: "none" }}>
								<li onClick={handleNavClick}>
									<p className="KONTAKT">KONTAKT</p>
								</li>
							</Link>
						</ul>

						<div
							className={
								isActive
									? "hero-hamburger hero-hamburger-active"
									: "hero-hamburger" && isActiveNav
									? "hero-hamburger"
									: "hero-hamburger hero-hamb-top"
							}
							onClick={handleHamburger}
						>
							<span className="line line01"></span>
							<span className="line line02"></span>
							<span className="line line03"></span>
						</div>
						<hr className="hero-navbar-line"></hr>
					</div>
				</div>
				<div className="rh-text">
					<p className="rh-title rh-custom">DAUERHAFTE HAARENTFERNUNG</p>
					<p className="rh-desc">SCHMERZLOS – HARMLOS – HAARFREI</p>
				</div>
				<div className="invis-div" id="kontakt"></div>
			</div>
			<DauerhafteContent />
			<DauerhaftePrices />
			<DauerhafteQnA />
			<Footer />
		</div>
	);
};
export default Dauerhafte;
