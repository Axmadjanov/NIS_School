import React, { Component } from 'react';
import Slider from 'react-slick';
import Card from './Section2_carousel_card';
import RightIcon from '@mui/icons-material/ChevronRight';
import LeftIcon from '@mui/icons-material/ChevronLeft';

function SampleNextArrow(props) {
	const { onClick } = props;
	return (
		<div
			className=""
			style={{
				position: 'absolute',
				top: '-55px',
				right: '15px',
				width: '40px',
				height: '40px',
				display: 'block',
				background: '#FFC200',
				borderRadius: '5px',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
			onClick={onClick}
		>
			<RightIcon sx={{ fontSize: '2rem' }} />
		</div>
	);
}

function SamplePrevArrow(props) {
	const { onClick } = props;
	return (
		<div
			className="carusel"
			style={{
				position: 'absolute',
				top: '-55px',
				right: '65px',
				width: '40px',
				height: '40px',
				display: 'block',
				background: '#FFC200',
				borderRadius: '5px',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
			onClick={onClick}
		>
			<LeftIcon sx={{ fontSize: '2rem' }} />
		</div>
	);
}

export default class CustomArrows extends Component {
	render() {
		const settings = {
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			swipeToSlide: true,
			nextArrow: <SampleNextArrow />,
			prevArrow: <SamplePrevArrow />,
			autoplay: true,
			autoplaySpeed: 4000,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
						infinite: true,
					},
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
						initialSlide: 2,
					},
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					},
				},
			],
		};
		return (
			<div>
				<br />
				<Slider {...settings}>
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</Slider>
			</div>
		);
	}
}
