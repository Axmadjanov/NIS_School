import React from 'react';
import '../SCSS/Gallery.scss';
import { SRLWrapper } from 'simple-react-lightbox';

function Gallery() {
	return (
		<SRLWrapper>
			<div
				style={{
					width: '100%',
					display: 'flex',
					flexWrap: 'wrap',
				}}
			>
				<div className="gallery">
					<img
						src={require('../images/gallery/pic1.jpg').default}
						style={{ width: '100%' }}
					/>
				</div>
				<div className="gallery">
					<img
						src={require('../images/gallery/pic2.jpg').default}
						style={{ width: '100%' }}
					/>
				</div>
				<div className="gallery">
					<img
						src={require('../images/gallery/pic3.jpg').default}
						style={{ width: '100%' }}
					/>
				</div>
				<div className="gallery">
					<img
						src={require('../images/gallery/pic4.jpg').default}
						style={{ width: '100%' }}
					/>
				</div>
				<div className="gallery">
					<img
						src={require('../images/gallery/pic5.jpg').default}
						style={{ width: '100%' }}
					/>
				</div>
				<div className="gallery">
					<img
						src={require('../images/gallery/pic6.jpg').default}
						style={{ width: '100%' }}
					/>
				</div>
				<div className="gallery">
					<img
						src={require('../images/gallery/pic7.jpg').default}
						style={{ width: '100%' }}
					/>
				</div>
				<div className="gallery">
					<img
						src={require('../images/gallery/pic8.jpg').default}
						style={{ width: '100%' }}
					/>
				</div>
			</div>
		</SRLWrapper>
	);
}

export default Gallery;
