import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedinIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';

import '../styles/Footer.css';

const Footer = () => {
	return (
		<div className='footer'>
			<div className='socialMedia'>
				<InstagramIcon />
				<TwitterIcon />
				<FacebookIcon />
				<LinkedinIcon />
			</div>
			<p>&copy; 2022 Mehdi's Pizza Cooking Style</p>
		</div>
	);
};

export default Footer;
