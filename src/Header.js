import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'

const Header = props => {
	return (
		<div className="header_container">
			<div className="black_bar" />
			<Search />
			<div className="nav_container">
				<Link to="/gaming">
					<button className="btn">Gaming</button>
				</Link>
				<Link to="/racing">
					<button className="btn">Racing</button>
				</Link>
				<Link to="/funkos">
					<button className="btn">Funkos</button>
				</Link>
			</div>
		</div>
	)
}

export default Header
