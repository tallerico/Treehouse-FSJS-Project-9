import React, { Component, Fragment } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Header from './Header'
import Gallery from './Gallery'
import NotFound from './NotFound'
import Loader from 'react-loader-spinner'
import './normalize.css'
import './App.css'

class App extends Component {
	constructor() {
		super()
		this.state = {
			gamingPictures: [],
			racingPictures: [],
			funkoPictures: [],
			searchPictures: [],
			fetchInProgress: false,
			validSearch: true,
		}
	}

	componentDidMount() {
		const apiKey = process.env.REACT_APP_FLIKR_API_KEY
		//fetching data for pictures and setting state with data
		fetch(
			`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=gaming&per_page=24&format=json&nojsoncallback=1`,
		)
			.then(results => {
				return results.json()
			})
			.then(data => {
				let pictures = data.photos.photo.map(pic => {
					return `https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${
						pic.secret
					}_q.jpg`
				})
				this.setState({ gamingPictures: pictures })
			})

		fetch(
			`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=racing&per_page=24&format=json&nojsoncallback=1`,
		)
			.then(results => {
				return results.json()
			})
			.then(data => {
				let pictures = data.photos.photo.map(pic => {
					return `https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${
						pic.secret
					}_q.jpg`
				})
				this.setState({ racingPictures: pictures })
			})

		fetch(
			`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=funko&per_page=24&format=json&nojsoncallback=1`,
		)
			.then(results => {
				return results.json()
			})
			.then(data => {
				let pictures = data.photos.photo.map(pic => {
					return `https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${
						pic.secret
					}_q.jpg`
				})
				this.setState({ funkoPictures: pictures })
			})
	}

	//search function that takes the value of the form field and fetches date from the api
	imageSearch = search => {
		const apiKey = process.env.REACT_APP_FLIKR_API_KEY
		//fetching data
		fetch(
			`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`,
		)
			.then(results => {
				this.setState({ fetchInProgress: true })
				return results.json()
			})
			.then(data => {
				// maps over data and creates and array of image addresses
				let pictures = data.photos.photo.map(pic => {
					return `https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${
						pic.secret
					}_q.jpg`
				})

				this.setState({ searchPictures: pictures })
				this.setState({ fetchInProgress: false })
				//checking if search returns 0 results. Using this state to display no results component
				if (pictures.length === 0) {
					this.setState({ validSearch: false })
				}
			})
	}

	render() {
		return (
			<Fragment>
				<Header search={this.imageSearch} />
				<Switch>
					<Route path="/gaming" render={() => <Gallery pictures={this.state.gamingPictures} />} />
					<Route path="/racing" render={() => <Gallery pictures={this.state.racingPictures} />} />
					<Route path="/funkos" render={() => <Gallery pictures={this.state.funkoPictures} />} />
					<Route
						path="/search"
						render={() => {
							//rendering gallery when fetch is complete
							if (!this.state.fetchInProgress) {
								return (
									<Gallery
										pictures={this.state.searchPictures}
										validSearch={this.state.validSearch}
									/>
								)
							} else {
								return (
									//loader rings when searching
									<div className="loader">
										<Loader type="Rings" color="#009688" height="100" width="100" />
									</div>
								)
							}
						}}
					/>

					<Redirect exact path="/" to="/gaming" />
					<Route component={NotFound} />
				</Switch>
			</Fragment>
		)
	}
}

export default App
