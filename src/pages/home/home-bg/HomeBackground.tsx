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
				<Sphere img={droolingFace}  size={'big'} />
				<Sphere img={spaghetti} size={'large'} />
				<Sphere img={cheesecake} size={'medium'} />
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