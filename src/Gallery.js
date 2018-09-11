import React from 'react'
import GalleryItem from './GalleryItem'

const Gallery = props => {
	const pics = props.pictures

	if (pics.length > 0) {
		return (
			<div className="gallery_container">
				{pics.map((url, index) => (
					<GalleryItem key={index.toString()} image={url} />
				))}
			</div>
		)
	} else {
		return (
			<div className="not_found_container">
				<div className="color_block">
					<h1>Sorry. No results found.</h1>
				</div>
			</div>
		)
	}
}

export default Gallery
