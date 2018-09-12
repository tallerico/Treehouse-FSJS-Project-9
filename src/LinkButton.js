import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

/* 
I got this code snipet from another source but I understand what it is doing.
I wanted to be able to have button elements instead of just buttons wrapped in <a></a> tags
which is what <NavLink></NavLink> and <Link> create.
*/
const LinkButton = props => {
	const {
		history,
		location,
		match,
		staticContext,
		to,
		onClick,
		// ⬆ filtering out props that `button` doesn’t know what to do with.
		...rest
	} = props
	return (
		<button
			{...rest} // `children` is just another prop!
			onClick={event => {
				onClick && onClick(event)
				history.push(to)
			}}
		/>
	)
}

LinkButton.propTypes = {
	to: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
}

export default withRouter(LinkButton)
