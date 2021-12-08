import React, { Component } from 'react';
import Slider from 'react-slick';
import Card from './Section4_carousel_card';
import RightIcon from '@mui/icons-material/ChevronRight';
import LeftIcon from '@mui/icons-material/ChevronLeft';
import Img1 from '../images/testimonials/pic1.jpg';
import Img2 from '../images/testimonials/pic2.jpg';
import Img3 from '../images/testimonials/pic3.jpg';

function SampleNextArrow(props) {
	const { onClick } = props;
	return (
		<div
			className=""
			style={{
				position: 'absolute',
				top: '-50px',
				right: '25px',
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
				top: '-50px',
				right: '75px',
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
			slidesToShow: 2,
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
						slidesToShow: 2,
						slidesToScroll: 2,
						infinite: true,
					},
				},
				{
					breakpoint: 1000,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						initialSlide: 1,
					},
				},
				{
					breakpoint: 550,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					},
				},
			],
		};
		return (
			<div
				style={{
					marginTop: '30px',
				}}
			>
				<br />
				<Slider {...settings}>
					<Card Img={Img1} />
					<Card Img={Img2} />
					<Card Img={Img3} />
				</Slider>
			</div>
		);
	}
}
