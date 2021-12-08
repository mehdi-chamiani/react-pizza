import React from 'react';
import MultiplePizzas from '../assets/multiplePizzas.jpeg';

import '../styles/About.css';

const About = () => {
	return (
		<div className='about'>
			<div
				className='aboutTop'
				style={{ backgroundImage: `url(${MultiplePizzas})` }}></div>
			<div className='aboutBottom'>
				<h1>About Us</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Exercitationem ullam expedita assumenda sunt, nobis iusto esse, sequi
					vero reiciendis sint mollitia! Quod vitae dolor quia magnam dolore
					magni aperiam doloremque. Voluptates itaque quam laudantium distinctio
					blanditiis quisquam animi, nisi, ea dignissimos quasi saepe cumque qui
					autem aperiam quos provident totam ipsam impedit nostrum non? Tenetur
					sit ab tempora aut vel! Quasi eum inventore animi consequatur incidunt
					sint error tenetur, vero a deserunt mollitia consequuntur,
					exercitationem esse unde ad repellat minima quae laborum recusandae
					cupiditate itaque. Dicta temporibus sapiente molestiae exercitationem!
				</p>
			</div>
		</div>
	);
};

export default About;
