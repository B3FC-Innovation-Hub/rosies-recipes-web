import React from 'react';
import './HomeBackground.css';
import Sphere from '../../../components/sphere/Sphere';
import droolingFace from '../../../assets/emoji-assets/drooling-face.png';
import cheesecake from '../../../assets/food-assets/cheesecake.png';
import spaghetti from '../../../assets/food-assets/spaghetti.png';

const HomeBackground: React.FC = () => {
	return (
		<div className='stripes-container'>
			<div className='images-container'>
				<Sphere src={droolingFace} imgHeight={150} imgWidth={150} cssClass={'big'} />
				<Sphere src={spaghetti} imgHeight={100} imgWidth={100} cssClass={'large'} />
				<Sphere src={cheesecake} imgHeight={60} imgWidth={60} cssClass={'medium'} />
			</div>
			<div className='stripes'>
				<div className='stripes darker'>
				</div>
				<div className='stripes dark'>
				</div>
				<div className='stripes lighter'>
				</div>
				<div className='stripes light'>
				</div>
			</div>
		</div>
	);
};  

export default HomeBackground;								