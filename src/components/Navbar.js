import React from 'react';
import airbnbLogo from '../images/airbnb-logo.png';

export default function Navbar() {
	return (
		<header>
			<nav>
				<img
					src={airbnbLogo}
					alt="Airbnb Logo"
					className="nav--logo"
				/>
			</nav>
		</header>
	)
}
