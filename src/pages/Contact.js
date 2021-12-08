import React from 'react';
import PizzaLeft from '../assets/pizzaLeft.jpg';
import '../styles/Contact.css';

const Contact = () => {
	return (
		<div className='contact'>
			<div
				className='leftSide'
				style={{ backgroundImage: `url(${PizzaLeft})` }}></div>
			;
			<div className='rightSide'>
				<h1>Contact Us</h1>

				<form action='POST' id='contact-form'>
					<label htmlFor='name'>Name</label>
					<input
						name='name'
						placeholder='Please Enter Your Full Name...'
						type='text'
					/>
					<label htmlFor='email'>Email</label>
					<input
						name='email'
						placeholder='Please Enter Your Email...'
						type='email'
					/>
					<label htmlFor='message'>Message</label>
					<textarea
						rows='6'
						placeholder='Enter Your Message'
						name='message'
						required></textarea>
					<button type='submit'>Send Message</button>
				</form>
			</div>
			;
		</div>
	);
};

export default Contact;
