import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// creating a search component to search through images
class Search extends Component {
	constructor(props) {
		super(props)
		this.state = {
			value: '',
		}
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(event) {
		this.setState({ value: event.target.value })
	}

	clickHandler = event => {
		event.preventDefault()
		this.props.search(this.state.value)
	}

	render() {
		return (
			<div className="search_container">
				<form>
					<input
						type="text"
						placeholder="Search Images.."
						name="search"
						value={this.state.value}
						onChange={this.handleChange}
					/>
					<Link to="/search">
						<button className="btn" onClick={this.clickHandler}>
							Search
						</button>
					</Link>
				</form>
			</div>
		)
	}
}

export default Search
