import React, { Component } from 'react'
import Header from './Header'
import Gallery from './Gallery'
import './App.css'
import './normalize.css'

class App extends Component {
	constructor() {
		super()
		this.state = {
			pictures: [],
		}
	}
	componentWillMount() {
		fetch(
			'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=c20a087bd2c43d4d67a25f51b52843eb&tags=gaming&per_page=24&format=json&nojsoncallback=1',
		)
			.then(results => {
				return results.json()
			})
			.then(data => {
				console.log(data)
				let pictures = data.photos.photo.map(pic => {
					const picture = {}
					picture[pic.key] = pic.value
					picture.title = pic.title
					picture.picUrl = `https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${
						pic.secret
					}_q.jpg`
					return picture
				})
				this.setState({ pictures })
			})
	}

	render() {
		return <Header />
	}
}

export default App
