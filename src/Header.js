import React from 'react'
import Search from './Search'

const Header = props => {
	return (
		<div className="header_container">
			<div className="black_bar" />
			<Search />
			<div className="nav_container">
				<button className="btn">Gaming</button>
				<button className="btn">Racing</button>
				<button className="btn">Funkos</button>
			</div>
		</div>
	)
}

export default Header
