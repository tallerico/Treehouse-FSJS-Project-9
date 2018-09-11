import React, { Component, Fragment } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Header from './Header'
import Gallery from './Gallery'
import NotFound from './NotFound'
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
		}
	}

	componentDidMount() {
		const apiKey = process.env.REACT_APP_FLIKR_API_KEY

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

	imageSearch = search => {
		const apiKey = process.env.REACT_APP_FLIKR_API_KEY

		fetch(
			`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`,
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
				this.setState({ searchPictures: pictures })
				console.log(pictures)
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
					<Route path="/search" render={() => <Gallery pictures={this.state.searchPictures} />} />
					<Redirect exact path="/" to="/gaming" />
					<Route component={NotFound} />
				</Switch>
			</Fragment>
		)
	}
}

export default App
