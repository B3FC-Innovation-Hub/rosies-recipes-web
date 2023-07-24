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
				<Sphere src={droolingFace} height={200} width={200} backgroundColor='#DBFE87' top={4} right={2}/>
				<Sphere src={spaghetti} height={150} width={150} backgroundColor='#EFB9F3' top={40} right={10} />
				<Sphere src={cheesecake} height={120} width={120} backgroundColor='#FFA56E' bottom={10} right={2} />
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