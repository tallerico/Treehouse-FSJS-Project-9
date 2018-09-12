import React from 'react'
import { Route } from 'react-router-dom'
import Search from './Search'
import LinkButton from './LinkButton'

//rendering header that contains nav links
const Header = props => {
	return (
		<div className="header_container">
			<div className="black_bar" />
			<Route path="/search" render={() => <Search search={props.search} />} />
			<div className="nav_container">
				{/*button elements created using withRouter */}
				<LinkButton to="/gaming">Gaming</LinkButton>
				<LinkButton to="/racing">Racing</LinkButton>
				<LinkButton to="/funkos">Funkos</LinkButton>
				<LinkButton to="/search">Search</LinkButton>
			</div>
		</div>
	)
}

export default Header
