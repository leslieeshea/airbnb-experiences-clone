/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

export default function Hero() {
	return (
		<section className="hero">
			<img
				src='../images/photo-grid.png'
				alt="Photo Grid"
				className="hero--photo"
			/>
			<h1 className="hero--header">Online Experiences</h1>
			<h3 className="hero--text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</h3>
		</section>
	)
}
