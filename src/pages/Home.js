import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import BannerImage from '../assets/pizza.jpeg';

const Home = () => {
	return (
		<div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
			<div className='headerContainer'>
				<h1>Mehdi's Pizza </h1>
				<p>Delicious Pizza For Any Taste</p>
				<Link to='/menu'>
					<button>ORDER NOW!</button>
				</Link>
			</div>
		</div>
	);
};

export default Home;
