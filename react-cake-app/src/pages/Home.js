import React from 'react';
import { Link } from "react-router-dom";
import BackgroundImg from "../assets/background.png";
import '../styles/Home.css'

function Home() {
	return (
		<div className='home' style={{ backgroundImage: `url(${BackgroundImg})` }}>
			<div>
				<div className='headerContainer'>
					<h1>J's Specialty Cakes </h1>
					<p>A cake for every occasion. </p>
					<Link to='/menu'>
						<button>ORDER NOW</button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Home
