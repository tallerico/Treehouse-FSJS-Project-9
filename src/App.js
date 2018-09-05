import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Header from './Header'
import Gallery from './Gallery'
import './App.css'
import './normalize.css'

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

	componentWillMount() {
		const apiKey = process.env.REACT_APP_FLIKR_API_KEY

		fetch(
			`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=gaming&per_page=24&format=json&nojsoncallback=1`,
		)
			.then(results => {
				return results.json()
			})
			.then(data => {
				console.log(data)
				let pictures = data.photos.photo.map(pic => {
					const picture = {}
					picture[pic.key] = pic.value
					picture.picUrl = `https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${
						pic.secret
					}_q.jpg`
					return picture
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
				console.log(data)
				let pictures = data.photos.photo.map(pic => {
					const picture = {}
					picture[pic.key] = pic.value
					picture.picUrl = `https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${
						pic.secret
					}_q.jpg`
					return picture
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
				console.log(data)
				let pictures = data.photos.photo.map(pic => {
					const picture = {}
					picture[pic.key] = pic.value
					picture.picUrl = `https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${
						pic.secret
					}_q.jpg`
					return picture
				})
				this.setState({ funkoPictures: pictures })
			})
	}

	render() {
		return (
			<Fragment>
				<Header />
				<Gallery photos={this.state.pictures} />
			</Fragment>
		)
	}
}

export default App
