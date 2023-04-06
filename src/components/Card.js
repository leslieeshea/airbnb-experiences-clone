import React from 'react';
import star from '../images/star.png';

export default function Card({ img, rating, reviewCount, country, title, price }) {
	return (
		<div className="card">
			<img
				src={img}
				alt="Katie"
				className="card--image"
			/>
			<div className="card--stats">
				<img
					src={star}
					alt="Star"
					className="card--star"
				/>
				<span>{rating}</span>
				<span className="gray"> ({reviewCount}) • </span>
				<span className="gray">{country}</span>
			</div>
			<p className="card--text">{title}</p>
			<p className="card--price"><span className="bold">From ${price}</span> / person</p>
		</div>
	)
}
