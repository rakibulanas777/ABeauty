import React, { useState } from "react";
import "../styles/Hero.scss";
import ABEAUTY_LOGO from "../assets/ABEAUTY_LOGO1.png";
import ARROW_DOWN from "../assets/arrow_down.svg";
import { Link } from "react-router-dom";
const Hero = () => {
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
		<div className="Hero">
			<div className="hero-img">
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
								<p>NAILS & MANIKÜRE</p>
							</li>
						</Link>
						<Link to="/kryolipolyse" style={{ textDecoration: "none" }}>
							<li onClick={handleNavClick}>
								<p>KRYOLIPOLYSE</p>
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
							<img src={ABEAUTY_LOGO} alt="Logo" />
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
								<p>DAUERHAFTE HAARENTFERNUNG</p>
							</li>
						</Link>
						<Link to="/kontakt" style={{ textDecoration: "none" }}>
							<li onClick={handleNavClick}>
								<p>KONTAKT</p>
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
				<div className="hero-middle-text">
					<p>...SCHÖNHEIT MUSS KEIN ZUFALL SEIN...</p>
				</div>
				<a href="#ABEAUTY_ID" className="hero-arrow-down">
					<img src={ARROW_DOWN} alt="Arrow down" />
				</a>
			</div>
		</div>
	);
};

export default Hero;
