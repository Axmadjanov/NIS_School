import React from 'react';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Count from './Count.js';
import '../SCSS/HomePage.scss';
import { Link } from 'react-router-dom';

function HomePage() {
	return (
		<div>
			<Section1 />

			<Section2 />
			<div className="bg">
				<div className="background">
					<Count />
					<Section3 />
				</div>
				<Section4 />
				<Section5 />
			</div>
		</div>
	);
}

export default HomePage;
