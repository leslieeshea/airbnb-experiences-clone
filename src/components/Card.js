import React from 'react';

export default function Card({ img, rating, reviewCount, location, title, price }) {
	return (
		<div className="card">
			<img
				src={`../images/${img}`}
				alt="Katie"
				className="card--image"
			/>
			<div className="card--stats">
				<img
					src='../images/star.png'
					alt="Star"
					className="card--star"
				/>
				<span>{rating}</span>
				<span className="gray"> ({reviewCount}) • </span>
				<span className="gray">{location}</span>
			</div>
			<p className="card--text">{title}</p>
			<p className="card--price"><span className="bold">From ${price}</span> / person</p>
		</div>
	)
}
